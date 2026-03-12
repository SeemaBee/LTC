import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type CommonStackParamList = {
  Splash: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  ResetPassword: { email: string };
  SignUp: undefined;
  RoleSelector: undefined;
  VerifyOtp: { email: string; from: string };
  ProviderNavigator: undefined;
  SeekerNavigator: undefined;
};

export type CommonNavigationProp<T extends keyof CommonStackParamList> =
  NativeStackNavigationProp<CommonStackParamList, T>;

export type CommonRouteProp<T extends keyof CommonStackParamList> = RouteProp<
  CommonStackParamList,
  T
>;
