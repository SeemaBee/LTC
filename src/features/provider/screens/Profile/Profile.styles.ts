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
      paddingHorizontal: Metrics._16,
      alignItems: 'center',
    },
    name: {
      marginTop: Metrics._8,
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._20,
      marginBottom: Metrics._24,
    },
  });
};

export default getStyles;
