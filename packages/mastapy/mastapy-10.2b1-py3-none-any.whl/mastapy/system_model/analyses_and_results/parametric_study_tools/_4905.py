﻿'''_4905.py

DoeValueSpecificationOption
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_DOE_VALUE_SPECIFICATION_OPTION = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ParametricStudyTools', 'DoeValueSpecificationOption')


__docformat__ = 'restructuredtext en'
__all__ = ('DoeValueSpecificationOption',)


class DoeValueSpecificationOption(Enum):
    '''DoeValueSpecificationOption

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _DOE_VALUE_SPECIFICATION_OPTION
    __hash__ = None

    ABSOLUTE = 0
    ADDITIVE = 1
    NORMAL_DISTRIBUTION = 2
