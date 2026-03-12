import { useDispatch } from 'react-redux';
import { CommonActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from 'common/redux/features/common/authSlice';

export const useHandleLogout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.multiRemove(['token', 'role', 'loggedIn']);
      dispatch(logout());
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        }),
      );
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return handleLogout;
};
