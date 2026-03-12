import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import { useTheme } from 'common/helperFunctions';
import { Metrics } from 'theme/metrics';
import { FontSizes } from 'theme/typography';
import {
  BriefcaseFilledIcon,
  BriefcaseIcon,
  CommunityFilledIcon,
  CommunityIcon,
  HomeFilledIcon,
  HomeIcon,
  ProfileFilledIcon,
  ProfileIcon,
} from 'assets/svg';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProviderStackParamList } from '../types/providerNavigationTypes';
import Requests from '../screens/Requests/Requests';
import Jobs from '../screens/Jobs/Jobs';
import Profile from '../screens/Profile/Profile';
import JobDetail from '../screens/JobDetail/JobDetail';
import UpcomingJob from '../screens/UpcomingJob/UpcomingJob';
import Location from '../screens/Location/Location';
import ServiceProgress from '../screens/VerifyService/ServiceProgress';
import Earnings from '../screens/Earnings/Earnings';

const Tab = createBottomTabNavigator<ProviderStackParamList>();
const Stack = createNativeStackNavigator<ProviderStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="JobDetail" component={JobDetail} />
      <Stack.Screen name="UpcomingJob" component={UpcomingJob} />
      <Stack.Screen name="ServiceProgress" component={ServiceProgress} />
    </Stack.Navigator>
  );
};

const RequestsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Requests" component={Requests} />
      <Stack.Screen name="JobDetail" component={JobDetail} />
      <Stack.Screen name="UpcomingJob" component={UpcomingJob} />
      <Stack.Screen name="ServiceProgress" component={ServiceProgress} />
    </Stack.Navigator>
  );
};

const JobsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Jobs" component={Jobs} />
      <Stack.Screen name="JobDetail" component={JobDetail} />
      <Stack.Screen name="UpcomingJob" component={UpcomingJob} />
      <Stack.Screen name="ServiceProgress" component={ServiceProgress} />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Earnings" component={Earnings} />
    </Stack.Navigator>
  );
};

function ProviderBottomTabs() {
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
        name="RequestsStack"
        component={RequestsStack}
        options={{
          tabBarLabel: 'Requests',
          tabBarIcon: ({ focused }) => (
            <>{focused ? <CommunityFilledIcon /> : <CommunityIcon />}</>
          ),
        }}
      />
      <Tab.Screen
        name="JobsStack"
        component={JobsStack}
        options={{
          tabBarLabel: 'Jobs',
          tabBarIcon: ({ focused }) => (
            <>{focused ? <BriefcaseFilledIcon /> : <BriefcaseIcon />}</>
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

export default ProviderBottomTabs;