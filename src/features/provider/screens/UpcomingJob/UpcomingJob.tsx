import { ScrollView, TouchableOpacity, View } from 'react-native';
import getStyles from './UpcomingJob.styles';
import Header from 'common/components/header';
import { ChevronRight, Star } from 'lucide-react-native';
import CustomText from 'common/components/text';
import Button from 'common/components/button';
import { useTheme } from 'common/helperFunctions';
import {
  BriefcaseIcon,
  CalendarGrey,
  ClockGrey,
  LocationGrey,
  ProfileIcon,
  WalletGrey,
} from 'assets/svg';
import { Metrics } from 'theme/metrics';
import { ProviderAppNavigationProp } from 'features/provider/types/providerNavigationTypes';

interface Props {
  navigation: ProviderAppNavigationProp<'UpcomingJob'>;
}

const UpcomingJob: React.FC<Props> = ({ navigation }) => {
  const theme = useTheme();
  const styles = getStyles();

  const handleNavigate = () => {
    navigation.navigate('Location');
  };

  return (
    <View style={styles.container}>
      <Header text="Upcoming Job" onBackPress={() => navigation.goBack()} />
      <ScrollView
        style={styles.subContainer}
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleContainer}>
          <CalendarGrey />
          <CustomText style={styles.title}>Booking Confirmed</CustomText>
        </View>
        <CustomText style={styles.subTitle}>
          Your service professional will arrive at the scheduled time.
        </CustomText>

        <View style={styles.iconAndTextContainer}>
          <ClockGrey />
          <CustomText style={styles.text}>Fri, Dec 12 - 9:30 AM</CustomText>
        </View>
        <View style={styles.divider} />
        <View style={styles.iconAndTextContainer}>
          <LocationGrey />
          <CustomText style={styles.text}>
            Sector 62, sahibzada ajit singh nagar....
          </CustomText>
        </View>
        <View style={styles.divider} />
        <View style={styles.iconAndTitleContainer}>
          <ProfileIcon width={Metrics._14} height={Metrics._14} />
          <CustomText style={styles.secondaryTitle}>
            Customer Details
          </CustomText>
        </View>
        <CustomText>Riya Sharma</CustomText>
        <View style={styles.ratingContainer}>
          <Star fill={theme.grey7} stroke={theme.grey7} size={Metrics._14} />
          <CustomText style={styles.ratingText}>4.3 reviews</CustomText>
        </View>
        <CustomText>9xxxxxxxxx</CustomText>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.jobDetailsButton}
          activeOpacity={0.8}
          onPress={() => {}}
        >
          <BriefcaseIcon width={Metrics._14} height={Metrics._14} />
          <CustomText style={[styles.secondaryTitle, styles.flx]}>
            Job Details
          </CustomText>
          <ChevronRight size={Metrics._18} />
        </TouchableOpacity>
        <View style={styles.divider} />
        <View style={styles.iconAndTitleContainer}>
          <WalletGrey />
          <CustomText style={styles.secondaryTitle}>Payment summary</CustomText>
        </View>
        <View style={styles.boxFlexRow}>
          <CustomText>Item total</CustomText>
          <CustomText>$ 200</CustomText>
        </View>
        <View style={styles.flexRow}>
          <CustomText>Taxes and Fee</CustomText>
          <CustomText>$ 10</CustomText>
        </View>
        <View style={styles.divider} />
        <View style={styles.flexRow}>
          <CustomText style={styles.amountText}>Total amount</CustomText>
          <CustomText style={styles.amountText}>$ 210</CustomText>
        </View>
        <View style={styles.divider} />
        <View style={styles.flexRow}>
          <CustomText style={styles.amountText}>Amount to pay</CustomText>
          <CustomText style={styles.amountText}>$ 210</CustomText>
        </View>
        <View style={styles.divider} />
      </ScrollView>
      <Button title="View Location" onPress={handleNavigate} style={styles.button} />
      <Button title="Cancel the booking" onPress={() => {}} variant="outline" style={styles.button} />
    </View>
  );
};

export default UpcomingJob;
