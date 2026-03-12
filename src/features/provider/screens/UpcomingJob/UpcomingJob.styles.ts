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
    },
    scrollView: {
      padding: Metrics._16,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Metrics._8,
    },
    title: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._18,
    },
    subTitle: {
      fontSize: FontSizes._12,
      color: theme.grey8,
      marginTop: Metrics._4,
      marginBottom: Metrics._16,
    },
    iconAndTextContainer: {
      flexDirection: 'row',
      gap: Metrics._6,
      alignItems: 'center',
    },
    divider: {
      width: '100%',
      height: Metrics._1,
      backgroundColor: theme.border3,
      marginVertical: Metrics._14,
    },
    text: {
      fontSize: FontSizes._12,
    },
    iconAndTitleContainer: {
      flexDirection: 'row',
      gap: Metrics._8,
      alignItems: 'center',
      marginBottom: Metrics._16,
    },
    secondaryTitle: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._16,
    },
    ratingContainer: {
      marginVertical: Metrics._12,
      flexDirection: 'row',
      gap: Metrics._6,
    },
    ratingText: {
      color: theme.grey7,
    },
    jobDetailsButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: Metrics._8,
    },
    boxFlexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: Metrics._14,
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    flx: {
      flex: 1,
    },
    amountText: {
      color: theme.primary,
      fontFamily: FontFamily.interSemiBold,
    },
    button: {
      marginHorizontal: Metrics._16,
    },
  });
};

export default getStyles;
