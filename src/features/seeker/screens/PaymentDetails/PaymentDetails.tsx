import { View } from 'react-native';
import getStyles from './PaymentDetails.styles';
import DashboardHeader from 'common/components/dashboardHeader';
import { SeekerAppNavigationProp } from 'features/seeker/types/seekerNavigationTypes';
import CustomText from 'common/components/text';

type Props = {
  navigation: SeekerAppNavigationProp<'PaymentDetails'>;
};

const PaymentDetails: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <DashboardHeader text="Payment details" onBackPress={() => navigation.goBack()} />
      <View style={styles.subContainer}>
        <View style={[styles.flex, styles.titleContainer]}>
          <CustomText style={styles.title}>Basic Home Cleaning</CustomText>
          <CustomText style={styles.titleAmount}>$ 200</CustomText>
        </View>
        <CustomText style={styles.serviceAdded}>Services added</CustomText>
        <View style={styles.flex}>
          <CustomText>Fridge/oven cleaning</CustomText>
          <CustomText style={styles.serviceAddedAmount}>$ 80</CustomText>
        </View>
        <View style={styles.divider} />
        <CustomText style={styles.paymentSummary}>Payment summary</CustomText>
        <View style={styles.flex}>
          <CustomText style={[styles.paymentSummaryText, styles.itemTotal]}>Item total</CustomText>
          <CustomText style={styles.paymentSummaryText}>$ 200</CustomText>
        </View>
        <View style={styles.flex}>
          <CustomText style={styles.paymentSummaryText}>
            Taxes and Fee
          </CustomText>
          <CustomText style={styles.paymentSummaryText}>$ 10</CustomText>
        </View>
        <View style={styles.divider} />
        <View style={styles.flex}>
          <CustomText style={styles.totalAmount}>Total amount</CustomText>
          <CustomText style={styles.totalAmount}>$ 210</CustomText>
        </View>
        <View style={styles.divider} />
        <View style={styles.flex}>
          <CustomText style={styles.totalAmount}>Amount to pay</CustomText>
          <CustomText style={styles.totalAmount}>$ 210</CustomText>
        </View>
        <View style={styles.divider} />
      </View>
    </View>
  );
};

export default PaymentDetails;
