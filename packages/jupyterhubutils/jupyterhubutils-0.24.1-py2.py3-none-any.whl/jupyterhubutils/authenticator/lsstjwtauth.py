'''LSST Authenticator to use JWT token present in request headers.
'''
import asyncio
from eliot import start_action
from jwtauthenticator.jwtauthenticator import JSONWebTokenAuthenticator
from .lsstauth import LSSTAuthenticator
from .lsstjwtloginhandler import LSSTJWTLoginHandler
from ..utils import make_logger, resolve_groups


class LSSTJWTAuthenticator(LSSTAuthenticator, JSONWebTokenAuthenticator):

    def __init__(self, *args, **kwargs):
        self.log = make_logger()
        self.log.debug("Creating LSSTJWTAuthenticator")
        # Superclass gives us the LSST Manager
        super().__init__(*args, **kwargs)
        self.auth_refresh_age = 900
        self.header_name = "X-Portal-Authorization"
        self.header_is_authorization = True
        self.username_claim_field = 'uid'
        self.cached_auth_state = {}

    def get_handlers(self, app):
        '''Install custom handlers.
        '''
        with start_action(action_type="get_handlers"):
            return [
                (r'/login', LSSTJWTLoginHandler),
            ]

    def logout_url(self, base_url):
        '''Returns the logout URL for JWT.
        '''
        with start_action(action_type="logout_url"):
            return self.lsst_mgr.config.jwt_logout_url

    async def refresh_user(self, user, handler):
        '''Delegate to login handler, if this happens in the login
        '''
        # We don't want to do this anywhere but on the login handler.
        #  It's cheating, but we'll just check to see if there is
        #  a custom method for refresh_user on the handler and call it
        #  if so.  That's true for the LSST JWT Authenticator case.
        with start_action(action_type="refresh_user_lsstjwtauth"):
            uname = user.escaped_name
            self.log.debug(
                "Entering lsstjwtauth refresh_user() for '{}'".format(uname))
            self.log.debug(
                "Calling superclass refresh_user for '{}'.".format(uname))
            _ = await super().refresh_user(user, handler)
            self.log.debug(
                "Returned from  superclass refresh_user for '{}'.".format(
                    uname))
            if hasattr(handler, 'refresh_user'):
                self.log.debug("Handler has refresh_user too.")
                self.log.debug(
                    "Calling handler's refresh_user() for '{}'.".format(uname))
                _ = await handler.refresh_user(user, handler)
                self.log.debug(
                    "Returned from handler refresh_user for '{}'.".format(
                        uname))
            # Set uid and group_map
            # Add 'uid' and 'group_map' to auth_state per lsstauth.py
            strict_ldap = self.lsst_mgr.config.strict_ldap_groups
            ast = await user.get_auth_state()
            claims = ast['claims']
            ast['uid'] = claims['uidNumber']
            ast['group_map'] = resolve_groups(claims, strict_ldap)
            await user.save_auth_state(ast)
            self.cached_auth_state = ast  # For ease of synchronous access
            return ast
