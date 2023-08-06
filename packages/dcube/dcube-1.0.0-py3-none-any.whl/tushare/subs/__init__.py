# -*- coding: utf-8 -*-
# coding: utf8
import threading
from multiprocessing import Process
try:
    import thread               # python2
except:
    import _thread as thread    # python3
import json, logging, websocket, time, sys, re, fnmatch, ssl
from functools import wraps
from collections import defaultdict
from websocket._exceptions import WebSocketConnectionClosedException


logger = logging.getLogger(__name__)
logger.level = logging.INFO

websocket.enableTrace(False)

class Subs(object):

    def __init__(self, token='', callback_mode='single-thread', debug=False):
        """
        :param url:
        :param token:
        :param callback_mode: single-thread or multi-thread
            single-thread   在主线程中直接回调注册函数
            multi-thread    以线程的方式回调注册的函数
            multi-process   以进程的方式回调注册的函数
        """
        self.url = 'wss://ws.waditu.com/listening'
        self.token = token
        self.debug = debug

        self.callback_mode = callback_mode
        self.topics = defaultdict(lambda: list())
        self.callback_funcs = defaultdict(lambda: list())

        self.websocket = None

    def threading_keepalive_ping(self):
        def ping():
            time.sleep(30)
            req_data = {
                "action": "ping"
            }
            self.websocket.send(json.dumps(req_data))
            logger.debug('send ping message')
        threading.Thread(target=ping).start()

    def on_open(self, *args, **kwargs):
        # 启动监听
        req_data = {
            "action": "listening",
            "token": self.token,
            "data": self.topics
        }
        self.websocket.send(json.dumps(req_data))
        logger.info('application starting...')
        self.threading_keepalive_ping()

    def on_message(self, message, *args, **kwargs):
        logger.debug(message)
        resp_data = json.loads(message)
        if not resp_data.get('status'):
            logger.error(resp_data.get('message'))
            return
        data = resp_data.get('data', {})
        if not data or not isinstance(data, dict):
            return

        topic = data.get('topic')
        code = data.get('code')
        record = data.get('record')
        if not topic or not code or not record:
            logger.warning('get invalid response-data(%s)' % resp_data)
            return

        self._do_callback_function(topic, code, record)

    def on_error(self, error, *args, **kwargs):
        if self.debug:
            logging.error(str(error), exc_info=True)

    def on_close(self, *args, **kwargs):
        logger.info('close')
        _type, _value, _traceback = sys.exc_info()
        if _type in [WebSocketConnectionClosedException, ConnectionRefusedError]:
            time.sleep(1)
            self.run()

    def run(self):
        if not self.topics:
            logger.error('还有没有订阅任何实时数据')
            return

        self.websocket = websocket.WebSocketApp(
            self.url,
            on_message=self.on_message,
            on_error=self.on_error,
            on_close=self.on_close,
            on_open=self.on_open
        )
        if self.url.startswith('wss:'):
            self.websocket.run_forever(sslopt={"cert_reqs": ssl.CERT_NONE})
        else:
            self.websocket.run_forever()

    def register(self, topic, codes):
        """ 装饰器方法， 注册将会被回调的方法
        :param topic:  指定订阅的交易所
                例如： HQ_STK_SH, HQ_STK_SZ
        :param codes: 指定订阅的交易代码
        :return:
        """
        codes = set(codes)

        def decorator(func):
            func.codes = set()
            func.pcodes = set()
            for code in codes:
                # 检查 code格式是否合法
                if not re.match(r'[\d\w\.\*]+', code):
                    logger.error(f'不合法的 code({code})')
                    exit(1)

                if '*' in code:
                    # 检查通配是否冲突
                    for code1 in func.pcodes:
                        if fnmatch.fnmatch(code1, code) or fnmatch.fnmatch(code, code1):
                            logger.error(f'重复匹配 code({code1}, {code})')
                            exit(1)
                    for code1 in func.codes:
                        if fnmatch.fnmatch(code1, code):
                            logger.error(f'重复匹配 code({code1}, {code})')
                            exit(1)
                    func.pcodes.add(code)
                else:
                    # 检查通配是否冲突
                    for code1 in func.pcodes:
                        if fnmatch.fnmatch(code, code1):
                            logger.error(f'重复匹配 code({code1}, {code})')
                            exit(1)
                    func.codes.add(code)

            self.topics[topic] += codes
            self.callback_funcs[topic].append(func)

            @wraps(func)
            def inner(*args, **kwargs):
                """ should receive a message-value parameter """
                return func(*args, **kwargs)

            return inner

        return decorator

    def _do_callback_function(self, topic, code, value):
        for func in self.callback_funcs[topic]:
            # 过滤主题
            checked = False
            if code in func.codes:
                checked = True
            else:
                for pcode in func.pcodes:
                    if fnmatch.fnmatch(code, pcode):
                        checked = True
                        break

            if not checked:
                continue

            # 回调function
            if self.callback_mode == 'single-thread':
                func(value)
            elif self.callback_mode == 'multi-thread':
                thread.start_new_thread(func, (value,))
            elif self.callback_mode == 'multi-process':
                p = Process(target=func, args=(value,))
                p.start()


if __name__ == '__main__':
    pass
