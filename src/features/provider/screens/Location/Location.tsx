import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import getStyles from './Location.styles';
import CustomText from 'common/components/text';
import { User } from 'assets/images';
import {
  ChevronRight,
  ShieldCheck,
  Star,
} from 'lucide-react-native';
import { Metrics } from 'theme/metrics';
import { useTheme } from 'common/helperFunctions';
import { BriefcaseGrey, LocationGrey, ProfileIcon, WalletGrey } from 'assets/svg';
import Button from 'common/components/button';
import DashboardHeader from 'common/components/dashboardHeader';
import { ProviderAppNavigationProp } from 'features/provider/types/providerNavigationTypes';
import { startBackgroundJob } from 'features/provider/utils/FetchingLocation';

type Props = {
  navigation: ProviderAppNavigationProp<'Location'>;
};

const Location: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();
  const theme = useTheme();

  const startJourney = () => {
    // startBackgroundJob(); // handle stop background job as well when journey ends
    navigation.navigate('ServiceProgress');
  };

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <DashboardHeader text="Location" onBackPress={handleBack} />
      <ScrollView style={styles.subContainer}>
        <View style={styles.titleContainer}>
          <CustomText style={styles.title}>Home Cleaning</CustomText>
          <CustomText>
            Reached in <CustomText style={styles.time}>4 mins</CustomText>
          </CustomText>
        </View>
        <CustomText style={styles.distance}>Captain 1.2 km away</CustomText>
        <View style={styles.divider} />
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
        <View style={styles.destination}>
          <ProfileIcon width={Metrics._16} height={Metrics._16} />
          <CustomText style={styles.title}>Customer Details</CustomText>
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
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <View style={styles.iconAndTitleContainer}>
            <BriefcaseGrey width={Metrics._16} height={Metrics._16} />
            <CustomText style={styles.buttonTitle}>Service Details</CustomText>
          </View>
          <ChevronRight />
        </TouchableOpacity>
        <View style={styles.divider} />
        <View style={styles.destination}>
          <ShieldCheck fill={theme.grey7} stroke={theme.white} />
          <CustomText style={styles.title}>Safety & Support</CustomText>
        </View>
        <CustomText style={styles.text}>Contact customer support</CustomText>
        <CustomText style={styles.text}>Report an issue</CustomText>
        <CustomText style={styles.text}>Emergency help</CustomText>
      </ScrollView>
       <Button title="Start Journey" style={styles.payBtn} onPress={startJourney} />
    </View>
  );
};

export default Location;
