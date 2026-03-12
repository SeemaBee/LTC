import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { LightTheme } from 'theme/colors';
import { useTheme } from 'common/helperFunctions';
import CustomText from 'common/components/text';
import { FontFamily, FontSizes } from 'theme/typography';
import { Minus, Plus, Star } from 'lucide-react-native';
import { Metrics } from 'theme/metrics';
import { Time } from 'assets/svg';

interface Props {
  title: string;
  price: number;
  serviceImage: number;
  showDetails?: boolean;
}

const ServicesItem = ({
  title,
  price,
  serviceImage,
  showDetails = false,
}: Props) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <CustomText style={styles.title}>{title}</CustomText>
        <View style={styles.ratingTimeStyle}>
          <View style={styles.row}>
            <Star
              size={Metrics._18}
              fill={LightTheme.grey7}
              stroke={LightTheme.white}
            />
            <CustomText style={styles.reviewLabel}>4.3 reviews</CustomText>
          </View>
          <View style={styles.distanceRow}>
            <Time />
            <CustomText style={styles.reviewLabel}>3 hrs</CustomText>
          </View>
        </View>
        <CustomText style={styles.price}>$ {price}</CustomText>
        <View style={styles.descriptionContainer}>
          <View style={styles.descRow}>
            <View style={styles.dot} />
            <CustomText style={styles.desc}>
              Professional cleaning for every room in your home.
            </CustomText>
          </View>
          <View style={styles.descRow}>
            <View style={styles.dot} />
            <CustomText style={styles.desc}>
              Safe, hygienic, and thorough service by trained experts.
            </CustomText>
          </View>
        </View>
      </View>
      {!showDetails ? (
        <View style={styles.imageContainer}>
          <Image source={serviceImage} style={styles.image} />
          {!count ? (
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
          )}
        </View>
      ) : (
        <TouchableOpacity activeOpacity={0.8} style={styles.button} >
          <CustomText style={styles.buttonText}>View Details</CustomText>
        </TouchableOpacity>
      )}
    </View>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    title: {
      fontSize: FontSizes._18,
      fontFamily: FontFamily.interMedium,
    },
    ratingTimeStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: Metrics._2,
    },
    detailsContainer: {
      width: '50%',
    },
    descRow: {
      flexDirection: 'row',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    reviewLabel: {
      fontSize: Metrics._12,
      color: theme.black8,
      marginLeft: Metrics._4,
    },
    distanceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: Metrics._10,
    },
    price: {
      color: theme.primary,
      fontFamily: FontFamily.interSemiBold,
    },
    desc: {
      fontSize: FontSizes._12,
      color: theme.black8,
      marginBottom: Metrics._5,
    },
    dot: {
      height: Metrics._4,
      width: Metrics._4,
      backgroundColor: theme.grey11,
      borderRadius: Metrics._2,
      marginRight: Metrics._6,
      top: Metrics._6,
    },
    descriptionContainer: {
      marginTop: Metrics._10,
    },
    container: {
      borderBottomWidth: Metrics._1,
      borderColor: theme.border7,
      paddingBottom: Metrics._14,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: Metrics._12,
    },
    imageContainer: {
      width: '40%',
      alignItems: 'center',
    },
    image: {
      height: Metrics._115,
      width: Metrics._130,
      borderRadius: Metrics._8,
      top: Metrics._4,
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
      bottom: Metrics._4,
    },
    text: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._12,
      color: theme.primary,
    },
    countContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: Metrics._80,
      height: Metrics._36,
    },
    countChangeButton: {
      width: Metrics._20,
      height: Metrics._20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    plusButton: {
      borderRadius: Metrics._4,
      backgroundColor: theme.primaryLight,
    },
    button: {
        width: Metrics._110,
        height: Metrics._40,
        borderRadius: Metrics._8,
        borderWidth: Metrics._1,
        borderColor: theme.border5,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontFamily: FontFamily.interMedium,
        fontSize: FontSizes._12,
        color: theme.primary
    }
  });

export default ServicesItem;
