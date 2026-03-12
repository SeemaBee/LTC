import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type SeekerStackParamList = {
  Signup: undefined;
  VerifyOtp: undefined;
  Tabs: undefined;
  HomeStack: { screen: string };
  Home: undefined;
  ServicesStack: undefined;
  Services: undefined;
  ProfileStack: undefined;
  Profile: undefined;
  CartStack: { screen: string };
  LocationTracking: { screen: string };
  Cart: undefined;
  ServiceList: undefined;
  AvailableProviders: undefined;
  ServiceDetails: undefined;
  UserProfile: undefined;
  ExploreServices: undefined;
  PreviewAddedServices: undefined;
  BookingSchedule: undefined;
  Messages: undefined;
  ChatScreen: undefined;
  PaymentDetails: undefined;
};

export type SeekerAppNavigationProp<T extends keyof SeekerStackParamList> =
  NativeStackNavigationProp<SeekerStackParamList, T>;

export type SeekerAppRouteProp<T extends keyof SeekerStackParamList> =
  RouteProp<SeekerStackParamList, T>;
