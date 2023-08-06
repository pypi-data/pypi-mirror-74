import re
import threading
import requests

def validate_currency(currency_str):
    return len(currency_str) == 3

def validate_amount(amount_str):
    try:
        return float(amount_str)
    except ValueError:
        return False


def validate_phone(phone_str):
    try:
        return re.match('^\+\d{1,3}\d{3,}$', phone_str)
    except ValueError:
        return False


def validate_data_validity(data_validity):
    if data_validity in ['Day', 'Week', 'Month']:
        return True
    return False

def validate_keys(test_dict, valid_keys_set):
    if set(test_dict.keys()) == valid_keys_set:
        return True
    return False  


class DarbirdException(Exception):
    pass


class Service(object):

    def __init__(self, username, api_key):

        if type(username) is not str:
            raise RuntimeError('username has to be of type str.')

        if type(api_key) is not str:
            raise RuntimeError('api_key has to be of type str.')

        self._PRODUCTION_DOMAIN = 'darbird.com/api'
    
        self._username = username
        self._api_key = api_key
        self._headers = {
            'Accept': 'application/json',
            'User-Agent': 'darbird-python/2.0.0',
            'X-Darbird-Token':username,
            'X-Darbird-Key': api_key
        }
        self._baseUrl = 'https://api.darbird.com/api'
        self._init_service()

    def _init_service(self):
        raise NotImplementedError

    @staticmethod
    def __make_get_request(url, headers, data, params, callback=None):
        res = requests.get(
            url=url,
            headers=headers,
            params=params,
            data=data
        )

        if callback is None or callback == {}:
            return res
        else:
            callback(res)

    @staticmethod
    def __make_post_request(url, headers, data, params, callback=None):
        res = requests.post(
            url=url,
            headers=headers,
            params=params,
            data=data,
        )
        if callback is None or callback == {}:
            return res
        else:
            callback(res)

    def _make_request(self, url, method, headers, data, params, callback=None):
        method = method.upper()
        if callback is None:

            if method == 'GET':
                res = self.__make_get_request(url=url, headers=headers, data=data, params=params)
            elif method == 'POST':
                res = self.__make_post_request(url=self._baseUrl+url, headers=headers, data=data, params=params)
            else:
                print("'Unexpected HTTP method")
                #raise DarbirdException('Unexpected HTTP method: ' + method)

            if 200 <= res.status_code < 300:
                if res.headers.get('content-type') == 'application/json':
                    return res.json()
                else:
                    return res.text
            else:
                raise DarbirdException(res.text)
        elif not callable(callback):
            print("'callback has to be callable. e.g. a function")
           # raise RuntimeError('callback has to be callable. e.g. a function')
        else:
            def cb(response):
                if 200 <= response.status_code < 300:
                    if response.headers.get('content-type') == 'application/json':
                        callback(None, response.json())
                    else:
                        callback(None, response.text)
                else:
                    callback(DarbirdException(response.text), None)

            if method == 'GET':
                _target = self.__make_get_request
            elif method == 'POST':
                _target = self.__make_post_request
            else:
                print('Unexpected HTTP method: ' + method)
                #raise DarbirdException('Unexpected HTTP method: ' + method)

            thread = threading.Thread(target=_target, args=(url, headers, data, params, cb))
            thread.start()
            return thread


class APIService(Service):

    def __init__(self, username, api_key):
        super(APIService, self).__init__(username, api_key)

    def _init_service(self):
        self._baseUrl = 'https://api.darbird.com/api'