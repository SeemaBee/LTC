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
    couponText: {
      fontSize: Metrics._12,
      marginLeft: Metrics._6,
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
    title: {
      fontSize: FontSizes._16,
      fontFamily: FontFamily.interMedium,
    },
    price: {
      fontSize: FontSizes._16,
      fontFamily: FontFamily.interSemiBold,
      color: theme.primary,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    serviceAdded: {
      fontSize: FontSizes._14,
      fontFamily: FontFamily.interMedium,
      color: theme.primary,
      marginTop: Metrics._22,
    },
    serviceDetailsContainer: {
      marginTop: Metrics._6,
    },
    offersContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: Metrics._16,
      borderBottomWidth: Metrics._1,
      borderColor: theme.border7,
      paddingBottom: Metrics._16,
    },
    paymentText: {
      fontFamily: FontFamily.interMedium,
      marginVertical: Metrics._14,
    },
    itemTotal: {
      fontSize: FontSizes._12,
    },
    taxFee: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: Metrics._12,
    },
    separator: {
      height: Metrics._1,
      width: '100%',
      backgroundColor: theme.border7,
      marginVertical: Metrics._14,
    },
    totalAmount: {
      fontSize: FontSizes._12,
      color: theme.primary,
      fontFamily: FontFamily.interSemiBold,
    },
    addressText: {
      fontFamily: FontFamily.interMedium,
    },
    addressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: Metrics._10,
      borderBottomWidth: Metrics._1,
      borderColor: theme.border7,
      paddingBottom: Metrics._10,
      justifyContent: 'space-between',
    },
    address: {
      fontSize: FontSizes._12,
      marginLeft: Metrics._8,
    },
    editPackage: {
      fontSize: FontSizes._14,
      fontFamily: FontFamily.interMedium,
      color: theme.primary,
    },
    footerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: Metrics._16,
      height: Metrics._50,
      marginVertical: Metrics._8,
    },
    editAction: {
      borderWidth: Metrics._1,
      borderColor: theme.primary,
      width: '40%',
      height: Metrics._45,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Metrics._8,
    },
    slotAction: {
      backgroundColor: theme.primary,
      width: '40%',
      height: Metrics._45,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Metrics._8,
    },
    selectSlot: {
      color: theme.white,
    },
  });
};

export default getStyles;
