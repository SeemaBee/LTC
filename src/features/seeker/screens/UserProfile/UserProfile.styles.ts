import { useTheme } from 'common/helperFunctions';
import { StyleSheet } from 'react-native';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';

const getStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.white
    },
    contentContainer: {
      paddingHorizontal: Metrics._16,
    },
    image: {
      width: Metrics._80,
      height: Metrics._80,
      marginBottom: Metrics._8,
      alignSelf: 'center',
    },
    username: {
      textAlign: 'center',
      marginBottom: Metrics._18,
    },
    title: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._18,
      marginBottom: Metrics._12,
    },
    iconAndText: {
      flexDirection: 'row',
      gap: Metrics._8,
      marginBottom: Metrics._14,
    },
    ratingText: {
      color: theme.black8,
    },
    divider: {
      marginTop: Metrics._2,
      height: Metrics._1,
      backgroundColor: theme.grey14,
      marginBottom: Metrics._16,
    },
    checkContainer: {
      width: Metrics._20,
      height: Metrics._20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.primary,
      borderRadius: Metrics._36
    },
    servicesText: {
      color: theme.grey11,
    },
  });
};

export default getStyles;
