import { View, StyleSheet, Image } from 'react-native';
import React from 'react';
import { LightTheme } from 'theme/colors';
import { useTheme } from 'common/helperFunctions';
import { Metrics } from 'theme/metrics';
import { Image1 } from 'assets/images';
import CustomText from 'common/components/text';
import { FontSizes } from 'theme/typography';
import { Star } from 'lucide-react-native';

const ProviderCard = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <Image source={Image1} style={styles.image} />
      <CustomText style={styles.title}>Home Cleaning</CustomText>
      <View style={styles.row}>
        <Star size={Metrics._12} fill={theme.grey7} stroke={theme.white} />
        <CustomText style={styles.reviewText}>4.3 reviews</CustomText>
      </View>
      <CustomText style={styles.price}>$ 200</CustomText>
    </View>
  );
};

const getStyles = (theme: typeof LightTheme) => {
  return StyleSheet.create({
    container: {
      width: Metrics._120,
    },
    image: {
      width: '100%',
      height: Metrics._120,
      borderRadius: Metrics._8,
    },
    title: {
      color: theme.black4,
      marginTop: Metrics._5
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: Metrics._2
    },
    reviewText: {
      fontSize: FontSizes._12,
      color: theme.black7,
    },
    price: {
      fontSize: FontSizes._12,
      color: theme.primary,
    },
  });
};

export default ProviderCard;
