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
      paddingBottom: Metrics._16,
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
    bannerImage: {
      height: Metrics._180,
      width: '100%',
      borderRadius: Metrics._12,
      marginVertical: Metrics._10,
    },
    title: {
      fontSize: FontSizes._18,
      fontFamily: FontFamily.interMedium,
    },
    price: {
      color: theme.primary,
      fontFamily: FontFamily.interMedium,
    },
    separator: {
      height: Metrics._1,
      width: '100%',
      backgroundColor: theme.border7,
      marginVertical: Metrics._10,
    },
    featuresContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: Metrics._10,
    },
    featuresText: {
      fontSize: FontSizes._12,
      color: theme.grey11,
      marginLeft: Metrics._6,
    },
    addedServicesContainer: {
      marginTop: Metrics._5,
      borderBottomWidth: Metrics._1,
      borderColor: theme.border7,
      paddingBottom: Metrics._6,
    },
    serviceHighlightsContainer: {
      marginTop: Metrics._10,
      borderBottomWidth: Metrics._1,
      borderColor: theme.border7,
      paddingBottom: Metrics._8,
    },
    servicesRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: Metrics._10,
    },
    centeredText: {
      textAlign: 'center',
      fontSize: FontSizes._12,
      marginTop: Metrics._5,
    },
    bringContainer: {
      marginTop: Metrics._10,
      borderBottomWidth: Metrics._1,
      borderColor: theme.border7,
      paddingBottom: Metrics._10,
    },
    dot: {
      height: Metrics._4,
      width: Metrics._4,
      backgroundColor: theme.grey11,
      borderRadius: Metrics._2,
    },
    lovedOnesContainer: {
      marginVertical: Metrics._12,
    },
    knowText: {
      fontSize: FontSizes._12,
      textAlign: 'center',
      color: theme.grey12,
    },
    shareLabel: {
      fontSize: FontSizes._12,
      color: theme.primary,
      fontFamily: FontFamily.interMedium,
    },
    shareAction: {
      borderWidth: Metrics._1,
      borderColor: theme.grey13,
      height: Metrics._36,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Metrics._8,
      marginTop: Metrics._8,
    },
    ratingsContainer: {
      marginTop: Metrics._6,
    },
    rateCountContainer: {
      flexDirection: 'row',
      marginVertical: Metrics._8,
    },
    rateCount: {
      fontSize: FontSizes._24,
      fontFamily: FontFamily.interMedium,
      color: theme.grey11,
    },
    reviewCount: {
      fontSize: FontSizes._12,
      color: theme.grey11,
    },
    starStyles: {
      top: Metrics._8,
      marginRight: Metrics._5,
    },
    cartAction: {
      backgroundColor: theme.primary,
      borderRadius: Metrics._8,
      paddingHorizontal: Metrics._38,
      paddingVertical: Metrics._12,
    },
    footerContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: Metrics._16,
    },
    viewCart: {
      fontSize: FontSizes._12,
      color: theme.white,
    },
    footerView: {
      borderTopWidth: Metrics._1,
      borderColor: theme.border7,
      paddingTop: Metrics._10,
      marginBottom: Metrics._10,
    },
    footer: {
      paddingTop: Metrics._10,
    },
  });
};

export default getStyles;
