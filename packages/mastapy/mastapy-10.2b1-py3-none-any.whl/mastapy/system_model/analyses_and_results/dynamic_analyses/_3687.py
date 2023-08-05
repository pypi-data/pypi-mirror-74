﻿'''_3687.py

MeasurementComponentDynamicAnalysis
'''


from mastapy.system_model.part_model import _1927
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _2285
from mastapy.system_model.analyses_and_results.dynamic_analyses import _3697
from mastapy._internal.python_net import python_net_import

_MEASUREMENT_COMPONENT_DYNAMIC_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.DynamicAnalyses', 'MeasurementComponentDynamicAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('MeasurementComponentDynamicAnalysis',)


class MeasurementComponentDynamicAnalysis(_3697.VirtualComponentDynamicAnalysis):
    '''MeasurementComponentDynamicAnalysis

    This is a mastapy class.
    '''

    TYPE = _MEASUREMENT_COMPONENT_DYNAMIC_ANALYSIS
    __hash__ = None

    def __init__(self, instance_to_wrap: 'MeasurementComponentDynamicAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1927.MeasurementComponent':
        '''MeasurementComponent: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1927.MeasurementComponent)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def component_load_case(self) -> '_2285.MeasurementComponentLoadCase':
        '''MeasurementComponentLoadCase: 'ComponentLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2285.MeasurementComponentLoadCase)(self.wrapped.ComponentLoadCase) if self.wrapped.ComponentLoadCase else None
