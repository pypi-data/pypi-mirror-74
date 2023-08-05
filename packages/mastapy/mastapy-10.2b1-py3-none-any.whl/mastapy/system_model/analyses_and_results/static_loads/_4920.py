﻿'''_4920.py

ParametricStudyType
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_PARAMETRIC_STUDY_TYPE = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.StaticLoads', 'ParametricStudyType')


__docformat__ = 'restructuredtext en'
__all__ = ('ParametricStudyType',)


class ParametricStudyType(Enum):
    '''ParametricStudyType

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _PARAMETRIC_STUDY_TYPE
    __hash__ = None

    LINEAR_SWEEP = 0
    MONTE_CARLO = 1
    DESIGN_OF_EXPERIMENTS = 2
