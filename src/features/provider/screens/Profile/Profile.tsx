import { Alert, View } from 'react-native';
import Header from 'common/components/header';
import getStyles from './Profile.styles';
import { LogoutIcon, ProfileIcon, UserImage, WalletGrey } from 'assets/svg';
import CustomText from 'common/components/text';
import ProfileOption from 'features/provider/components/profile/profileOption';
import { ProviderAppNavigationProp } from 'features/provider/types/providerNavigationTypes';
import { CommonNavigationProp } from 'common/types/navigationTypes';

type Props = {
  navigation: ProviderAppNavigationProp<'Profile'>;
};

const Profile: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => {
          navigation
            .getParent<CommonNavigationProp<'ProviderNavigator'>>()
            ?.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
        },
      },
    ]);
  };

  const navigateToEarnings = () => {
    navigation.navigate('Earnings');
  };

  return (
    <View style={styles.container}>
      <Header text="Profile" showBackIcon={false} />
      <View style={styles.subContainer}>
        <UserImage />
        <CustomText style={styles.name}>Jane Hooper</CustomText>
        <ProfileOption
          Icon={ProfileIcon}
          title="Edit profile"
          onClick={() => {}}
        />
        <ProfileOption
          Icon={WalletGrey}
          title="Earnings"
          onClick={navigateToEarnings}
        />
        <ProfileOption
          Icon={LogoutIcon}
          title="Logout"
          onClick={handleLogout}
        />
      </View>
    </View>
  );
};

export default Profile;
