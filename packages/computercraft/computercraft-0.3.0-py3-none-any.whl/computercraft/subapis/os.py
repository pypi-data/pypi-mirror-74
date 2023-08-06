from typing import Optional, List

from ..lua import LuaNum
from ..rproc import nil, string, option_string, number, integer, boolean
from ..sess import eval_lua_method_factory, get_current_greenlet


method = eval_lua_method_factory('os.')


__all__ = (
    'version',
    'getComputerID',
    'getComputerLabel',
    'setComputerLabel',
    'run',
    'captureEvent',
    'queueEvent',
    'clock',
    'time',
    'day',
    'epoch',
    'sleep',
    'startTimer',
    'cancelTimer',
    'setAlarm',
    'cancelAlarm',
    'shutdown',
    'reboot',
)


def version() -> str:
    return string(method('version'))


def getComputerID() -> int:
    return integer(method('getComputerID'))


def getComputerLabel() -> Optional[str]:
    return option_string(method('getComputerLabel'))


def setComputerLabel(label: Optional[str]):
    return nil(method('setComputerLabel', label))


def run(environment: dict, programPath: str, *args: List[str]):
    return boolean(method('run', environment, programPath, *args))


def captureEvent(event: str):
    glet = get_current_greenlet().cc_greenlet
    sess = glet._sess
    evr = sess._evr
    evr.sub(glet._task_id, event)
    try:
        while True:
            val = evr.get_from_stack(glet._task_id, event)
            if val is None:
                res = sess._server_greenlet.switch()
                assert res == 'event'
            else:
                yield val
    finally:
        evr.unsub(glet._task_id, event)


def queueEvent(event: str, *params):
    return nil(method('queueEvent', event, *params))


def clock() -> LuaNum:
    # number of game ticks * 0.05, roughly seconds
    return number(method('clock'))


# regarding ingame parameter below:
# python has great stdlib to deal with real current time
# we keep here only in-game time methods and parameters

def time() -> LuaNum:
    # in hours 0..24
    return number(method('time', 'ingame'))


def day() -> int:
    return integer(method('day', 'ingame'))


def epoch() -> int:
    return integer(method('epoch', 'ingame'))


def sleep(seconds: LuaNum):
    return nil(method('sleep', seconds))


def startTimer(timeout: LuaNum) -> int:
    return integer(method('startTimer', timeout))


def cancelTimer(timerID: int):
    return nil(method('cancelTimer', timerID))


def setAlarm(time: LuaNum) -> int:
    # takes time of the day in hours 0..24
    # returns integer alarmID
    return integer(method('setAlarm', time))


def cancelAlarm(alarmID: int):
    return nil(method('cancelAlarm', alarmID))


def shutdown():
    return nil(method('shutdown'))


def reboot():
    return nil(method('reboot'))
