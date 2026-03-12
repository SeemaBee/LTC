import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { LightTheme } from 'theme/colors';
import { useTheme } from 'common/helperFunctions';
import { Metrics } from 'theme/metrics';
import CustomText from 'common/components/text';
import { FontFamily, FontSizes } from 'theme/typography';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  label: string;
  icon: React.ComponentType<any>;
  onPress?: () => void;
};

const ServiceCard = ({ label, icon: Icon, onPress }: Props) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <LinearGradient
      colors={[theme.white, theme.primary, theme.primary, theme.white]}
      locations={[0.0594, 0.3477, 0.6189, 0.7591]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <TouchableOpacity activeOpacity={1} style={styles.subContainer} onPress={onPress}>
        <CustomText style={styles.labelText}>{label}</CustomText>
        <Icon />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    container: {
      width: '30%',
      height: Metrics._115,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: Metrics._12,
      padding: Metrics._1,
    },
    subContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.primaryLight,
      borderRadius: Metrics._11,
      paddingHorizontal: Metrics._12,
      paddingVertical: Metrics._10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    labelText: {
      fontSize: FontSizes._12,
      color: theme.primaryDark,
      fontFamily: FontFamily.interMedium,
      textAlign: 'center',
      marginBottom: Metrics._5,
    },
  });

export default ServiceCard;
