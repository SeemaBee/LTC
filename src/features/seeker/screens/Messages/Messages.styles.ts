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
    subContainer: {
      flex: 1,
      padding: Metrics._16,
    },
    card: {
      borderRadius: Metrics._16,
      borderWidth: Metrics._1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: Metrics._16,
      borderColor: theme.border4,
      gap: Metrics._16
    },
    profileImg: {
      width: Metrics._50,
      height: Metrics._50,
    },
    username: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._16,
      color: theme.black11,
    },
    userMessage: {
      fontSize: FontSizes._12,
      color: theme.grey17,
    },
    time: {
      fontSize: FontSizes._12,
      color: theme.grey17,
    },
    countContainer: {
      width: Metrics._18,
      height: Metrics._18,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.primary,
      borderRadius: Metrics._36,
    },
    count: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._10,
      color: theme.white,
    },
    dot: {
      width: Metrics._10,
      height: Metrics._10,
      borderWidth: Metrics._1,
      borderColor: theme.white,
      borderRadius: Metrics._16,
      backgroundColor: theme.primary,
      position: 'absolute',
      bottom: 0,
      right: Metrics._6,
    },
    flx: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    userNameAndTime: {
        gap: Metrics._2,
        flex: 1
    }
  });
};

export default getStyles;
