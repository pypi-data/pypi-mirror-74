# encoding: utf-8
import http
import requests
from urllib3 import disable_warnings
from urllib3.exceptions import InsecureRequestWarning

from ..config import CxConfig
from ..exceptions.CxError import BadRequestError, CxError
from .dto import (CxAuthRequest, CxAuthResponse)

disable_warnings(InsecureRequestWarning)


class AuthenticationAPI(object):
    """
    Token-based Authentication
    """
    base_url = CxConfig.CxConfig.config.config.url
    auth_headers = None
    verify = CxConfig.CxConfig.config.verify

    def __init__(self):
        """

        """
        self.reset_auth_headers()

    @classmethod
    def reset_auth_headers(cls):
        """
        use the credentials from config.ini to get access token, store it in a CxAuthResponse object,
        get the HTTP header

        Returns:
            dict
                the HTTP header that will be used in other REST API
        """
        config_info = CxConfig.CxConfig.config
        req_data = CxAuthRequest.CxAuthRequest(
            username=config_info.username, password=config_info.password,
            grant_type=config_info.grant_type, scope=config_info.scope,
            client_id=config_info.client_id, client_secret=config_info.client_secret
        ).get_post_data()

        token_url = AuthenticationAPI.base_url + "/auth/identity/connect/token"

        r = requests.post(url=token_url, data=req_data, verify=AuthenticationAPI.verify)
        if r.status_code == http.HTTPStatus.OK:
            d = r.json()
            auth_response = CxAuthResponse.CxAuthResponse(
                d.get("access_token"), d.get("expires_in"), d.get("token_type")
            )
            AuthenticationAPI.auth_headers = {
                "Authorization": auth_response.token_type + " " + auth_response.access_token,
                "Accept": "application/json;v=1.0",
                "Content-Type": "application/json;v=1.0",
                "cxOrigin": "REST API"
            }
        elif r.status_code == http.HTTPStatus.BAD_REQUEST:
            raise BadRequestError(r.text)
        else:
            raise CxError(r.text, r.status_code)

        return AuthenticationAPI.auth_headers


AuthenticationAPI()
