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
    contentStyle: {
      paddingHorizontal: Metrics._16,
    },
    subTitle: {
      color: theme.grey1,
      marginBottom: Metrics._24,
      marginTop: Metrics._8,
    },
    selectionTitle: {
      fontSize: FontSizes._16,
      marginBottom: Metrics._12,
    },
    radioBox: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: Metrics._12,
    },
    emptyRadio: {
      width: Metrics._22,
      height: Metrics._22,
      borderRadius: Metrics._12,
      borderWidth: Metrics._1,
      borderColor: theme.primary,
    },
    selectedRadio: {
      borderWidth: Metrics._6,
    },
    radioText: {
      color: theme.black3,
      marginLeft: Metrics._12,
    },
    button: {
      marginTop: Metrics._24,
    },
    signUpContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: Metrics._18,
      justifyContent: 'center',
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