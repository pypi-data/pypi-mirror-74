﻿'''_3039.py

HypoidGearSetSteadyStateSynchronousResponse
'''


from typing import List

from mastapy.system_model.part_model.gears import _2091
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.static_loads import _6155
from mastapy.system_model.analyses_and_results.steady_state_synchronous_responses import _3040, _3038, _2985
from mastapy._internal.python_net import python_net_import

_HYPOID_GEAR_SET_STEADY_STATE_SYNCHRONOUS_RESPONSE = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.SteadyStateSynchronousResponses', 'HypoidGearSetSteadyStateSynchronousResponse')


__docformat__ = 'restructuredtext en'
__all__ = ('HypoidGearSetSteadyStateSynchronousResponse',)


class HypoidGearSetSteadyStateSynchronousResponse(_2985.AGMAGleasonConicalGearSetSteadyStateSynchronousResponse):
    '''HypoidGearSetSteadyStateSynchronousResponse

    This is a mastapy class.
    '''

    TYPE = _HYPOID_GEAR_SET_STEADY_STATE_SYNCHRONOUS_RESPONSE

    __hash__ = None

    def __init__(self, instance_to_wrap: 'HypoidGearSetSteadyStateSynchronousResponse.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def assembly_design(self) -> '_2091.HypoidGearSet':
        '''HypoidGearSet: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2091.HypoidGearSet)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def assembly_load_case(self) -> '_6155.HypoidGearSetLoadCase':
        '''HypoidGearSetLoadCase: 'AssemblyLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6155.HypoidGearSetLoadCase)(self.wrapped.AssemblyLoadCase) if self.wrapped.AssemblyLoadCase else None

    @property
    def hypoid_gears_steady_state_synchronous_response(self) -> 'List[_3040.HypoidGearSteadyStateSynchronousResponse]':
        '''List[HypoidGearSteadyStateSynchronousResponse]: 'HypoidGearsSteadyStateSynchronousResponse' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.HypoidGearsSteadyStateSynchronousResponse, constructor.new(_3040.HypoidGearSteadyStateSynchronousResponse))
        return value

    @property
    def hypoid_meshes_steady_state_synchronous_response(self) -> 'List[_3038.HypoidGearMeshSteadyStateSynchronousResponse]':
        '''List[HypoidGearMeshSteadyStateSynchronousResponse]: 'HypoidMeshesSteadyStateSynchronousResponse' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.HypoidMeshesSteadyStateSynchronousResponse, constructor.new(_3038.HypoidGearMeshSteadyStateSynchronousResponse))
        return value
