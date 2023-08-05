﻿'''_725.py

FormWheelGrindingSimulationCalculator
'''


from mastapy._internal import constructor
from mastapy.gears.manufacturing.cylindrical.cutters.tangibles import _762
from mastapy.gears.manufacturing.cylindrical.cutter_simulation import _719
from mastapy._internal.python_net import python_net_import

_FORM_WHEEL_GRINDING_SIMULATION_CALCULATOR = python_net_import('SMT.MastaAPI.Gears.Manufacturing.Cylindrical.CutterSimulation', 'FormWheelGrindingSimulationCalculator')


__docformat__ = 'restructuredtext en'
__all__ = ('FormWheelGrindingSimulationCalculator',)


class FormWheelGrindingSimulationCalculator(_719.CutterSimulationCalc):
    '''FormWheelGrindingSimulationCalculator

    This is a mastapy class.
    '''

    TYPE = _FORM_WHEEL_GRINDING_SIMULATION_CALCULATOR
    __hash__ = None

    def __init__(self, instance_to_wrap: 'FormWheelGrindingSimulationCalculator.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def centre_distance(self) -> 'float':
        '''float: 'CentreDistance' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.CentreDistance

    @property
    def profiled_grinding_wheel(self) -> '_762.CylindricalGearFormedWheelGrinderTangible':
        '''CylindricalGearFormedWheelGrinderTangible: 'ProfiledGrindingWheel' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_762.CylindricalGearFormedWheelGrinderTangible)(self.wrapped.ProfiledGrindingWheel) if self.wrapped.ProfiledGrindingWheel else None
