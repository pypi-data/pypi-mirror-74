﻿'''_4123.py

ClutchPowerFlow
'''


from mastapy.system_model.analyses_and_results.power_flows import _4152, _4127
from mastapy._internal import constructor
from mastapy.system_model.part_model.couplings import _1988
from mastapy.system_model.analyses_and_results.static_loads import _2173
from mastapy._internal.python_net import python_net_import

_CLUTCH_POWER_FLOW = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.PowerFlows', 'ClutchPowerFlow')


__docformat__ = 'restructuredtext en'
__all__ = ('ClutchPowerFlow',)


class ClutchPowerFlow(_4127.CouplingPowerFlow):
    '''ClutchPowerFlow

    This is a mastapy class.
    '''

    TYPE = _CLUTCH_POWER_FLOW
    __hash__ = None

    def __init__(self, instance_to_wrap: 'ClutchPowerFlow.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def clutch_connection(self) -> '_4152.ClutchConnectionPowerFlow':
        '''ClutchConnectionPowerFlow: 'ClutchConnection' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_4152.ClutchConnectionPowerFlow)(self.wrapped.ClutchConnection) if self.wrapped.ClutchConnection else None

    @property
    def assembly_design(self) -> '_1988.Clutch':
        '''Clutch: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1988.Clutch)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def assembly_load_case(self) -> '_2173.ClutchLoadCase':
        '''ClutchLoadCase: 'AssemblyLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2173.ClutchLoadCase)(self.wrapped.AssemblyLoadCase) if self.wrapped.AssemblyLoadCase else None
