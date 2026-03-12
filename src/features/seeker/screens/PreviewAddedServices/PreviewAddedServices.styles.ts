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
    rowBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    changePartnerLabel: {
      fontSize: FontSizes._12,
      color: theme.primary,
    },
    providerContainer: {
      flexDirection: 'row',
      borderBottomWidth: Metrics._1,
      borderBottomColor: theme.black1 + '26',
      paddingVertical: Metrics._10,
      marginBottom: Metrics._8,
    },
    ratingTimeStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: Metrics._2,
    },
    providerImage: {
      height: Metrics._30,
      width: Metrics._30,
      borderRadius: Metrics._15,
    },
    providersDetails: {
      marginLeft: Metrics._10,
    },
    providersName: {
      marginBottom: Metrics._2,
    },
    reviewLabel: {
      fontSize: Metrics._12,
      color: theme.black8,
      marginLeft: Metrics._2,
    },
    distanceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: Metrics._8,
    },
    header: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._18,
      marginBottom: Metrics._8,
    },
    subHeading: {
      flexDirection: 'row',
      gap: Metrics._12,
      marginBottom: Metrics._24,
    },
    subHeadingText: {
      color: theme.black8,
    },
    reviewsContainer: {
      flexDirection: 'row',
      gap: Metrics._8,
      alignItems: 'center',
    },
    bookingContainer: {
      flexDirection: 'row',
      gap: Metrics._8,
      alignItems: 'center',
    },
    servicesContainer: {
      gap: Metrics._12,
      marginBottom: Metrics._24,
    },
    additionalServicesTitle: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._18,
      color: theme.primary,
      marginBottom: Metrics._20,
    },
    button: {
        marginHorizontal: Metrics._16
    }
  });
};

export default getStyles;
