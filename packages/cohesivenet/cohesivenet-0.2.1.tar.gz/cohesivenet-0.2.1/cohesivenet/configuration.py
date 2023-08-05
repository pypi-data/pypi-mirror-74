# coding: utf-8

"""
    Cohesive Networks SDK

    Cohesive Networks SDK is a thin wrapper around our product APIs providing complete control of your network's addresses, routes, rules and edge  # noqa: E501

    The version of the OpenAPI document: 4.8
    Contact: solutions@cohesive.net
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import copy
import multiprocessing
import sys
import urllib3


class TypeWithDefault(type):
    def __init__(cls, name, bases, dct):
        super(TypeWithDefault, cls).__init__(name, bases, dct)
        cls._default = None

    def __call__(cls, **kwargs):
        if cls._default is None:
            cls._default = type.__call__(cls, **kwargs)
        return copy.copy(cls._default)

    def set_default(cls, default):
        cls._default = copy.copy(default)


class Configuration(object):
    """
    :param host: Base url
    :param api_key: Dict to store API key(s)
    :param api_key_prefix: Dict to store API prefix (e.g. Bearer)
    :param username: Username for HTTP basic authentication
    :param password: Password for HTTP basic authentication
    """

    DEFAULT_PROTOCOL = "https"

    def __init__(
        self,
        host="",
        api_key=None,
        api_key_prefix=None,
        api_token=None,
        username="",
        password="",
        protocol=None,
        verify_ssl=True,
    ):
        """Constructor
        """
        self.host = host
        """Default Base url
        """
        self.protocol = (protocol or self.DEFAULT_PROTOCOL).lower()
        """HTTP or HTTPS
        """

        self.temp_folder_path = None
        """Temp file folder for downloading files
        """
        # Authentication Settings
        self.api_key = api_key
        """dict to store API key(s)
        """
        self.api_key_prefix = api_key_prefix
        """dict to store API prefix (e.g. Bearer)
        """
        self.refresh_api_key_hook = None
        """function hook to refresh API key if expired
        """
        self.api_token = api_token
        """API token
        """
        self.refresh_api_token_hookk = None
        """function hook to refresh API token if expired
        """
        self.username = username
        """Username for HTTP basic authentication
        """
        self.password = password
        """Password for HTTP basic authentication
        """

        self.verify_ssl = verify_ssl
        """SSL/TLS verification
           Set this to false to skip verifying SSL certificate when calling API
           from https server.
        """
        self.ssl_ca_cert = None
        """Set this to customize the certificate file to verify the peer.
        """
        self.cert_file = None
        """client certificate file
        """
        self.key_file = None
        """client key file
        """
        self.assert_hostname = None
        """Set this to True/False to enable/disable SSL hostname verification.
        """

        self.connection_pool_maxsize = multiprocessing.cpu_count() * 5
        """urllib3 connection pool's maximum number of connections saved
           per pool. urllib3 uses 1 connection as default value, but this is
           not the best value when you are making a lot of possibly parallel
           requests to the same host, which is often the case here.
           cpu_count * 5 is used as default value to increase performance.
        """

        self.proxy = None
        """Proxy URL
        """
        self.proxy_headers = None
        """Proxy headers
        """
        self.safe_chars_for_path_param = ""
        """Safe chars for path_param
        """
        self.retries = None
        """Adding retries to override urllib3 default value 3
        """
        # Client side validation
        self.client_side_validation = True

    @property
    def host(self):
        return self._host

    @host.setter
    def host(self, value):
        if value is None:
            return

        if value.startswith("http"):
            raise ValueError(
                "Host must not contain protocol information. "
                'Please set configuration "protocol" attribute.'
            )
        self._host = value.strip("/")

    @property
    def endpoint(self):
        return self.protocol + "://" + self.host

    @property
    def host_uri(self):
        if not self.host:
            return ""
        parts = self.host.split(":")  # remove port if exists
        return parts[0]

    def is_valid(self):
        return all([self.host and self.username and self.password])

    def get_api_key_with_prefix(self, identifier):
        """Gets API key (with prefix if set).

        :param identifier: The identifier of apiKey.
        :return: The token for api key authentication.
        """
        if self.refresh_api_key_hook is not None:
            self.refresh_api_key_hook(self)
        key = self.api_key
        if key:
            prefix = self.api_key_prefix
            if prefix:
                return "%s %s" % (prefix, key)
            else:
                return key

    def get_token(self):
        return self.api_token

    def get_basic_auth_token(self):
        """Gets HTTP basic authentication header (string).

        :return: The token for basic HTTP authentication.
        """
        if not all([self.username, self.password]):
            return None

        return urllib3.util.make_headers(
            basic_auth=self.username + ":" + self.password
        ).get("authorization")

    def auth_settings(self):
        """Gets Auth Settings dict for api client.

        :return: The Auth Settings information dict.
        """
        return {
            "basicAuth": {
                "type": "basic",
                "in": "header",
                "key": "Authorization",
                "value": self.get_basic_auth_token(),
            },
            "ApiTokenAuth": {
                "type": "api_key",
                "in": "header",
                "key": "api-token",
                "value": self.get_token(),
            },
        }

    def to_debug_report(self):
        """Gets the essential information for debugging.

        :return: The report for debugging.
        """
        return (
            "Python SDK Debug Report:\n"
            "OS: {env}\n"
            "Python Version: {pyversion}\n"
            "Version of the API: 4.8\n"
            "SDK Package Version: 1.0.0".format(env=sys.platform, pyversion=sys.version)
        )

    def get_host_settings(self):
        """Gets an array of host settings

        :return: An array of host settings
        """
        return [{"url": "vns3-endpoint", "description": "Host URI for VNS3 service"}]

    def get_host_from_settings(self, index, variables={}):
        """Gets host URL based on the index and variables
        :param index: array index of the host settings
        :param variables: hash of variable and the corresponding value
        :return: URL based on host settings
        """

        servers = self.get_host_settings()

        # check array index out of bound
        if index < 0 or index >= len(servers):
            raise ValueError(
                "Invalid index {} when selecting the host settings. Must be less than {}".format(  # noqa: E501
                    index, len(servers)
                )
            )

        server = servers[index]
        url = server["url"]

        # go through variable and assign a value
        for variable_name in server["variables"]:
            if variable_name in variables:
                if (
                    variables[variable_name]
                    in server["variables"][variable_name]["enum_values"]
                ):
                    url = url.replace(
                        "{" + variable_name + "}", variables[variable_name]
                    )
                else:
                    raise ValueError(
                        "The variable `{}` in the host URL has invalid value {}. Must be {}.".format(  # noqa: E501
                            variable_name,
                            variables[variable_name],
                            server["variables"][variable_name]["enum_values"],
                        )
                    )
            else:
                # use default value
                url = url.replace(
                    "{" + variable_name + "}",
                    server["variables"][variable_name]["default_value"],
                )

        return url
