import { useTheme } from 'common/helperFunctions';
import { StyleSheet } from 'react-native';
import { Metrics } from 'theme/metrics';
import { FontSizes } from 'theme/typography';

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
      justifyContent: 'space-between',
      marginBottom: Metrics._8,
      alignItems: 'center',
    },
    title: {
      fontSize: Metrics._16,
    },
    time: {
      color: theme.primary,
    },
    distance: {
      color: theme.black3,
    },
    divider: {
      backgroundColor: theme.border3,
      height: Metrics._1,
      marginVertical: Metrics._16,
    },
    driverInfo: {
      padding: Metrics._12,
      borderRadius: Metrics._10,
      gap: Metrics._10,
      backgroundColor: theme.grey16,
      marginBottom: Metrics._16
    },
    nameAndVehicleDetails: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    nameAndPicture: {
        flexDirection: "row",
        alignItems: "center",
        gap: Metrics._8
    },
    image: {
        width: Metrics._32,
        height: Metrics._32,
    },
    ratingAndVehicleDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    reviews: {
        flexDirection: "row",
        alignItems: 'center',
        gap: Metrics._8
    },
    reviewCount: {
        fontSize: FontSizes._12,
        color: theme.black10
    },
    vehicleName: {
        fontSize: FontSizes._12,
        color: theme.black3
    },
    destination: {
        gap: Metrics._6,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: Metrics._12
    },
    text: {
        fontSize: FontSizes._12,
        color: theme.black3
    },
     button: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
     buttonTitle: {
      fontSize: FontSizes._16,
    },
    iconAndTitleContainer: {
      flexDirection: 'row',
      gap: Metrics._8,
      marginBottom: Metrics._10,
      alignItems: "center"
    },
    buttonSubTitle: {
      fontSize: FontSizes._12,
      color: theme.black3,
      marginBottom: Metrics._6,
    },
    amount: {
      fontSize: FontSizes._16,
      color: theme.primary,
    },
    payBtn: {
        marginBottom: Metrics._18,
        marginHorizontal: Metrics._16
    },
    rescheduleText: {
        color: theme.black10,
        marginBottom: Metrics._8
    }
  });
};

export default getStyles;
