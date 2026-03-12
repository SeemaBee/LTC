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
      padding: Metrics._16,
    },
    titleContainer: {
      flexDirection: 'row',
      gap: Metrics._4,
      marginBottom: Metrics._8,
      alignItems: "center"
    },
    title: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._18,
    },
    desc: {
      fontSize: FontSizes._12,
      color: theme.grey8,
      marginBottom: Metrics._18,
    },
    otpContainer: {
      flexDirection: 'row',
      gap: Metrics._12,
      marginBottom: Metrics._20,
    },
    otp: {
      width: Metrics._40,
      height: Metrics._40,
      borderRadius: Metrics._6,
      borderWidth: Metrics._1,
      borderColor: theme.border7,
      justifyContent: 'center',
      alignItems: 'center',
    },
    number: {
      fontSize: FontSizes._16,
    },
    divider: {
      height: Metrics._1,
      backgroundColor: theme.border3,
      marginBottom: Metrics._16,
    },
    profileAndChat: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: Metrics._8,
    },
    user: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Metrics._8,
    },
    image: {
      width: Metrics._35,
      height: Metrics._35,
      borderRadius: Metrics._70,
    },
    name: {
      fontSize: FontSizes._16,
    },
    iconContainer: {
      flexDirection: 'row',
      gap: Metrics._18,
    },
    ratingContainer: {
      flexDirection: 'row',
      gap: Metrics._6,
      marginBottom: Metrics._12,
    },
    reviewsCount: {
      color: theme.black8,
    },
    bookingDetails: {
      marginBottom: Metrics._18,
    },
    text: {
      fontSize: FontSizes._12,
    },
    iconAndText: {
      gap: Metrics._6,
      flexDirection: "row",
      alignItems: "center"
    },
    option: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: Metrics._12,
        alignItems: "center",
    },
    button: {
      marginHorizontal: Metrics._16
    }
  });
};

export default getStyles;
