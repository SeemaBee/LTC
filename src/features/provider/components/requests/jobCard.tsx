import {
  Calendar,
  Clock,
  HomePrimaryFilled,
  LocationWhite,
  Wallet,
} from 'assets/svg';
import CustomText from 'common/components/text';
import { useTheme } from 'common/helperFunctions';
import { StyleSheet, View } from 'react-native';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';
import Chip from './chip';
import Button from 'common/components/button';
import { Requests } from 'features/provider/types/commonTypes';

interface Props {
  onPress: () => void;
  item: Requests;
}

const JobCard: React.FC<Props> = ({ onPress, item }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.row}>
          <HomePrimaryFilled />
          <CustomText style={styles.title}>Home Deep Cleaning</CustomText>
        </View>
        <View style={styles.chipContainer}>
          <Chip Icon={Wallet} text={`$${item.amount}`} />
          <Chip Icon={LocationWhite} text={item.location} />
          <Chip Icon={LocationWhite} text={`${item.distance} miles away`} />
          <Chip Icon={Clock} text={item.slotTime} />
          <Chip Icon={Calendar} text={item.slotDate} />
        </View>
        <Button title="View Details" variant="outline" onPress={onPress} />
      </View>
    </View>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: Metrics._320,
      backgroundColor: theme.primary,
      borderRadius: Metrics._16,
    },
    subContainer: {
      height: '98%',
      paddingVertical: Metrics._18,
      paddingHorizontal: Metrics._16,
      backgroundColor: theme.primaryLight,
      borderRadius: Metrics._12,
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: Metrics._16,
    },
    title: {
      fontSize: FontSizes._18,
      fontFamily: FontFamily.interBold,
      marginLeft: Metrics._6,
    },
    chipContainer: {
      flexDirection: 'row',
      gap: Metrics._12,
      flexWrap: 'wrap',
      marginBottom: Metrics._24,
    },
  });

export default JobCard;
