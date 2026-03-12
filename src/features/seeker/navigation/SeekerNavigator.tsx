import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SeekerStackParamList } from '../types/seekerNavigationTypes';
import Tabs from './SeekerBottomNavigation';

const Stack = createNativeStackNavigator<SeekerStackParamList>();

const SeekerNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
};

export default SeekerNavigator;
