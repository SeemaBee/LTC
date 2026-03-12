import { useTheme } from 'common/helperFunctions';
import { StyleSheet } from 'react-native';

const getStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.primary
    },
  });
};

export default getStyles;