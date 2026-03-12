import { useTheme } from 'common/helperFunctions';
import { StyleSheet } from 'react-native';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';

const getStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    subContainer: {
      flex: 1,
    },
    scrollView: {
      padding: Metrics._16,
    },
    heading: {
      fontFamily: FontFamily.interBold,
      fontSize: FontSizes._24,
      marginBottom: Metrics._6,
    },
    subHeading: {
      color: theme.black5,
    },
    chipContainer: {
      marginTop: Metrics._16,
      marginBottom: Metrics._20,
      flexDirection: 'row',
      gap: Metrics._12,
      flexWrap: 'wrap',
    },
    mapTextBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: Metrics._20,
    },
    mapText: {
      color: theme.primary,
    },
    title: {
      fontSize: FontSizes._18,
      fontFamily: FontFamily.interMedium,
      marginBottom: Metrics._12,
    },
    desc: {
      color: theme.black5,
      marginBottom: Metrics._20,
    },
    quantity: {
      marginBottom: Metrics._14,
    },
    infoContainer: {
      flexDirection: 'row',
      width: '80%',
      alignItems: 'baseline',
      gap: Metrics._8,
      marginBottom: Metrics._14,
    },
    label: {
      color: theme.black5,
    },
    infoDetail: {
      fontSize: FontSizes._16,
      color: theme.black1,
    },
    earnings: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    earningsTitle: {
      color: theme.black5,
    },
    amount: {
      color: theme.black1,
    },
    divider: {
      width: '100%',
      height: Metrics._1,
      backgroundColor: theme.border6,
      marginVertical: Metrics._14,
    },
    serviceType: {
      color: theme.black1,
      marginTop: Metrics._14,
      marginBottom: Metrics._4,
    },
    earningQuantity: {
      color: theme.black6,
    },
    totalEarnings: {
      fontSize: FontSizes._18,
      fontFamily: FontFamily.interMedium,
      color: theme.primary,
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: Metrics._22,
      width: '100%',
      paddingHorizontal: Metrics._16,
      paddingVertical: Metrics._20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: '45%',
    },
  });
};

export default getStyles;
