﻿'''_5811.py

BoltDynamicAnalysis
'''


from mastapy.system_model.part_model import _1987
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _6065
from mastapy.system_model.analyses_and_results.dynamic_analyses import _5817
from mastapy._internal.python_net import python_net_import

_BOLT_DYNAMIC_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.DynamicAnalyses', 'BoltDynamicAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('BoltDynamicAnalysis',)


class BoltDynamicAnalysis(_5817.ComponentDynamicAnalysis):
    '''BoltDynamicAnalysis

    This is a mastapy class.
    '''

    TYPE = _BOLT_DYNAMIC_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'BoltDynamicAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1987.Bolt':
        '''Bolt: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1987.Bolt)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def component_load_case(self) -> '_6065.BoltLoadCase':
        '''BoltLoadCase: 'ComponentLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6065.BoltLoadCase)(self.wrapped.ComponentLoadCase) if self.wrapped.ComponentLoadCase else None
