﻿'''_117.py

TransientSolverToleranceInputMethod
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_TRANSIENT_SOLVER_TOLERANCE_INPUT_METHOD = python_net_import('SMT.MastaAPI.NodalAnalysis', 'TransientSolverToleranceInputMethod')


__docformat__ = 'restructuredtext en'
__all__ = ('TransientSolverToleranceInputMethod',)


class TransientSolverToleranceInputMethod(Enum):
    '''TransientSolverToleranceInputMethod

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _TRANSIENT_SOLVER_TOLERANCE_INPUT_METHOD
    __hash__ = None

    SIMPLE = 0
    ADVANCED = 1
