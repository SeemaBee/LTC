import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
  View,
  TextStyle,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { LucideIcon } from 'lucide-react-native';
import { useTheme } from 'common/helperFunctions';
import CustomText from './text';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variant?: 'filled' | 'outline';
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  iconLeft: LeftIcon,
  iconRight: RightIcon,
  style,
  textStyle,
  variant = 'filled',
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.container,
        variant === 'outline' && styles.outlineContainer,
        disabled && styles.disabled,
        style,
      ]}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={theme.primary} />
      ) : (
        <View style={styles.content}>
          {LeftIcon && (
            <LeftIcon
              size={moderateScale(18)}
              style={{ marginRight: moderateScale(6) }}
            />
          )}

          <CustomText
            style={[
              styles.title,
              variant === 'outline' && styles.outlineText,
              textStyle,
            ]}
          >
            {title}
          </CustomText>

          {RightIcon && (
            <RightIcon
              size={moderateScale(18)}
              style={{ marginLeft: moderateScale(6) }}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      borderRadius: moderateScale(8),
      paddingVertical: Metrics._14,
      backgroundColor: theme.primary,
      marginTop: Metrics._10,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: theme.white,
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._16,
    },
    outlineContainer: {
      backgroundColor: 'transparent',
      borderWidth: Metrics._1,
      borderColor: theme.primary,
    },
    outlineText: {
      color: theme.primary,
    },
    disabled: {
      opacity: 0.3
    }
  });

export default Button;
