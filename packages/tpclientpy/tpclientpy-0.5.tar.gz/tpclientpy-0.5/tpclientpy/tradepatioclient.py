from time import time
import requests
import urllib.parse
import hashlib
import hmac
import math


class TradePatioClient:
    def __init__(self, api_key="", api_secret="", host=""):
        self.api_key = api_key
        self.api_secret = api_secret.encode("utf-8")
        self.host = host
        self.path_origin_name = "path_origin"

    def get_exchanges(self):
        return self.request(
            body={},
            path="/api/v1/exchange",
            method="GET",
        ).json()

    def get_exchange_pairs(self, exchange):
        return self.request(
            body={},
            path="/api/v1/exchange/pair",
            method="GET",
            query={
                'exch': exchange,
            },
        ).json()

    def get_exchange_candles(self, exchange, pair, time_frame, period, unlimited=False):
        return self.request(
            body={},
            path="/api/v1/exchange/pair/candles",
            method="GET",
            query={
                'ex': exchange,
                'pair': pair,
                'time-frame': time_frame,
                'period': period,
                'unlimited': str(unlimited),
            },
        ).json()

    def lua_call(self, script_name, event_name, body={}):
        return self.request(
            body=body,
            path="/api/v1/lua/call",
            method="POST",
            query={
                'script_name': script_name,
                'event_name': event_name,
            },
        ).json()

    def request(self, body, path, method, query={}):
        query['nonce'] = math.floor(time())
        query[self.path_origin_name] = path
        sig = self.make_sig(payload=query)

        if method == "GET":
            return requests.get(url=self.host + path, headers={'SHA512': sig})
        elif method == "POST":
            return requests.post(url=self.host + path, json=body, headers={'SHA512': sig})

    def make_sig(self, payload):
        payloadStr = urllib.parse.urlencode(payload).encode('utf8')
        sign = hmac.new(self.api_secret, payloadStr, hashlib.sha512).hexdigest()

        return self.api_key + "." + payloadStr.decode("utf-8") + "." + sign
