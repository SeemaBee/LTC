import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ProviderStackParamList = {
  SignupStepper: undefined;
  Home: undefined;
  Profile: undefined;
  Jobs: undefined;
  HomeStack: undefined;
  ServicesStack: undefined;
  ProfileStack: undefined;
  JobsStack: undefined;
  ProviderBottomTabs: undefined;
  Requests: undefined;
  RequestsStack: undefined;
  JobDetail: undefined;
  UpcomingJob: undefined;
  ServiceProgress: undefined;
  Location: undefined;
  Earnings: undefined;
};

export type ProviderAppNavigationProp<T extends keyof ProviderStackParamList> =
  NativeStackNavigationProp<ProviderStackParamList, T>;

export type ProviderAppRouteProp<T extends keyof ProviderStackParamList> =
  RouteProp<ProviderStackParamList, T>;
