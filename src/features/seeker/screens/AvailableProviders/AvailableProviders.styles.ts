import { useTheme } from 'common/helperFunctions';
import { StyleSheet } from 'react-native';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';

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
      paddingBottom: Metrics._16,
    },
    image: {
      height: Metrics._30,
      width: Metrics._30,
      borderRadius: Metrics._15,
    },
    reviewLabel: {
      fontSize: Metrics._12,
      color: LightTheme.black8,
      marginLeft: Metrics._2,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    itemContainer: {
      flexDirection: 'row',
      height: Metrics._60,
      marginBottom: Metrics._8,
      gap: Metrics._6,
      alignItems: 'center',
      paddingHorizontal: Metrics._12,
    },
    providersDetails: {
      marginLeft: Metrics._10,
    },
    distanceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: Metrics._8,
    },
    providersName: {
      marginBottom: Metrics._2,
    },
    selectedItem: {
      backgroundColor: theme.primaryLight2,
      borderRadius: Metrics._12
    },
  });
};

export default getStyles;
