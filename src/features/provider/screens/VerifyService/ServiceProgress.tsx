import { ScrollView, TouchableOpacity, View } from 'react-native';
import getStyles from './ServiceProgress.styles';
import CustomText from 'common/components/text';
import {
  LocationGrey,
  ProfileIcon,
  ServicesIcon,
  WalletGrey,
} from 'assets/svg';
import { OtpInput } from 'react-native-otp-entry';
import { useState } from 'react';
import { Metrics } from 'theme/metrics';
import { ChevronRight } from 'lucide-react-native';
import Header from 'common/components/header';
import { ProviderAppNavigationProp } from 'features/provider/types/providerNavigationTypes';
import { Pie, PolarChart } from 'victory-native';
import { useTheme } from 'common/helperFunctions';
import Button from 'common/components/button';
import Timer from 'features/provider/components/jobs/timer';
import { Step } from 'features/provider/types/commonTypes';

interface Props {
  navigation: ProviderAppNavigationProp<'ServiceProgress'>;
}

const headerText = {
  1: 'Verify',
  2: 'Service Ongoing',
  3: 'New Service Activated',
  4: 'Service Completed',
};

const ServiceProgress: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();
  const [otpVerified, setOtpVerified] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [otp, setOtp] = useState('');
  const handleOtpComplete = () => {};
  const theme = useTheme();

  const handleButtonPress = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // handle condition for service completed
    }
  };

  return (
    <View style={styles.container}>
      <Header
        text={headerText[currentStep as Step]}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.subContainer}>
        <View style={styles.chartContainer}>
          <PolarChart
            data={[
              {
                label: 'Progress',
                value: (currentStep / 4) * 100,
                color: theme.primary,
              },
              {
                label: 'Remaining',
                value: ((4 - currentStep) / 4) * 100,
                color: theme.grey19,
              },
            ]}
            labelKey={'label'}
            valueKey={'value'}
            colorKey={'color'}
          >
            <Pie.Chart innerRadius={Metrics._70} startAngle={270} />
          </PolarChart>
          <Timer currentStep={currentStep} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomText style={styles.serviceTitle}>Home Cleaning</CustomText>
          <View style={styles.locationContainer}>
            <LocationGrey />
            <CustomText style={styles.address}>
              Sector 62, sahibzada ajit singh nagar....
            </CustomText>
          </View>
          <View style={styles.divider} />
          {otpVerified ? (
            <View style={styles.stepContainer}>
              <View style={styles.step1Container}>
                <View style={styles.stepCountContainer}>
                  <CustomText style={styles.stepCount}>1</CustomText>
                </View>
                <CustomText style={styles.stepLabel}>
                  Service in progress
                </CustomText>
              </View>
              <View style={styles.verticalBar} />
              <View style={styles.step2}>
                <View
                  style={[
                    styles.stepCountContainer,
                    currentStep === 1 && styles.unvisitedStepCountContainer,
                  ]}
                >
                  <CustomText
                    style={[
                      styles.stepCount,
                      currentStep === 1 && styles.unvisitiedStepCount,
                    ]}
                  >
                    2
                  </CustomText>
                </View>
                <CustomText style={styles.stepLabel}>
                  Payment Received
                </CustomText>
              </View>
            </View>
          ) : (
            <>
              <CustomText style={styles.otpTitle}>
                {otpVerified ? 'Service Started' : 'Enter OTP to Start Service'}
              </CustomText>
              <CustomText style={styles.otpSubTitle}>
                {otpVerified
                  ? 'You’re now working on this job'
                  : 'Request the OTP from the customer to begin the service.'}
              </CustomText>
              <OtpInput
                numberOfDigits={4}
                onTextChange={setOtp}
                onFilled={handleOtpComplete}
                theme={{
                  pinCodeContainerStyle: styles.pinCodeContainer,
                  pinCodeTextStyle: styles.pinCodeText,
                  focusStickStyle: styles.focusStickStyle,
                  containerStyle: styles.otpContainerStyle,
                }}
              />
            </>
          )}

          <TouchableOpacity
            style={[styles.button, styles.paymentContainer]}
            activeOpacity={0.8}
          >
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

          <TouchableOpacity style={styles.button}>
            <View>
              <View style={styles.iconAndTitleContainer}>
                <ProfileIcon width={Metrics._16} height={Metrics._16} />
                <CustomText style={styles.buttonTitle}>
                  Customer Details
                </CustomText>
              </View>
              <CustomText>Shivani Mehra</CustomText>
            </View>
            <ChevronRight />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.button}>
            <View>
              <View style={styles.iconAndTitleContainer}>
                <ServicesIcon width={Metrics._16} height={Metrics._16} />
                <CustomText style={styles.buttonTitle}>
                  Service details
                </CustomText>
              </View>
              <CustomText>Home Cleaning</CustomText>
            </View>
            <ChevronRight />
          </TouchableOpacity>

          <View style={styles.divider} />
        </ScrollView>
        <Button
          onPress={handleButtonPress}
          title={currentStep === 1 ? 'Start Service' : 'Complete Service'}
        />
      </View>
    </View>
  );
};

export default ServiceProgress;
