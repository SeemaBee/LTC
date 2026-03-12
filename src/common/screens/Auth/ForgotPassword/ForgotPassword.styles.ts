import { useTheme } from 'common/helperFunctions';
import { StyleSheet } from 'react-native';
import { Metrics } from 'theme/metrics';

const getStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: Metrics._16,
    },
    subTitle: {
      color: theme.grey1,
      marginBottom: Metrics._24,
      marginTop: Metrics._8,
    },
  });
};

export default getStyles;
