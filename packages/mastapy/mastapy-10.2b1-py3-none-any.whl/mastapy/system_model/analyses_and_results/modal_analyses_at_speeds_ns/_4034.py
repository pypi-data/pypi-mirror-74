﻿'''_4034.py

FlexiblePinAssemblyModalAnalysesAtSpeeds
'''


from mastapy.system_model.part_model import _2012
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _6136
from mastapy.system_model.analyses_and_results.modal_analyses_at_speeds_ns import _4076
from mastapy._internal.python_net import python_net_import

_FLEXIBLE_PIN_ASSEMBLY_MODAL_ANALYSES_AT_SPEEDS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ModalAnalysesAtSpeedsNS', 'FlexiblePinAssemblyModalAnalysesAtSpeeds')


__docformat__ = 'restructuredtext en'
__all__ = ('FlexiblePinAssemblyModalAnalysesAtSpeeds',)


class FlexiblePinAssemblyModalAnalysesAtSpeeds(_4076.SpecialisedAssemblyModalAnalysesAtSpeeds):
    '''FlexiblePinAssemblyModalAnalysesAtSpeeds

    This is a mastapy class.
    '''

    TYPE = _FLEXIBLE_PIN_ASSEMBLY_MODAL_ANALYSES_AT_SPEEDS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'FlexiblePinAssemblyModalAnalysesAtSpeeds.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def assembly_design(self) -> '_2012.FlexiblePinAssembly':
        '''FlexiblePinAssembly: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2012.FlexiblePinAssembly)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def assembly_load_case(self) -> '_6136.FlexiblePinAssemblyLoadCase':
        '''FlexiblePinAssemblyLoadCase: 'AssemblyLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6136.FlexiblePinAssemblyLoadCase)(self.wrapped.AssemblyLoadCase) if self.wrapped.AssemblyLoadCase else None
