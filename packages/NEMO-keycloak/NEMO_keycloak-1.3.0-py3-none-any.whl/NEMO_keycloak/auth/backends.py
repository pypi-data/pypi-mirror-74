import logging

from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.backends import UserModel, ModelBackend
from django.core.exceptions import ImproperlyConfigured
from django.utils import timezone
from jose.exceptions import ExpiredSignatureError, JWTClaimsError, JWTError

import NEMO_keycloak.services.oidc_profile
from NEMO_keycloak.keycloak.exceptions import KeycloakClientError
from NEMO_keycloak.services.exceptions import InactiveUser

logger = logging.getLogger(__name__)


class KeycloakAuthorizationBase(ModelBackend):
    def get_user(self, user_id):
        UserModel = get_user_model()

        try:
            user = UserModel.objects.select_related("oidc_profile__realm").get(pk=user_id)
        except UserModel.DoesNotExist:
            return None

        if user.oidc_profile.does_not_expire or user.oidc_profile.refresh_expires_before > timezone.now():
            return user

        return None

    def get_all_permissions(self, user_obj, obj=None):
        if settings.KEYCLOAK_USE_USER_MODEL_PERMISSIONS:
            return super().get_all_permissions(user_obj, obj)
        if not user_obj.is_active or user_obj.is_anonymous or obj is not None:
            return set()
        if not hasattr(user_obj, "_keycloak_perm_cache"):
            user_obj._keycloak_perm_cache = self.get_keycloak_permissions(user_obj=user_obj)
        return user_obj._keycloak_perm_cache

    def get_keycloak_permissions(self, user_obj):
        if not hasattr(user_obj, "oidc_profile"):
            return set()

        rpt_decoded = NEMO_keycloak.services.oidc_profile.get_entitlement(oidc_profile=user_obj.oidc_profile)

        if settings.KEYCLOAK_PERMISSIONS_METHOD == "role":
            return [
                role
                for role in rpt_decoded["resource_access"].get(
                    user_obj.oidc_profile.realm.client.client_id, {"roles": []}
                )["roles"]
            ]
        elif settings.KEYCLOAK_PERMISSIONS_METHOD == "resource":
            permissions = []
            for p in rpt_decoded["authorization"].get("permissions", []):
                if "scopes" in p:
                    for scope in p["scopes"]:
                        if "." in p["resource_set_name"]:
                            app, model = p["resource_set_name"].split(".", 1)
                            permissions.append("{app}.{scope}_{model}".format(app=app, scope=scope, model=model))
                        else:
                            permissions.append(
                                "{scope}_{resource}".format(scope=scope, resource=p["resource_set_name"])
                            )
                else:
                    permissions.append(p["resource_set_name"])

            return permissions
        else:
            raise ImproperlyConfigured(
                "Unsupported permission method configured for "
                "Keycloak: {}".format(settings.KEYCLOAK_PERMISSIONS_METHOD)
            )


class KeycloakAuthorizationCodeBackend(KeycloakAuthorizationBase):
    def authenticate(self, request, code=None, redirect_uri=None, **kwargs):

        if not hasattr(request, "realm"):
            raise ImproperlyConfigured("Add BaseKeycloakMiddleware to middleware")

        keycloak_openid_profile = NEMO_keycloak.services.oidc_profile.update_or_create_from_code(
            client=request.realm.client, code=code, redirect_uri=redirect_uri
        )

        return keycloak_openid_profile.user


class KeycloakPasswordCredentialsBackend(KeycloakAuthorizationBase):
    def authenticate(self, request, username=None, password=None, **kwargs):

        if not hasattr(request, "realm"):
            raise ImproperlyConfigured("Add BaseKeycloakMiddleware to middleware")

        if not request.realm:
            # If request.realm does exist, but it is filled with None, we
            # can't authenticate using Keycloak
            return None

        try:
            keycloak_openid_profile = NEMO_keycloak.services.oidc_profile.update_or_create_from_password_credentials(
                client=request.realm.client, username=username, password=password
            )
        except KeycloakClientError:
            logger.debug("KeycloakPasswordCredentialsBackend: failed to " "authenticate.")
        except InactiveUser as e:
            # the user is inactive
            logger.debug("User is inactive " + str(e))
        except UserModel.DoesNotExist:
            # the user does not exist and option is set to not create it
            logger.debug("User does not exist in database and option KEYCLOAK_CREATE_DJANGO_USER is set to False")

        else:
            return keycloak_openid_profile.user

        return None


class KeycloakIDTokenAuthorizationBackend(KeycloakAuthorizationBase):
    def authenticate(self, request, access_token=None, **kwargs):

        if not hasattr(request, "realm"):
            raise ImproperlyConfigured("Add BaseKeycloakMiddleware to middleware")

        try:
            oidc_profile = NEMO_keycloak.services.oidc_profile.get_or_create_from_id_token(
                client=request.realm.client, id_token=access_token
            )
        except ExpiredSignatureError:
            # If the signature has expired.
            logger.debug(
                "KeycloakBearerAuthorizationBackend: failed to " "authenticate due to an expired access token."
            )
        except JWTClaimsError as e:
            logger.debug(
                "KeycloakBearerAuthorizationBackend: failed to "
                'authenticate due to failing claim checks: "%s"' % str(e)
            )
        except JWTError:
            # The signature is invalid in any way.
            logger.debug(
                "KeycloakBearerAuthorizationBackend: failed to " "authenticate due to a malformed access token."
            )
        except InactiveUser as e:
            # the user is inactive
            logger.debug("User is inactive " + str(e))
        except UserModel.DoesNotExist:
            # the user does not exist and option is set to not create it
            logger.debug("User does not exist in database and option KEYCLOAK_CREATE_DJANGO_USER is set to False")

        else:
            return oidc_profile.user

        return None
