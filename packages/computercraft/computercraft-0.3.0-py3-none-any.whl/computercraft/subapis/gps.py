from typing import Tuple, Optional

from ..lua import LuaNum
from ..rproc import tuple3_number, fact_option
from ..sess import eval_lua_method_factory


option_tuple3_number = fact_option(tuple3_number)
method = eval_lua_method_factory('gps.')


__all__ = (
    'CHANNEL_GPS',
    'locate',
)


CHANNEL_GPS = 65534


def locate(timeout: LuaNum = None, debug: bool = None) -> Optional[Tuple[LuaNum, LuaNum, LuaNum]]:
    return option_tuple3_number(method('locate', timeout, debug))
