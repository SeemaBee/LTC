import { useTheme } from 'common/helperFunctions';
import { StyleSheet } from 'react-native';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';

const getStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    parentContainer: {
      flex: 1,
      paddingBottom: Metrics._120,
    },
    container: {
      backgroundColor: theme.background,
      paddingHorizontal: Metrics._16,
      paddingTop: Metrics._18,
    },
    headerContainer: {
      flexDirection: 'row',
      height: Metrics._60,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    pinRow: {
      flexDirection: 'row',
      gap: Metrics._4,
    },
    contentStyle: {
      paddingVertical: Metrics._20,
    },
    title: {
      fontSize: FontSizes._18,
      fontFamily: FontFamily.interMedium,
      marginBottom: Metrics._4,
    },
    desc: {
      fontSize: FontSizes._12,
      fontFamily: FontFamily.interRegular,
      color: theme.grey8,
    },
    servicesRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: Metrics._18,
      flexWrap: "wrap",
      gap: Metrics._16,
    },
    bookButtonContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: Metrics._18,
    },
    bookButtonBox: {
      width: '50%',
      height: Metrics._50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.primary,
      borderRadius: Metrics._8,
    },
    buttonText: {
      color: theme.white,
      fontFamily: FontFamily.interMedium,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginTop: Metrics._18,
    },
    stepBox: {
      width: '33%',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    countView: {
      width: Metrics._24,
      height: Metrics._24,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: Metrics._1,
      borderColor: theme.primary,
      borderRadius: Metrics._12,
      marginBottom: Metrics._12,
    },
    count: {
      fontSize: FontSizes._12,
      color: theme.primary,
    },
    countText: {
      textAlign: 'center',
    },
    imageBackground: {
      height: Metrics._200,
      padding: Metrics._24,
      marginVertical: Metrics._24,
      borderRadius: Metrics._12,
    },
    glowTitle: {
      fontSize: FontSizes._18,
      fontFamily: FontFamily.interMedium,
    },
    glowDesc: {
      fontSize: FontSizes._12,
      color: theme.grey8,
      marginTop: Metrics._4,
      marginBottom: Metrics._12,
      width: '50%',
    },
    offerContainer: {
      width: '100%',
      paddingVertical: Metrics._10,
      paddingHorizontal: Metrics._30,
      borderWidth: Metrics._1,
      borderColor: theme.border1,
      borderRadius: Metrics._8,
      alignItems: 'center',
      marginTop: Metrics._24,
      marginBottom: Metrics._20,
    },
    offerTitle: {
      fontSize: FontSizes._16,
      color: theme.black1,
      fontFamily: FontFamily.interMedium,
      textAlign: 'center',
    },
    offer: {
      fontSize: FontSizes._26,
      fontFamily: FontFamily.interSemiBold,
    },
    offerDescription: {
      fontSize: FontSizes._12,
      fontFamily: FontFamily.interRegular,
      color: theme.black7,
      textAlign: 'center',
    },
    featureContainer: {
      width: '30%',
      alignItems: 'center',
      borderRightWidth: Metrics._1,
      height: '100%',
    },
    centeredText: {
      textAlign: 'center',
      fontSize: FontSizes._12,
      marginTop: Metrics._5,
    },
    agentContainer: {
      height: Metrics._60,
      width: Metrics._60,
      backgroundColor: theme.primary,
      borderRadius: Metrics._30,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: Metrics._14,
      bottom: Metrics._12,
      shadowColor: theme.black1,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
  });
};

export default getStyles;

export const featureContainer = (bool: boolean) => {
  return {
    width: '33%',
    alignItems: 'center',
    borderRightWidth: bool ? Metrics._1 : 0,
    borderRightColor: LightTheme.verticalSeparator,
    height: '100%',
  } as const;
};
