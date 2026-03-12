import { Image, View } from 'react-native';
import getStyles from './UserProfile.styles';
import { User } from 'assets/images';
import CustomText from 'common/components/text';
import { Check, MapPin, Star } from 'lucide-react-native';
import { useTheme } from 'common/helperFunctions';
import { Metrics } from 'theme/metrics';
import { CalendarTickIcon, LanguageLogo } from 'assets/svg';
import { SeekerAppNavigationProp } from 'features/seeker/types/seekerNavigationTypes';
import { ReactNode } from 'react';
import DashboardHeader from 'common/components/dashboardHeader';

type Props = {
  navigation: SeekerAppNavigationProp<'UserProfile'>;
};

type KeyDetailProps = {
  Icon: ReactNode;
  text: string;
};

type ServiceProps = {
  text: string;
};

const KeyDetail: React.FC<KeyDetailProps> = ({ Icon, text }) => {
  const styles = getStyles();
  return (
    <View style={styles.iconAndText}>
      {Icon}
      <CustomText style={styles.ratingText}>{text}</CustomText>
    </View>
  );
};

const Service: React.FC<ServiceProps> = ({ text }) => {
  const styles = getStyles();
  const theme = useTheme();
  return (
    <View style={styles.iconAndText}>
      <View style={styles.checkContainer}>
        <Check color={theme.white} size={Metrics._13} />
      </View>
      <CustomText style={styles.servicesText}>{text}</CustomText>
    </View>
  );
};

const UserProfile: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <DashboardHeader text="Profile" onBackPress={() => navigation.goBack()} />
      <View style={styles.contentContainer}>
        <Image source={User} style={styles.image} />
        <CustomText style={styles.username}>Jane Cooper</CustomText>
        <CustomText style={styles.title}>Key Details</CustomText>
        <KeyDetail
          Icon={
            <Star fill={theme.grey7} stroke={theme.grey7} size={Metrics._14} />
          }
          text="4.3 reviews"
        />
        <KeyDetail Icon={<CalendarTickIcon />} text="1.2 K bookings" />
        <KeyDetail
          Icon={
            <MapPin
              size={Metrics._14}
              fill={theme.grey7}
              stroke={theme.white}
            />
          }
          text="2 km away"
        />
        <KeyDetail Icon={<LanguageLogo />} text="Punjabi, English and Hindi" />
        <View style={styles.divider} />
        <CustomText style={styles.title}>My Services</CustomText>
        <Service text="Home Cleaning" />
        <Service text="General in home help" />
        <Service text="Driver Services" />
        <Service text="Home tutoring" />
        <Service text="Home tutoring" />
        <Service text="Bathrooms" />
      </View>
    </View>
  );
};

export default UserProfile;
