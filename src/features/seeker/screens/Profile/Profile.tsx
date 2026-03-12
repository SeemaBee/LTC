import { Alert, Image, View } from 'react-native';
import React, { useState } from 'react';
import getStyles from './Profile.styles';
import DashboardHeader from 'common/components/dashboardHeader';
import { SeekerAppNavigationProp } from 'features/seeker/types/seekerNavigationTypes';
import CustomText from 'common/components/text';
import { CommonNavigationProp } from 'common/types/navigationTypes';
import { User } from 'assets/images';
import ProfileOption from 'features/seeker/components/profile/profileOption';
import {
  CalendarTickIcon,
  LocationGrey,
  LogoutIcon,
  ProfileIcon,
} from 'assets/svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import Loader from 'common/components/loader';
import { logoutApi } from 'api/authApis';

type Props = {
  navigation: SeekerAppNavigationProp<'Profile'>;
};

const Profile = ({ navigation }: Props) => {
  const styles = getStyles();
  const [loading, setLoading] = useState(false);

  const handleLogoutPress = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => handleLogout(),
      },
    ]);
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      const response = await logoutApi();
      if (response.success) {
        Toast.show({
          text1: 'DINKS',
          text2: 'Logged out',
          type: 'success',
        });
        await AsyncStorage.clear();
        navigation.getParent<CommonNavigationProp<'SeekerNavigator'>>()?.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }
    } catch (error) {
      Toast.show({
        text1: 'DINKS',
        text2: 'Something went wrong',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <DashboardHeader text="Profile" showBackIcon={false} />
      <View style={styles.subContainer}>
        <Image source={User} style={styles.image} />
        <CustomText style={styles.name}>Jane Hooper</CustomText>
        <ProfileOption
          Icon={ProfileIcon}
          title="Edit profile"
          onClick={() => {}}
        />
        <ProfileOption Icon={LocationGrey} title="Address" onClick={() => {}} />
        <ProfileOption
          Icon={CalendarTickIcon}
          title="Booking History"
          onClick={() => {}}
        />
        <ProfileOption
          Icon={LogoutIcon}
          title="Logout"
          onClick={handleLogoutPress}
        />
      </View>
      {loading && <Loader show={loading} />}
    </View>
  );
};

export default Profile;
