import { useTheme } from 'common/helperFunctions';
import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { LightTheme } from 'theme/colors';
import { FontFamily, FontSizes } from 'theme/typography';

const CustomText: React.FC<TextProps> = ({
  style,
  children,
  ...rest
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <Text {...rest} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    text: {
      fontFamily: FontFamily.interRegular,
      fontSize: FontSizes._14,
      color: theme.black1,
    },
  });

export default CustomText;