"""Base Python Class file for SensorPush."""

import time
import logging
import requests

from pysensorpush.sensor import SPSensor
from pysensorpush.const import ( OAUTH_AUTHORIZE_ENDPOINT,
                                 OAUTH_TOKEN_ENDPOINT, 
                                 LIST_SENSORS_ENDPOINT,
                                 LIST_GATEWAYS_ENDPOINT,
                                 QUERY_SAMPLES_ENDPOINT )

LOG = logging.getLogger(__name__)

ACCESS_TOKEN_EXPIRY_SECONDS=600 # 10 min

class PySensorPush(object):
    """Base object for SensorPush."""

    def __init__(self, username=None, password=None):
        """Create a PySensorPush object.
        :param username: SensorPush user email
        :param password: SensorPush user password
        :returns PySensorPush base object
        """
        self.__session = requests.Session()

        self.__token = None
        self.__headers = None
        self.__params = None

        # login the user
        self.__username = username
        self.__password = password
        self.login()

        self._all_gateways = None
        self._all_sensors = None

    def __repr__(self):
        """Object representation."""
        return "<{0}: {1}>".format(self.__class__.__name__, self.__username)

    def login(self):
        """Login to the SensorPush account and generate access token"""
        self.reset_headers()
        
        # authenticate with user/password
        data = self.query(
            OAUTH_AUTHORIZE_ENDPOINT,
            extra_params={
                'email':    self.__username,
                'password': self.__password
            },
            force_login=False)

        if not data:
            LOG.error("Could not authenticate to SensorPush service with %s and password", self.__username)
            return False

        self.__apikey = data.get('apikey')
        self.__authorization = data.get('authorization')

        # get OAuth access token
        data = self.query(
            OAUTH_TOKEN_ENDPOINT,
            extra_params={
                'authorization': self.__authorization
            },
            force_login=False)

        if not data:
            LOG.error("Could not get SensorPush OAuth token for %s", self.__username)
            return False
        
        self.__token = data.get('accesstoken')
        self.__refresh_token = data.get('refreshtoken')
        self.__token_timestamp = time.time()
        
        return True

    def _is_access_token_expired(self):
        return (time.time() - self.__token_timestamp) > ACCESS_TOKEN_EXPIRY_SECONDS

    @property
    def is_connected(self):
        """Connection status of client with SensorPush cloud service."""
        return bool(self.__token) and not self._is_access_token_expired()

    def reset_headers(self):
        """Reset the headers and params."""
        self.__headers = {
            'User-Agent':    'pysensorpush (https://github.com/rsnodgrass/pysensorpush)',
            'accept':        'application/json',
            'Content-Type':  'application/json',
            'Authorization':  self.__token
        }
        self.__params = {}

    def query(self, url, method='POST', extra_params=None, extra_headers=None, retry=3, force_login=True):
        """
        Returns a JSON object for an HTTP request.
        :param url: API URL
        :param method: Specify the method GET, POST or PUT (default=POST)
        :param extra_params: Dictionary to be appended on request.body
        :param extra_headers: Dictionary to be apppended on request.headers
        :param retry: Retry attempts for the query (default=3)
        """
        response = None
        self.reset_headers() # ensure the headers and params are reset to the bare minimum

        # FIXME: this should really use refresh token, if possible, to reauthenticate
        if force_login and not self.is_connected:
            self.login()

        loop = 0
        while loop <= retry:

            # override request.body or request.headers dictionary
            params = self.__params
            if extra_params:
                params.update(extra_params)
 #           LOG.debug("Params: %s", params)

            headers = self.__headers
            if extra_headers:
                headers.update(extra_headers)
#            LOG.debug("Headers: %s", headers)

            loop += 1
            LOG.debug("Querying %s on attempt: %s/%s", url, loop, retry)

            # define connection method
            request = None
            if method == 'GET':
                request = self.__session.get(url, headers=headers)
            elif method == 'PUT':
                request = self.__session.put(url, headers=headers, json=params)
            elif method == 'POST':
                request = self.__session.post(url, headers=headers, json=params)
            else:
                LOG.error("Invalid request method '%s'", method)
                return None

            if request and (request.status_code == 200):
                response = request.json()
                break # success!

        return response

    @property
    def sensors(self):
        """Return all sensors registered with the SensorPush account."""
        if self._all_sensors:
            return self._all_sensors

        self._all_sensors = self.query(LIST_SENSORS_ENDPOINT)
        LOG.debug("Response sensors = %s", self._all_sensors)
        return self._all_sensors

    @property
    def gateways(self):
        """Return all gateways registered with the SensorPush account."""
        if self._all_gateways:
            return self._all_gateways

        self._all_gateways = self.query(LIST_GATEWAYS_ENDPOINT)
        LOG.debug("Response gateways = %s", self._all_gateways)
        return self._all_gateways

    @property
    def samples(self, limit=1, startTime=None, stopTime=None):
        """Return samples from the SensorPush account.
        :param limit:     how many samples to return, up to 20 (default=1)
        :param startTime: start timestamp range with this format YYYY-MM-DDThh:mm:ss.000Z
        :param stopTime:  stop timestamp range with this format YYYY-MM-DDThh:mm:ss.000Z"""

        params = { 'limit': limit }
        if startTime:
            params['startTime'] = startTime
        if stopTime:
            params['stopTime'] = stopTime

        result = self.query(QUERY_SAMPLES_ENDPOINT, extra_params=params)
        LOG.debug("Samples (limit %d) = %s", limit, result)
        return result

    def update(self, update_gateways=False, update_sensors=False):
        """Refresh any cached state."""
        self.login()
        
        if update_gateways:
            # clear cache and force update
            self._all_gateways = None
            force_update = self.gateways

        if update_sensors:
            # clear cache and force update
            self._all_sensors = None
            force_update = self.sensors
