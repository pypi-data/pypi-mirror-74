﻿'''_2824.py

OilSealSteadyStateSynchronousResponseOnAShaft
'''


from mastapy.system_model.part_model import _1929
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _2289
from mastapy.system_model.analyses_and_results.steady_state_synchronous_responses_on_a_shaft import _2786
from mastapy._internal.python_net import python_net_import

_OIL_SEAL_STEADY_STATE_SYNCHRONOUS_RESPONSE_ON_A_SHAFT = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.SteadyStateSynchronousResponsesOnAShaft', 'OilSealSteadyStateSynchronousResponseOnAShaft')


__docformat__ = 'restructuredtext en'
__all__ = ('OilSealSteadyStateSynchronousResponseOnAShaft',)


class OilSealSteadyStateSynchronousResponseOnAShaft(_2786.ConnectorSteadyStateSynchronousResponseOnAShaft):
    '''OilSealSteadyStateSynchronousResponseOnAShaft

    This is a mastapy class.
    '''

    TYPE = _OIL_SEAL_STEADY_STATE_SYNCHRONOUS_RESPONSE_ON_A_SHAFT
    __hash__ = None

    def __init__(self, instance_to_wrap: 'OilSealSteadyStateSynchronousResponseOnAShaft.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1929.OilSeal':
        '''OilSeal: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1929.OilSeal)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def component_load_case(self) -> '_2289.OilSealLoadCase':
        '''OilSealLoadCase: 'ComponentLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2289.OilSealLoadCase)(self.wrapped.ComponentLoadCase) if self.wrapped.ComponentLoadCase else None
