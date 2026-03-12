import { StyleSheet } from 'react-native';
import { useTheme } from 'common/helperFunctions';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';

export const getStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.white,
    },
    subContainer: {
      flexDirection: 'row',
      padding: Metrics._20,
    },
    profileImage: {
      width: Metrics._30,
      height: Metrics._30,
      borderRadius: Metrics._15,
    },
    headerBox: {
      flex: 1,
    },
    header: {
      fontSize: FontSizes._20,
      fontFamily: FontFamily.interSemiBold,
      marginLeft: Metrics._8,
    },
    listContainer: {
      flex: 1,
      borderTopLeftRadius: Metrics._30,
      borderTopRightRadius: Metrics._30,
      backgroundColor: theme.white,
      paddingHorizontal: Metrics._20,
      paddingBottom: Metrics._30,
    },
    flx: {
      flex: 1,
      backgroundColor: theme.white,
      borderTopLeftRadius: Metrics._20,
      borderTopRightRadius: Metrics._20,
      paddingHorizontal: Metrics._10,
      paddingBottom: Metrics._10,
    },
    inputContainer: {
      width: '100%',
      height: Metrics._60,
      borderRadius: Metrics._30,
      borderWidth: Metrics._1,
      borderColor: theme.border1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Metrics._10,
    },
    input: {
      flex: 1,
      fontSize: FontSizes._14,
    },
    sendButtonBox: {
      width: Metrics._40,
      height: Metrics._40,
      borderRadius: Metrics._20,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    messagesContainerStyle: {
      borderTopLeftRadius: Metrics._20,
      borderTopRightRadius: Metrics._20,
      paddingVertical: Metrics._10,
    },
  });
};
