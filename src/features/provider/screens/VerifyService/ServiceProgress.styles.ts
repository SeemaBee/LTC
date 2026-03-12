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
      padding: Metrics._16,
    },
    serviceTitle: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._18,
      color: theme.primary,
      marginBottom: Metrics._10,
    },
    locationContainer: {
      flexDirection: 'row',
      gap: Metrics._8,
      alignItems: 'center',
    },
    address: {
      fontSize: FontSizes._12,
    },
    divider: {
      height: Metrics._1,
      backgroundColor: theme.border3,
      marginVertical: Metrics._16,
    },
    otpTitle: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._16,
      marginBottom: Metrics._4,
    },
    otpSubTitle: {
      fontSize: FontSizes._12,
      color: theme.grey8,
      marginBottom: Metrics._18,
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    iconAndTitleContainer: {
      flexDirection: 'row',
      gap: Metrics._8,
      marginBottom: Metrics._10,
      alignItems: "center"
    },
    buttonTitle: {
      fontSize: FontSizes._16,
    },
    paymentContainer: {
      marginTop: Metrics._20,
    },
    buttonSubTitle: {
      fontSize: FontSizes._12,
      color: theme.black3,
      marginBottom: Metrics._6,
    },
    amount: {
      fontSize: FontSizes._16,
      color: theme.primary,
    },
    pinCodeContainer: {
      borderColor: theme.border7,
      borderWidth: Metrics._1,
      borderRadius: Metrics._6,
      width: Metrics._40,
      height: Metrics._40,
    },
    pinCodeText: {
      color: theme.black1,
      fontSize: FontSizes._16,
      fontFamily: FontFamily.interRegular,
    },
    focusStickStyle: {
      backgroundColor: theme.primary,
    },
    otpContainerStyle: {
      marginBottom: Metrics._24,
      width: '60%',
      gap: Metrics._12,
    },
    stepContainer: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    step1Container: {
      flexDirection: 'row',
      gap: Metrics._8,
      alignItems: 'center',
    },
    stepCountContainer: {
      backgroundColor: theme.primary,
      width: Metrics._24,
      height: Metrics._24,
      borderRadius: Metrics._30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    unvisitedStepCountContainer: {
      borderWidth: Metrics._1,
      borderColor: theme.grey8,
      backgroundColor: 'transparent',
    },
    stepCount: {
      color: theme.white,
      fontSize: FontSizes._12,
    },
    unvisitiedStepCount: {
      color: theme.grey8,
    },
    verticalBar: {
      height: Metrics._30,
      backgroundColor: theme.primary,
      width: Metrics._1,
      marginLeft: Metrics._12,
    },
    stepLabel: {
      fontSize: FontSizes._12,
    },
    step2: {
      flexDirection: 'row',
      gap: Metrics._8,
      alignItems: 'center',
    },
    chartContainer: {
      height: Metrics._180,
      marginBottom: Metrics._10
    },
  });
};

export default getStyles;
