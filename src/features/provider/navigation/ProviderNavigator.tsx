import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import { ProviderStackParamList } from '../types/providerNavigationTypes';
import ProviderBottomTabs from './ProviderBottomNavigation';
import SignupStepper from '../screens/SignUpStepper/SignUpStepper';

const Stack = createNativeStackNavigator<ProviderStackParamList>();

const ProviderNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProviderBottomTabs"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignupStepper" component={SignupStepper} />
      <Stack.Screen name="ProviderBottomTabs" component={ProviderBottomTabs} />
    </Stack.Navigator>
  );
};

export default ProviderNavigator;
