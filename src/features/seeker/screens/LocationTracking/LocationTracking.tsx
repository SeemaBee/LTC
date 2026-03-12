import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import getStyles from './LocationTracking.styles';
import CustomText from 'common/components/text';
import { User } from 'assets/images';
import {
  Check,
  ChevronRight,
  ShieldCheck,
  Star,
  UserRound,
} from 'lucide-react-native';
import { Metrics } from 'theme/metrics';
import { useTheme } from 'common/helperFunctions';
import { LocationGrey, WalletGrey } from 'assets/svg';
import Button from 'common/components/button';
import DashboardHeader from 'common/components/dashboardHeader';
import { SeekerAppNavigationProp } from 'features/seeker/types/seekerNavigationTypes';

type Props = {
  navigation: SeekerAppNavigationProp<'LocationTracking'>;
};

const LocationTracking: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();
  const theme = useTheme();

  const navigateToPaymentDetails = () => {
    navigation.navigate('PaymentDetails');
  };

  return (
    <View style={styles.container}>
      <DashboardHeader text="Location" />
      <ScrollView style={styles.subContainer}>
        <View style={styles.titleContainer}>
          <CustomText style={styles.title}>Home Cleaning</CustomText>
          <CustomText>
            Arrive in <CustomText style={styles.time}>4 mins</CustomText>
          </CustomText>
        </View>
        <CustomText style={styles.distance}>Captain 1.2 km away</CustomText>
        <View style={styles.divider} />
        <View style={styles.otpAndDistance}>
          <CustomText style={styles.distance}>
            Start your order with PIN
          </CustomText>
          <View style={styles.otpContainer}>
            <View style={styles.otpBox}>
              <CustomText style={styles.otpDigit}>5</CustomText>
            </View>
            <View style={styles.otpBox}>
              <CustomText style={styles.otpDigit}>4</CustomText>
            </View>
            <View style={styles.otpBox}>
              <CustomText style={styles.otpDigit}>3</CustomText>
            </View>
            <View style={styles.otpBox}>
              <CustomText style={styles.otpDigit}>2</CustomText>
            </View>
          </View>
        </View>
        <View style={styles.driverInfo}>
          <View style={styles.nameAndVehicleDetails}>
            <View style={styles.nameAndPicture}>
              <Image source={User} style={styles.image} />
              <CustomText>Shakil</CustomText>
            </View>
            <CustomText>WB 12AT 8616</CustomText>
          </View>
          <View style={styles.ratingAndVehicleDetails}>
            <View style={styles.reviews}>
              <Star size={Metrics._14} fill={theme.grey7} strokeWidth={0} />
              <CustomText style={styles.reviewCount}>4.3 reviews</CustomText>
            </View>
            <CustomText style={styles.vehicleName}>Honda Livo</CustomText>
          </View>
        </View>
        <View style={styles.destination}>
          <LocationGrey />
          <CustomText style={styles.title}>Destination</CustomText>
        </View>
        <CustomText style={styles.text}>
          Sector 62, sahibzada ajit singh nagar....
        </CustomText>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <View>
            <View style={styles.iconAndTitleContainer}>
              <WalletGrey />
              <CustomText style={styles.buttonTitle}>
                Payment Details
              </CustomText>
            </View>
            <CustomText style={styles.buttonSubTitle}>
              Cash on Delivery
            </CustomText>
            <CustomText style={styles.amount}>$100</CustomText>
          </View>
          <ChevronRight />
        </TouchableOpacity>
        <View style={styles.divider} />
        <View style={styles.destination}>
          <UserRound fill={theme.grey7} strokeWidth={0} />
          <CustomText style={styles.title}>
            Before the professional arrives
          </CustomText>
        </View>
        <View style={styles.destination}>
          <Check stroke={theme.primary} size={Metrics._14} />
          <CustomText style={styles.text}>
            Keep the cleaning area accessible
          </CustomText>
        </View>
        <View style={styles.destination}>
          <Check stroke={theme.primary} size={Metrics._14} />
          <CustomText style={styles.text}>Secure pets, if any</CustomText>
        </View>
        <View style={styles.destination}>
          <Check stroke={theme.primary} size={Metrics._14} />
          <CustomText style={styles.text}>
            Ensure water & electricity access
          </CustomText>
        </View>
        <View style={styles.divider} />
        <View style={styles.destination}>
          <ShieldCheck fill={theme.grey7} stroke={theme.white} />
          <CustomText style={styles.title}>Safety & Support</CustomText>
        </View>
        <CustomText style={styles.text}>Contact customer support</CustomText>
        <CustomText style={styles.text}>Report an issue</CustomText>
        <CustomText style={styles.text}>Emergency help</CustomText>
        <Button title="Pay Now" style={styles.payBtn} onPress={() => {}} />
        <Button
          title="View Payment Details"
          style={styles.payBtn}
          onPress={() => navigateToPaymentDetails()}
        />
        <CustomText style={styles.rescheduleText}>
          Rescheduling is unavailable as the professional is already nearby.
        </CustomText>
        <Button
          title="Reschedule"
          style={styles.payBtn}
          onPress={() => {}}
          disabled
        />
      </ScrollView>
    </View>
  );
};

export default LocationTracking;
