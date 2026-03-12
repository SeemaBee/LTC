import { useTheme } from 'common/helperFunctions';
import { ChevronLeft } from 'lucide-react-native';
import { Platform, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import CustomText from './text';
import { FontFamily, FontSizes } from 'theme/typography';

interface HeaderProps {
  text?: string;
  headerStyle?: StyleProp<ViewStyle>;
  showBackIcon?: boolean;
  onBackPress?: () => void
}

const Header: React.FC<HeaderProps> = ({ text, headerStyle, showBackIcon = true, onBackPress }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={[styles.headerRow, headerStyle]}>
      {showBackIcon && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => onBackPress && onBackPress()}
          style={styles.backIcon}
        >
          <ChevronLeft size={Metrics._20} color={theme.black1} />
        </TouchableOpacity>
      )}
      {text && <CustomText style={styles.title}>{text}</CustomText>}
    </View>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    headerRow: {
      width: '100%',
      height: Platform.select({ android: Metrics._60, ios: Metrics._80 }),
      marginTop: Metrics._8,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Metrics._16,
    },
    title: {
      fontSize: FontSizes._24,
      fontFamily: FontFamily.interMedium,
      color: theme.black1,
    },
    backIcon: {
      marginRight: Metrics._8,
    },
  });

export default Header;