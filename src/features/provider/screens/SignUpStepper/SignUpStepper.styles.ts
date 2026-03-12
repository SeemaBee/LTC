import { useTheme } from 'common/helperFunctions';
import { StyleSheet } from 'react-native';
import { Metrics } from 'theme/metrics';
import { FontSizes } from 'theme/typography';

const getStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    contentContainer: {
      flex: 1,
      paddingTop: Metrics._20,
      paddingHorizontal: Metrics._16,
      paddingBottom: Metrics._10,
    },
    title: {
      fontSize: FontSizes._28,
      marginBottom: Metrics._24,
      textAlign: 'center',
    },
    subTitle: {
      color: theme.grey1,
      marginBottom: Metrics._24,
      marginTop: Metrics._8,
    },
    stepperContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: Metrics._24,
    },
    stepperRow: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: Metrics._10,
    },
    step: {
      width: '30%',
      height: Metrics._4,
      borderRadius: Metrics._4,
      backgroundColor: theme.border1,
    },
    filledStep: {
      backgroundColor: theme.primary,
    },
    button: {
      marginTop: Metrics._20,
      paddingVertical: Metrics._16,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: FontSizes._16,
    },
    loginButton: {
      marginTop: Metrics._20,
      alignSelf: 'center',
    },
    signUpContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: Metrics._18,
      justifyContent: 'center',
      marginBottom: Metrics._16,
    },
    promptText: {
      color: theme.grey1,
    },
    signUpLink: {
      color: theme.primary,
    },
  });
};

export default getStyles;
