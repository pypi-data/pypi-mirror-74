﻿'''_2565.py

BevelGearCompoundDynamicAnalysis
'''


from mastapy.system_model.analyses_and_results.dynamic_analyses.compound import _2559
from mastapy._internal.python_net import python_net_import

_BEVEL_GEAR_COMPOUND_DYNAMIC_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.DynamicAnalyses.Compound', 'BevelGearCompoundDynamicAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('BevelGearCompoundDynamicAnalysis',)


class BevelGearCompoundDynamicAnalysis(_2559.AGMAGleasonConicalGearCompoundDynamicAnalysis):
    '''BevelGearCompoundDynamicAnalysis

    This is a mastapy class.
    '''

    TYPE = _BEVEL_GEAR_COMPOUND_DYNAMIC_ANALYSIS
    __hash__ = None

    def __init__(self, instance_to_wrap: 'BevelGearCompoundDynamicAnalysis.TYPE'):
        super().__init__(instance_to_wrap)
