import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import Services from '../screens/Services/Services';
import { SeekerStackParamList } from '../types/seekerNavigationTypes';
import { useTheme } from 'common/helperFunctions';
import { Metrics } from 'theme/metrics';
import { FontSizes } from 'theme/typography';
import {
  CartFilledIcon,
  CartIcon,
  HomeFilledIcon,
  HomeIcon,
  ProfileFilledIcon,
  ProfileIcon,
  ServicesFilledIcon,
  ServicesIcon,
} from 'assets/svg';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screens/Cart/Cart';
import Profile from '../screens/Profile/Profile';
import ServiceList from '../screens/ServiceList/ServiceList';
import AvailableProviders from '../screens/AvailableProviders/AvailableProviders';
import ServiceDetails from '../screens/ServiceDetails/ServiceDetails';
import UserProfile from '../screens/UserProfile/UserProfile';
import ExploreServices from '../screens/ExploreServices/ExploreServices';
import PreviewAddedServices from '../screens/PreviewAddedServices/PreviewAddedServices';
import BookingSchedule from '../screens/BookingSchedule/BookingSchedule';
import LocationTracking from '../screens/LocationTracking/LocationTracking';
import Messages from '../screens/Messages/Messages';
import ChatScreen from '../screens/Chat/ChatScreen';
import PaymentDetails from '../screens/PaymentDetails/PaymentDetails';

const Tab = createBottomTabNavigator<SeekerStackParamList>();
const Stack = createNativeStackNavigator<SeekerStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ServiceList" component={ServiceList} />
      <Stack.Screen name="AvailableProviders" component={AvailableProviders} />
      <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="ExploreServices" component={ExploreServices} />
      <Stack.Screen
        name="PreviewAddedServices"
        component={PreviewAddedServices}
      />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

const ServicesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="AvailableProviders" component={AvailableProviders} />
      <Stack.Screen name="BookingSchedule" component={BookingSchedule} />
      <Stack.Screen name="LocationTracking" component={LocationTracking} />
      <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
    </Stack.Navigator>
  );
};

function Tabs() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.inactiveTab,
        tabBarStyle: {
          backgroundColor: theme.white,
          height: Metrics._80,
          paddingTop: Metrics._16,
          paddingBottom: 0,
          marginBottom: 0,
        },
        tabBarLabelStyle: {
          fontSize: FontSizes._14,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <>{focused ? <HomeFilledIcon /> : <HomeIcon />}</>
          ),
        }}
      />
      <Tab.Screen
        name="ServicesStack"
        component={ServicesStack}
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: ({ focused }) => (
            <>{focused ? <ServicesFilledIcon /> : <ServicesIcon />}</>
          ),
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused }) => (
            <>{focused ? <CartFilledIcon /> : <CartIcon />}</>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            <>{focused ? <ProfileFilledIcon /> : <ProfileIcon />}</>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
