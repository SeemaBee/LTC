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
    customHeaderStyle: {
      height: Metrics._38,
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
    scrollView: {
      flex: 1,
    },
    contentContainer: {},
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
  });
};

export default getStyles;
