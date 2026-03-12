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
    formHeader: {
      marginBottom: Metrics._16,
      fontSize: FontSizes._20,
    },
  });
};

export default getStyles;
