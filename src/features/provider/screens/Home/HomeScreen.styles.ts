import { useTheme } from 'common/helperFunctions';
import { StyleSheet } from 'react-native';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';

const getStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      flex: 1,
      paddingHorizontal: Metrics._16,
      paddingTop: Metrics._18,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Metrics._12,
    },
    subHeading: {
      fontSize: FontSizes._12,
      color: theme.grey3,
      paddingBottom: Metrics._12,
      borderBottomColor: theme.border3,
      borderBottomWidth: Metrics._1,
    },
    locationAndNotification: {
      marginVertical: Metrics._20,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconAndLocation: {
      flexDirection: 'row',
      gap: Metrics._4,
      alignItems: 'center',
      marginBottom: Metrics._6,
    },
    locationName: {
      fontSize: FontSizes._16,
    },
    detailedLocation: {
      fontSize: FontSizes._12,
      color: theme.grey3,
    },
    banner: {
      height: Metrics._224,
      borderRadius: Metrics._12,
      backgroundColor: theme.primary,
      paddingTop: Metrics._24,
      paddingLeft: Metrics._24,
    },
    bannerHeader: {
      fontFamily: FontFamily.interBold,
      fontSize: FontSizes._20,
      color: theme.white,
    },
    bannerSubHeading: {
      marginVertical: Metrics._12,
      color: theme.grey4,
    },
    button: {
      width: Metrics._130,
      height: Metrics._48,
      backgroundColor: theme.white,
    },
    textStyle: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._14,
      color: theme.primary,
    },
    bannerImage: {
      position: 'absolute',
      right: 0,
      bottom: 0,
    },
    cash1: {
      position: 'absolute',
      bottom: Metrics._8,
      left: '40%',
    },
    cash2: {
      position: 'absolute',
      top: Metrics._14,
      right: Metrics._18,
    },
    summary: {
      fontFamily: FontFamily.interSemiBold,
      fontSize: FontSizes._18,
      marginTop: Metrics._24,
      marginBottom: Metrics._8,
    },
    overview: {
      fontSize: FontSizes._12,
      color: theme.grey3,
      marginBottom: Metrics._18,
    },
    cardContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '4%',
    },
    scrollView: {
      paddingBottom: Metrics._60,
    },
    earningsTitle: {
      fontSize: FontSizes._16,
      fontFamily: FontFamily.interMedium,
    },
    dropDownContainer: {
      alignItems: 'flex-end',
    },
    dropDown: {
      width: Metrics._130
    }
  });
};

export default getStyles;
