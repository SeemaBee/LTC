import { useTheme } from 'common/helperFunctions';
import { StyleSheet } from 'react-native';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';

const getStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.white,
    },
    subContainer: {
      flex: 1,
      padding: Metrics._16,
    },
    flex: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    titleContainer: {
      marginBottom: Metrics._22,
    },
    title: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._16,
    },
    titleAmount: {
      color: theme.primary,
      fontFamily: FontFamily.interSemiBold,
      fontSize: FontSizes._16,
    },
    serviceAdded: {
      color: theme.primary,
      fontFamily: FontFamily.interMedium,
      marginBottom: Metrics._8,
    },
    serviceAddedAmount: {
      fontFamily: FontFamily.interSemiBold,
    },
    divider: {
      height: Metrics._1,
      backgroundColor: theme.border3,
      marginVertical: Metrics._16,
    },
    paymentSummary: {
      fontFamily: FontFamily.interMedium,
      marginBottom: Metrics._18,
    },
    paymentSummaryText: {
      fontSize: FontSizes._12,
    },
    totalAmount: {
      fontFamily: FontFamily.interSemiBold,
      fontSize: FontSizes._12,
      color: theme.primary,
    },
    itemTotal: {
      marginBottom: Metrics._12,
    },
  });
};

export default getStyles;
