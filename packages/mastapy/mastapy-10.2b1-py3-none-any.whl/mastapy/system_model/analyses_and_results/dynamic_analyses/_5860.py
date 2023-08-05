﻿'''_5860.py

DatumDynamicAnalysis
'''


from mastapy.system_model.part_model import _2008
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _6119
from mastapy.system_model.analyses_and_results.dynamic_analyses import _5838
from mastapy._internal.python_net import python_net_import

_DATUM_DYNAMIC_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.DynamicAnalyses', 'DatumDynamicAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('DatumDynamicAnalysis',)


class DatumDynamicAnalysis(_5838.ComponentDynamicAnalysis):
    '''DatumDynamicAnalysis

    This is a mastapy class.
    '''

    TYPE = _DATUM_DYNAMIC_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'DatumDynamicAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2008.Datum':
        '''Datum: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2008.Datum)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def component_load_case(self) -> '_6119.DatumLoadCase':
        '''DatumLoadCase: 'ComponentLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6119.DatumLoadCase)(self.wrapped.ComponentLoadCase) if self.wrapped.ComponentLoadCase else None
