# coding:utf-8

# @Time: 2020/7/8 11:05
# @Auther: liyubin


import os
import json
import time
import datetime
import shutil
from injson import check
from super_sweetest.globals import g
from super_sweetest.elements import e
from super_sweetest.log import logger
from super_sweetest.utility import json2dict

"""
mqtt keyword
"""

def login_mqtt(step):
    """登录mqtt"""
    request('login_mqtt', step)


def send(step):
    """发送mqtt消息"""
    request('mqtt', step)


def send_mqtt(theme_dict, data):
    """发送mqtt主方法"""

    try:
        # 主题信息 topic/qos
        qos = int(theme_dict.get('QOS', 1))
        SUBSCRIBE = theme_dict.get('SUBSCRIBE', '') + '#'  # 订阅主题最后 # 会被替换
        PUBLISH = theme_dict.get('PUBLISH', '')

        # 测试数据 msg
        msg = json.dumps(data, ensure_ascii=False)

        if msg != '{}' and SUBSCRIBE and PUBLISH:
            logger.info('Send Mqtt Msg: %s' % msg)
            g.mqtt_client_.on_subscribe(topic=SUBSCRIBE, qos=qos)  # 订阅
            g.mqtt_client_.on_publish(topic=PUBLISH, msg=msg, qos=qos)  # 发布消息
            g.mqtt_client_.on_message()  # 消息回调 / on_message_come 内部添加 返回值处理 的函数
            logger.info(' --- 等待消息回调 --- ')
    except:
        pass


def request(kw, step):
    """
    登录/发送mqtt请求/数据处理
    :param kw:
    :param step:
    :return:
    """
    # 全局文件路径
    global g_file
    g_file = os.path.join('log', microsecond() + '.json')

    element = step['element']
    theme = e.get(element)[1]  # 订阅/发布的主题
    theme_dict = json2dict(theme.replace('，', ',').replace('“', '"')) if '{' in theme else ''

    data = step['data']
    duration = int(data.pop('持续时间', 6))
    # 测试数据解析时，会默认添加一个 text 键，需要删除
    if 'text' in data and not data['text']:
        data.pop('text')

    _data = {}

    if kw in ('mqtt', 'login_mqtt'):
        _data['json'] = json2dict(data.pop('json', '{}'))

    for k in data:
        for s in ('{', '[', 'False', 'True'):
            if s in data[k]:
                try:
                    data[k] = eval(data[k])
                except:
                    logger.warning('Try eval data failure: %s' % data[k])
                break

    expected_ = step['expected']
    expected_['status_code'] = expected_.get('status_code', None)
    expected_['json'] = json2dict(expected_.get('json', '{}'))
    expected_['time'] = float(expected_.get('time', 0))

    # 登录/初始化mqtt客户端
    if kw == 'login_mqtt' and g.mqtt_client_ == '':
        from super_sweetest.servers.mqtt_client import Mqtt_Init
        mqtt_init = Mqtt_Init()
        g.mqtt_client_ = mqtt_init.setup_mqttclient(_data['json'])

    # 发送mqtt消息
    elif kw == 'mqtt':
        send_mqtt(theme_dict, _data['json'])

        # 运行结果预处理
        get_response_expect_var(expected_, step, duration)


def shutil_file():
    """
    删除微秒级文件
    """
    if os.path.exists(g_file):
        try:
            shutil.rmtree(g_file)
        except:
            try:
                os.remove(g_file)
            except:
                logger.info('remove file: %s error' % g_file)


def microsecond():
    """微秒级时间戳"""
    return str(round(time.time() * 1000000))


def write_mqtt_msg(message):
    """
    消息回调调用，写入消息回调
    :param message:
    :return:
    """
    with open(g_file, 'w+')as fp: fp.write(message) if message else None


def read_mqtt_msg(timeout=6):
    """
    获取mqtt消息回调
    :param timeout: 超时
    :return:
    """
    # 隐式等待/提高消息回调效率
    now_time_flag = datetime.datetime.now()
    while True:
        time.sleep(0.01)
        if (datetime.datetime.now() - now_time_flag).seconds > timeout:
            break
        if os.path.exists(g_file):
            with open(g_file, 'r+')as fp:
                return fp.read()
    return '{"msg": "未收到消息回调"}'


def get_response_expect_var(expected_, step_, duration):
    """
    获取消息回调中写入的返回值
    预期值处理
    变量处理
    :param response:
    :return:
    """
    # 读取返回信息
    response_ = read_mqtt_msg(duration)
    # logger.info("mqtt response : %s" %response_)

    # 清理生成的文件
    shutil_file()

    # 消息回调转dict
    response = json2dict(response_)
    var = {}  # 存储所有输出变量
    if expected_['json']:
        result = check(expected_['json'], response)
        logger.info('json check result: %s' % result)
        if result['code'] != 0:
            raise Exception(f'json | EXPECTED:{repr(expected_["json"])}, REAL:{repr(response)}, RESULT: {result}')
        elif result['var']:
            var = dict(var, **result['var'])
            g.var = dict(g.var, **result['var'])
            logger.info('json var: %s' % (repr(result['var'])))

    output = step_['output']
    if output:
        logger.info('output: %s' % repr(output))

    for k, v in output.items():
        if k == 'json':
            sub = json2dict(output.get('json', '{}'))
            result = check(sub, response)
            # logger.info('Compare json result: %s' % result)
            var = dict(var, **result['var'])
            g.var = dict(g.var, **result['var'])
            logger.info('json var: %s' % (repr(result['var'])))

    if var:
        step_['_output'] += '\n||output=' + str(var)
