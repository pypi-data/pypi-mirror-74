﻿'''_659.py

AnalysisMethod
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_ANALYSIS_METHOD = python_net_import('SMT.MastaAPI.Gears.Manufacturing.Cylindrical.HobbingProcessSimulationNew', 'AnalysisMethod')


__docformat__ = 'restructuredtext en'
__all__ = ('AnalysisMethod',)


class AnalysisMethod(Enum):
    '''AnalysisMethod

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _ANALYSIS_METHOD
    __hash__ = None

    NEWTON_RAPHSON = 0
    HEURISTIC_SEARCH = 1
