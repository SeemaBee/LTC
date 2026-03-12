import React, { useEffect, useState } from 'react';
import { ScrollView, Switch, View } from 'react-native';
import { ProviderAppNavigationProp } from 'features/provider/types/providerNavigationTypes';
import getStyles from './HomeScreen.styles';
import CustomText from 'common/components/text';
import {
  BriefcaseFilledIcon,
  Cash1,
  Cash2,
  CheckMark,
  LocationIcon,
  NotificationIcon,
  PersonIcon,
  WalletFilled,
} from 'assets/svg';
import Button from 'common/components/button';
import SummaryCard from 'features/provider/components/home/summaryCard';
import { useTheme } from 'common/helperFunctions';
import MyChart from 'features/provider/components/home/chart';
import CustomDropDownPicker from 'common/components/customDropDownPicker';
import Tip from 'features/provider/components/home/tip';
import {
  getSummaryAndChartData,
  toggleAvailability,
} from 'features/provider/apis/homeScreenApis';
import Toast from 'react-native-toast-message';
import Loader from 'common/components/loader';
import { useDispatch, useSelector } from 'react-redux';
import { setProviderHomeData } from 'common/redux/features/provider/providerHomeSlice';
import { RootState } from 'common/redux/store';
import { setProviderAvailability } from 'common/redux/features/provider/providerAvailabilitySlice';
import { requestBackgroundPermission, requestForegroundPermissions } from 'features/provider/utils/PermissionServices';

type Props = {
  navigation: ProviderAppNavigationProp<'Home'>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const homeScreenData = useSelector((state: RootState) => state.providerHome);
  const isEnabled = useSelector(
    (state: RootState) => state.providerAvailability.isAvailable,
  );

  const askPermissions = async () => {
    const foregroundOk = await requestForegroundPermissions();
    if (!foregroundOk) {
      return;
    }
    const backgroundOk = await requestBackgroundPermission();
    if (!backgroundOk) {
      return;
    }
  };

  useEffect(() => {
    askPermissions();
  }, []);

  const changeAvailability = async () => {
    setIsLoading(true);
    try {
      const response = await toggleAvailability(
        isEnabled ? 'disable' : 'enable',
      );
      if (response.data.status) {
        Toast.show({
          type: 'success',
          text1: 'JackLap',
          text2: 'Availability status changed successfully.',
        });
        dispatch(setProviderAvailability(!isEnabled));
      }
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

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await getSummaryAndChartData();
      if (response.data.status) {
        dispatch(setProviderHomeData(response.data.data));
      }
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText>Availability</CustomText>
        <Switch
          trackColor={{ false: theme.grey6, true: theme.primary }}
          thumbColor={theme.white}
          onValueChange={changeAvailability}
          value={isEnabled}
        />
      </View>
      <CustomText style={styles.subHeading}>
        Enable Online to start working
      </CustomText>
      <View style={styles.locationAndNotification}>
        <View>
          <View style={styles.iconAndLocation}>
            <LocationIcon />
            <CustomText style={styles.locationName}>Mohali Walk</CustomText>
          </View>
          <CustomText style={styles.detailedLocation}>
            Sector 62, sahibzada ajit singh nagar....
          </CustomText>
        </View> 
        <NotificationIcon />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.banner}>
          <PersonIcon style={styles.bannerImage} />
          <Cash1 style={styles.cash1} />
          <Cash2 style={styles.cash2} />
          <CustomText
            style={styles.bannerHeader}
          >{`Welcome! Start\nReceiving Requests`}</CustomText>
          <CustomText style={styles.bannerSubHeading}>
            {`Accept requests near you and\ngrow your service business.`}
          </CustomText>
          <Button
            title="View Requests"
            onPress={() => navigation.navigate('RequestsStack')}
            style={styles.button}
            textStyle={styles.textStyle}
          />
        </View>
        <CustomText style={styles.summary}>Today’s Summary</CustomText>
        <CustomText style={styles.overview}>
          Overview of today’s jobs, completed tasks & earnings.
        </CustomText>
        <View style={styles.cardContainer}>
          <SummaryCard
            count={homeScreenData.jobsToday}
            Icon={BriefcaseFilledIcon}
            title="Jobs Today"
            subTitle="Scheduled for today"
          />
          <SummaryCard
            count={homeScreenData.completedJobs}
            Icon={CheckMark}
            title="Completed"
            subTitle="Finished so far"
          />
          <SummaryCard
            count={homeScreenData.todayEarnings}
            Icon={WalletFilled}
            title="Today’s Earnings"
            subTitle="Track your earnings"
          />
        </View>
        <CustomText style={styles.earningsTitle}>Earnings Overview</CustomText>
        <CustomText style={styles.overview}>
          Monthly earnings for the year
        </CustomText>
        <View style={styles.dropDownContainer}>
          <CustomDropDownPicker
            dropdownOpen={dropdownOpen}
            placeholder="Select Category"
            value={'This month'}
            items={[{ label: 'This month', value: 'This month' }]}
            setDropdownOpen={() => setDropdownOpen(!dropdownOpen)}
            setValue={callback => {}}
            containerStyle={styles.dropDown}
          />
        </View>
        <MyChart data={homeScreenData.chartData} />
        <CustomText style={styles.summary}>
          Tips to Get More Requests
        </CustomText>
        <CustomText style={styles.overview}>
          Maximize your chances of getting hired.
        </CustomText>
        <Tip text="Stay online during peak hours to get more requests." />
        <Tip text="Keep Your Profile Complete." />
        <Tip text="Respond quickly to boost your acceptance rate." />
        <Tip text="Switch the toggle ON when you're ready to work." />
      </ScrollView>
      <Loader show={isLoading} />
    </View>
  );
};

export default HomeScreen;
