﻿'''_3024.py

CylindricalGearSetSteadyStateSynchronousResponse
'''


from typing import List

from mastapy.system_model.part_model.gears import _2082
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.static_loads import _6115
from mastapy.system_model.analyses_and_results.steady_state_synchronous_responses import _3025, _3023, _3035
from mastapy._internal.python_net import python_net_import

_CYLINDRICAL_GEAR_SET_STEADY_STATE_SYNCHRONOUS_RESPONSE = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.SteadyStateSynchronousResponses', 'CylindricalGearSetSteadyStateSynchronousResponse')


__docformat__ = 'restructuredtext en'
__all__ = ('CylindricalGearSetSteadyStateSynchronousResponse',)


class CylindricalGearSetSteadyStateSynchronousResponse(_3035.GearSetSteadyStateSynchronousResponse):
    '''CylindricalGearSetSteadyStateSynchronousResponse

    This is a mastapy class.
    '''

    TYPE = _CYLINDRICAL_GEAR_SET_STEADY_STATE_SYNCHRONOUS_RESPONSE

    __hash__ = None

    def __init__(self, instance_to_wrap: 'CylindricalGearSetSteadyStateSynchronousResponse.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def assembly_design(self) -> '_2082.CylindricalGearSet':
        '''CylindricalGearSet: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2082.CylindricalGearSet)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def assembly_load_case(self) -> '_6115.CylindricalGearSetLoadCase':
        '''CylindricalGearSetLoadCase: 'AssemblyLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6115.CylindricalGearSetLoadCase)(self.wrapped.AssemblyLoadCase) if self.wrapped.AssemblyLoadCase else None

    @property
    def cylindrical_gears_steady_state_synchronous_response(self) -> 'List[_3025.CylindricalGearSteadyStateSynchronousResponse]':
        '''List[CylindricalGearSteadyStateSynchronousResponse]: 'CylindricalGearsSteadyStateSynchronousResponse' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.CylindricalGearsSteadyStateSynchronousResponse, constructor.new(_3025.CylindricalGearSteadyStateSynchronousResponse))
        return value

    @property
    def cylindrical_meshes_steady_state_synchronous_response(self) -> 'List[_3023.CylindricalGearMeshSteadyStateSynchronousResponse]':
        '''List[CylindricalGearMeshSteadyStateSynchronousResponse]: 'CylindricalMeshesSteadyStateSynchronousResponse' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.CylindricalMeshesSteadyStateSynchronousResponse, constructor.new(_3023.CylindricalGearMeshSteadyStateSynchronousResponse))
        return value
