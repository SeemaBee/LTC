import { ScrollView, View } from 'react-native';
import getStyles from './JobDetail.style';
import Header from 'common/components/header';
import CustomText from 'common/components/text';
import Chip from 'features/provider/components/requests/chip';
import { Clock, LocationWhite, Wallet } from 'assets/svg';
import { MapPin } from 'lucide-react-native';
import { ProviderAppNavigationProp } from 'features/provider/types/providerNavigationTypes';
import { useTheme } from 'common/helperFunctions';
import Service from 'common/components/service';
import Button from 'common/components/button';
import { useState } from 'react';
import Loader from 'common/components/loader';
import { acceptJob, rejectJob } from 'features/provider/apis/jobs';
import Toast from 'react-native-toast-message';

interface JobDetailProps {
  navigation: ProviderAppNavigationProp<'JobDetail'>;
}

const JobDetail: React.FC<JobDetailProps> = ({ navigation }) => {
  const theme = useTheme();
  const styles = getStyles();
  const [isLoading, setIsLoading] = useState(false);

  const changeJobStatus = async (type: 'accept' | 'reject') => {
    setIsLoading(true);
    try {
      let response;
      if (type === 'accept') {
        response = await acceptJob(1);
      } else {
        response = await rejectJob(1);
      }
      Toast.show({
        type: 'success',
        text1: 'JackLap',
        text2: `Job ${type === "accept" ? "accepted" : "rejected"} successfully.`,
      }); 
    } catch (error: any) {
      const errorMessage = error?.message || 'Something went wrong.';
      Toast.show({
        type: 'error',
        text1: 'JackLap',
        text2: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header text="Job Detail" onBackPress={() => navigation.goBack()} />
      <ScrollView
        style={styles.subContainer}
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <CustomText style={styles.heading}>Home Deep Cleaning</CustomText>
        <CustomText style={styles.subHeading}>Sector 21, Mohali</CustomText>
        <View style={styles.chipContainer}>
          <Chip Icon={Wallet} text="$1,200" bgColor={theme.primaryLight} />
          <Chip
            Icon={Clock}
            text="Today, 3:00 pm"
            bgColor={theme.primaryLight}
          />
          <Chip
            Icon={LocationWhite}
            text="2.3 miles away"
            bgColor={theme.primaryLight}
          />
        </View>
        <CustomText style={styles.title}>About This Job</CustomText>
        <CustomText style={styles.desc}>
          A full deep cleaning service required for a 2BHK home. Includes
          dusting, mopping, kitchen cleaning, and bathroom sanitization.
        </CustomText>
        <CustomText style={styles.title}>Tasks Included</CustomText>

        <Service title="General house cleaning" />

        <Service title="Kitchen deep scrub" />

        <Service title="Bathroom sanitization" />
        <Service title="Dusting & mopping" />
        <Service title="Waste disposal" />
        <CustomText style={styles.title}>Added Services</CustomText>

        <Service title="Fridge/oven cleaning" />

        <CustomText style={styles.quantity}>Quantity: 2</CustomText>

        <Service title="Pet hair removal" />
        <CustomText style={styles.title}>Location</CustomText>
        <View style={styles.mapTextBox}>
          <MapPin color={theme.white} fill={theme.primary} />
          <CustomText style={styles.mapText}>Tap to get directions</CustomText>
        </View>
        <CustomText style={styles.title}>Customer Info</CustomText>
        <View style={styles.infoContainer}>
          <CustomText style={styles.label}>Name:</CustomText>
          <CustomText style={styles.infoDetail}>Riya Sharma</CustomText>
        </View>

        <View style={styles.infoContainer}>
          <CustomText style={styles.label}>Phone:</CustomText>
          <CustomText style={styles.infoDetail}>9xxxxxxxxx</CustomText>
        </View>

        <View style={styles.infoContainer}>
          <CustomText style={styles.label}>Instructions:</CustomText>
          <CustomText style={styles.infoDetail}>
            Please call on arrival. Pets at home—don’t worry, they’re friendly.
          </CustomText>
        </View>

        <CustomText style={styles.title}>Earnings</CustomText>
        <View style={styles.earnings}>
          <CustomText style={styles.earningsTitle}>Home Cleaning:</CustomText>
          <CustomText style={styles.amount}>$1,200</CustomText>
        </View>
        <View style={styles.divider} />
        <CustomText style={styles.earningsTitle}>Service Added Fee:</CustomText>
        <CustomText style={styles.serviceType}>Fridge/oven cleaning</CustomText>
        <View style={styles.earnings}>
          <CustomText style={styles.earningQuantity}>Quantity: 2</CustomText>
          <CustomText style={styles.amount}>$1,200</CustomText>
        </View>
        <View style={styles.divider} />
        <View style={styles.earnings}>
          <CustomText style={styles.earningsTitle}>Taxes</CustomText>
          <CustomText style={styles.amount}>$1,200</CustomText>
        </View>
        <View style={styles.divider} />
        <View style={styles.earnings}>
          <CustomText style={styles.totalEarnings}>Your Earnings:</CustomText>
          <CustomText style={styles.totalEarnings}>$1,140</CustomText>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="Decline"
          onPress={() => changeJobStatus("reject")}
          variant="outline"
          style={styles.button}
        />
        <Button title="Accept" onPress={() => changeJobStatus("accept")} style={styles.button} />
      </View>
      {isLoading && <Loader show={isLoading} />}
    </View>
  );
};

export default JobDetail;
