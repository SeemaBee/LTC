import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import getStyles from './BookingSchedule.styles';
import DashboardHeader from 'common/components/dashboardHeader';
import {
  CalendarGrey,
  CallIcon,
  ChatIcon,
  ClockGrey,
  CloseIcon,
  LocationGrey,
  WalletGrey,
} from 'assets/svg';
import CustomText from 'common/components/text';
import { User } from 'assets/images';
import { ChevronRight, Star } from 'lucide-react-native';
import { useTheme } from 'common/helperFunctions';
import React, { ReactNode } from 'react';
import { Metrics } from 'theme/metrics';
import Button from 'common/components/button';
import { SeekerAppNavigationProp } from 'features/seeker/types/seekerNavigationTypes';

type Props = {
  navigation: SeekerAppNavigationProp<'BookingSchedule'>;
};

type OptionType = {
  Icon: ReactNode;
  text: string;
  disabled?: boolean;
  onPress: () => void;
};

const Option: React.FC<OptionType> = ({
  Icon,
  text,
  disabled = false,
  onPress,
}) => {
  const styles = getStyles();
  const theme = useTheme();
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        disabled={disabled}
        style={styles.option}
      >
        <View style={styles.iconAndText}>
          {Icon}
          <CustomText style={styles.text}>{text}</CustomText>
        </View>
        {!disabled && <ChevronRight size={Metrics._12} color={theme.primary} />}
      </TouchableOpacity>
      <View style={styles.divider} />
    </>
  );
};

const BookingSchedule: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();
  const theme = useTheme();

  const navigateToLocationTracking = () => {
    navigation.navigate('CartStack', { screen: 'LocationTracking' });
  };

  const navigateToMessages = () => {
    navigation.navigate('HomeStack', { screen: 'Messages' });
  };

  return (
    <View style={styles.container}>
      <DashboardHeader text="Home Cleaning" />
      <ScrollView style={styles.subContainer}>
        <View style={styles.titleContainer}>
          <CalendarGrey />
          <CustomText style={styles.title}>Appointment Scheduled</CustomText>
        </View>
        <CustomText style={styles.desc}>
          Share the OTP with the professional when they arrive.
        </CustomText>
        <View style={styles.otpContainer}>
          <View style={styles.otp}>
            <CustomText style={styles.number}>5</CustomText>
          </View>
          <View style={styles.otp}>
            <CustomText>5</CustomText>
          </View>
          <View style={styles.otp}>
            <CustomText>5</CustomText>
          </View>
          <View style={styles.otp}>
            <CustomText>5</CustomText>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.profileAndChat}>
          <View style={styles.user}>
            <Image source={User} style={styles.image} />
            <CustomText style={styles.name}>Shakil</CustomText>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
              <CallIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToMessages} activeOpacity={0.8}>
              <ChatIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <Star fill={theme.grey7} strokeWidth={0} size={Metrics._20} />
          <CustomText style={styles.reviewsCount}>4.3 reviews</CustomText>
        </View>
        <View style={styles.divider} />
        <CustomText style={[styles.title, styles.bookingDetails]}>
          Booking Details
        </CustomText>
        <Option
          Icon={<ClockGrey />}
          text="Fri, Dec 12 - 9:30 AM"
          onPress={() => {}}
        />
        <Option
          Icon={<LocationGrey />}
          text="Sector 62, sahibzada ajit singh nagar...."
          onPress={() => {}}
        />
        <Option
          Icon={<CallIcon />}
          text="Raj Chopra  9xxxxxxxxx"
          onPress={() => {}}
        />
        <Option
          Icon={<WalletGrey />}
          text="$20 total amount"
          onPress={() => {}}
        />
        <CustomText style={[styles.title, styles.bookingDetails]}>
          Reschedule & Cancel
        </CustomText>
        <Option
          Icon={<ClockGrey />}
          text="Reschedule this booking"
          onPress={() => {}}
        />
        <Option
          Icon={<CloseIcon />}
          text="Cancel this booking"
          onPress={() => {}}
        />
      </ScrollView>
      <Button
        title="Track Professional"
        onPress={navigateToLocationTracking}
        style={styles.button}
      />
    </View>
  );
};

export default BookingSchedule;
