import React, { Ref, useState } from 'react';
import {
  TextInput,
  View,
  TextInputProps,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Eye, EyeOff } from 'lucide-react-native';
import { useTheme } from 'common/helperFunctions';
import CustomText from './text';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';
import { LightTheme } from 'theme/colors';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  ref?: Ref<TextInput> | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  secureTextEntry = false,
  ref = undefined,
  containerStyle = {},
  maxLength = 50,
  ...rest
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View style={[containerStyle, styles.inputBox]}>
      {label && <CustomText style={styles.label}>{label}</CustomText>}
      <View style={styles.inputContainer}>
        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
        <TextInput
          placeholderTextColor={theme.textSecondary}
          secureTextEntry={isSecure}
          style={styles.input}
          maxLength={maxLength}
          ref={ref}
          {...rest}
        />

        {secureTextEntry ? (
          <TouchableOpacity
            onPress={() => setIsSecure(!isSecure)}
            style={styles.iconRight}
          >
            {isSecure ? (
              <EyeOff size={moderateScale(20)} color={theme.textSecondary} />
            ) : (
              <Eye size={moderateScale(20)} color={theme.textSecondary} />
            )}
          </TouchableOpacity>
        ) : (
          rightIcon && <View style={styles.iconRight}>{rightIcon}</View>
        )}
      </View>

      {error && <CustomText style={styles.error}>{error}</CustomText>}
    </View>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    inputBox: {
      marginBottom: Metrics._20,
    },
    label: {
      marginBottom: Metrics._12,
      fontSize: FontSizes._16,
      color: theme.black2,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: moderateScale(1),
      borderRadius: moderateScale(8),
      height: moderateScale(48),
      paddingVertical: moderateScale(4),
      paddingHorizontal: moderateScale(16),
      borderColor: theme.border2,
    },
    input: {
      flex: 1,
      fontSize: FontSizes._12,
      fontFamily: FontFamily.interRegular,
      color: theme.black1,
    },
    iconLeft: {
      marginRight: Metrics._4,
    },
    iconRight: {
      marginLeft: Metrics._4,
    },
    error: {
      marginTop: Metrics._4,
      fontSize: FontSizes._12,
      color: theme.error,
    },
  });

export default Input;
