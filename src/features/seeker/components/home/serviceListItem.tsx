import { CleaningIllustration } from 'assets/images';
import CustomText from 'common/components/text';
import { useTheme } from 'common/helperFunctions';
import { Check, Minus, Plus, Star } from 'lucide-react-native';
import { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';

interface Props {
  title: string;
  rating: number;
  price: number;
  desc?: string;
  isSelectionMode?: boolean;
}

const ServiceListItem: React.FC<Props> = ({
  title,
  rating,
  price,
  desc,
  isSelectionMode = true,
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <View style={[styles.card, isSelectionMode && styles.checkBoxCards]}>
      <View>
        <View style={styles.checkboxContainer}>
          {isSelectionMode && (
            <TouchableOpacity
              style={[styles.checkbox, isChecked && styles.checkboxChecked]}
              onPress={() => setIsChecked(!isChecked)}
            >
              {isChecked && <Check size={Metrics._12} color={theme.white} />}
            </TouchableOpacity>
          )}
          <CustomText>{title}</CustomText>
        </View>
        <View style={styles.cardReviewsContainer}>
          <Star fill={theme.grey7} stroke={theme.grey7} size={Metrics._14} />
          <CustomText style={styles.ratings}>{rating} reviews</CustomText>
        </View>
        <CustomText style={styles.price}>Starts at ${price}</CustomText>
        {desc && <CustomText style={styles.desc}>{desc}</CustomText>}
      </View>
      <View
        style={[
          styles.imageBox,
          { height: isSelectionMode ? Metrics._60 : Metrics._90 },
        ]}
      >
        <Image source={CleaningIllustration} style={styles.image} />
        {!isSelectionMode ? (
          !count ? (
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setCount(count + 1)}
            >
              <CustomText style={styles.text}>Add</CustomText>
            </TouchableOpacity>
          ) : (
            <View style={[styles.addButton, styles.countContainer]}>
              <TouchableOpacity
                style={styles.countChangeButton}
                onPress={() => setCount(count - 1)}
                activeOpacity={0.8}
                hitSlop={Metrics._4}
              >
                <Minus size={Metrics._10} color={theme.grey10} />
              </TouchableOpacity>
              <CustomText>{count}</CustomText>
              <TouchableOpacity
                style={[styles.countChangeButton, styles.plusButton]}
                onPress={() => setCount(count + 1)}
                activeOpacity={0.8}
                hitSlop={Metrics._12}
              >
                <Plus size={Metrics._10} color={theme.black1} />
              </TouchableOpacity>
            </View>
          )
        ) : null}
      </View>
    </View>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: Metrics._1,
      borderColor: theme.border7,
      paddingBottom: Metrics._30,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Metrics._8,
      marginBottom: Metrics._6,
    },
    checkbox: {
      width: Metrics._16,
      height: Metrics._16,
      borderWidth: 1,
      borderRadius: Metrics._4,
      borderColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkboxChecked: {
      backgroundColor: theme.primary,
    },
    ratings: {
      color: theme.black8,
      fontSize: FontSizes._12,
    },
    cardReviewsContainer: {
      flexDirection: 'row',
      gap: Metrics._8,
      alignItems: 'center',
      marginBottom: Metrics._6,
    },
    price: {
      fontFamily: FontFamily.interSemiBold,
      fontSize: FontSizes._12,
      color: theme.black9,
      marginBottom: Metrics._12,
    },
    desc: {
      fontSize: FontSizes._12,
      color: theme.grey8,
    },
    image: {
      height: Metrics._70,
      width: Metrics._90,
      borderRadius: Metrics._8,
    },
    addButton: {
      width: Metrics._60,
      height: Metrics._30,
      backgroundColor: theme.white,
      borderWidth: Metrics._1,
      borderColor: theme.border5,
      borderRadius: Metrics._8,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
    },
    text: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._12,
      color: theme.primary,
    },
    imageBox: {
      alignItems: 'center',
    },
    countChangeButton: {
      width: Metrics._20,
      height: Metrics._20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    plusButton: {
      borderRadius: Metrics._4,
      backgroundColor: theme.iconButtonBackground,
    },
    countContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: Metrics._80,
      height: Metrics._36,
    },
    checkBoxCards: {
      paddingBottom: Metrics._16,
    },
  });

export default ServiceListItem;
