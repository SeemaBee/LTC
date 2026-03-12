import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash/Splash';
import LoginScreen from '../screens/Auth/Login/Login';
import { CommonStackParamList } from 'common/types/navigationTypes';
import RoleSelector from 'common/screens/Auth/RoleSelector/RoleSelector';
import ProviderNavigator from 'features/provider/navigation/ProviderNavigator';
import SeekerNavigator from 'features/seeker/navigation/SeekerNavigator';
import Signup from 'common/screens/Auth/SignUp/SignUp';
import VerifyOtp from 'common/screens/Auth/VerifyOtp/VerifyOtp';
import ForgotPassword from 'common/screens/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from 'common/screens/Auth/ResetPassword/ResetPassword';
import { useHandleLogout } from 'common/utils/handleLogout';
import { EventRegister } from 'react-native-event-listeners';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator<CommonStackParamList>();

const CommonNavigator = () => {
  const handleLogout = useHandleLogout();
  useEffect(() => {
    const logoutListener = EventRegister.addEventListener(
      'FORCE_LOGOUT',
      async () => {
        const data = await AsyncStorage.getItem('loggedIn');
        const loggedIn = data ? JSON.parse(data) : null;
        if (loggedIn) {
          await handleLogout();
        }
      },
    );

    return () => {
      EventRegister.removeEventListener(logoutListener as any);
    };
  }, [handleLogout]);
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      <Stack.Screen name="RoleSelector" component={RoleSelector} />
      <Stack.Screen name="ProviderNavigator" component={ProviderNavigator} />
      <Stack.Screen name="SeekerNavigator" component={SeekerNavigator} />
    </Stack.Navigator>
  );
};

export default CommonNavigator;
