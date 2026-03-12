import { useTheme } from 'common/helperFunctions';
import { StyleSheet } from 'react-native';
import { Metrics } from 'theme/metrics';

const getStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:theme.background
    },
    contentContainer:{
      flex:1,
      paddingHorizontal: Metrics._16,
    },
    subTitle: {
      color: theme.grey1,
      marginBottom: Metrics._24,
      marginTop: Metrics._8,
    },
    emailContainer: {
      marginBottom: Metrics._16,
    },
    forgotPassword: {
      textAlign: 'right',
      color: theme.grey1,
      marginBottom: Metrics._24,
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
