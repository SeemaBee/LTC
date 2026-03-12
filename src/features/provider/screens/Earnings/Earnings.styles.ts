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
    scrollView: {
      flex: 1,
      paddingHorizontal: Metrics._16,
    },
    title: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._16,
      marginBottom: Metrics._4,
    },
    subTitle: {
      fontSize: FontSizes._12,
      color: theme.grey3,
      marginBottom: Metrics._18,
    },
    dropDownContainer: {
      alignItems: 'flex-end',
    },
    dropDown: {
      width: Metrics._130,
    },
    recentCompleted: {
        gap: Metrics._18,
    },
    recentEarnings: {
        marginTop: Metrics._28,
    }
  });
};

export default getStyles;
