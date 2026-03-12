import { ScrollView, View } from 'react-native';
import getStyles from './Earnings.styles';
import DashboardHeader from 'common/components/dashboardHeader';
import { ProviderAppNavigationProp } from 'features/provider/types/providerNavigationTypes';
import CustomText from 'common/components/text';
import CustomDropDownPicker from 'common/components/customDropDownPicker';
import MyChart from 'features/provider/components/home/chart';
import JobCard from 'features/provider/components/requests/jobCard';
import { useState } from 'react';

interface Props {
  navigation: ProviderAppNavigationProp<'Earnings'>;
}

const data = [
  { month: 'Jan', highTmp: 9000 },
  { month: 'Feb', highTmp: 10000 },
  { month: 'Mar', highTmp: 30000 },
  { month: 'Apr', highTmp: 40000 },
];

const Earnings: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <DashboardHeader text="Earnings" onBackPress={handleBackPress} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <CustomText style={styles.title}>Earnings Overview</CustomText>
        <CustomText style={styles.subTitle}>
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
        <MyChart data={data} />
        <CustomText style={[styles.title, styles.recentEarnings]}>Recent Earnings</CustomText>
        <CustomText style={styles.subTitle}>
          Monthly earnings for the year
        </CustomText>
        <View style={styles.recentCompleted}>
          <JobCard
            item={{
              amount: 1200,
              location: 'Sector 21 Mohali',
              distance: 2.3,
              slotDate: '19 Dec, 2025',
              slotTime: '3:00 PM',
            }}
            onPress={() => {}}
          />
          <JobCard
            item={{
              amount: 1200,
              location: 'Sector 21 Mohali',
              distance: 2.3,
              slotDate: '19 Dec, 2025',
              slotTime: '3:00 PM',
            }}
            onPress={() => {}}
          />
          <JobCard
            item={{
              amount: 1200,
              location: 'Sector 21 Mohali',
              distance: 2.3,
              slotDate: '19 Dec, 2025',
              slotTime: '3:00 PM',
            }}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Earnings;
