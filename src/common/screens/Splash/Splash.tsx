import React, { useEffect } from 'react';
import { View } from 'react-native';
import getStyles from './Splash.styles';
import { CommonNavigationProp } from 'common/types/navigationTypes';
import { Splash } from 'assets/svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAuthToken } from 'api/client';

type Props = {
  navigation: CommonNavigationProp<'Splash'>;
};

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();

  useEffect(() => {
    handleNavigation();
  }, []);

  const handleNavigation = async () => {
    const [[, token], [, role], [, loggedIn]] = await AsyncStorage.multiGet([
      'token',
      'role',
      'loggedIn',
    ]);
    console.log('loggedIn - ', loggedIn);
    console.log('role - ', role);
    console.log('token - ', token);

    const isLoggedIn = loggedIn === 'true';
    if (isLoggedIn) {
      setAuthToken(token!);
      if (role === 'seeker') {
        setTimeout(() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'SeekerNavigator' }],
          });
        }, 1500);
      } else if (role === 'provider') {
        setTimeout(() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'ProviderNavigator' }],
          });
        }, 1500);
      }
    } else {
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }, 1500);
    }
  };

  return (
    <View style={styles.container}>
      <Splash />
    </View>
  );
};

export default SplashScreen;
