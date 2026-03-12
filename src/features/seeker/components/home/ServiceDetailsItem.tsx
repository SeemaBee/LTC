import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from 'common/helperFunctions';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import CustomText from 'common/components/text';
import { Check, Minus, Plus, Star } from 'lucide-react-native';
import { FontFamily, FontSizes } from 'theme/typography';

interface Props {
    title: string;
    rating: number;
    price: number;
    isSelectionMode?: boolean;
}

const ServiceDetailsItem = ({ title, rating, price, isSelectionMode = true }: Props) => {
    const theme = useTheme();
    const styles = getStyles(theme);
    const [isChecked, setIsChecked] = useState(false);
    const [count, setCount] = useState(1);

    return (
        <View style={styles.card}>
            <View style={styles.checkboxContainer}>
                {isSelectionMode && (
                    <TouchableOpacity
                        style={[styles.checkbox, isChecked && styles.checkboxChecked]}
                        onPress={() => setIsChecked(!isChecked)}
                    >
                        {isChecked && <Check size={Metrics._12} color={theme.white} />}
                    </TouchableOpacity>
                )}
                <View>
                    <CustomText>{title}</CustomText>
                    <View style={styles.cardReviewsContainer}>
                        <Star fill={theme.grey7} stroke={theme.grey7} size={Metrics._14} />
                        <CustomText style={styles.ratings}>{rating} reviews</CustomText>
                    </View>
                    <CustomText style={styles.price}>Starts at ${price}</CustomText>
                    {isChecked && <View style={[styles.addButton, styles.countContainer]}>
                        <TouchableOpacity
                            style={styles.countChangeButton}
                            onPress={() => count !== 1 && setCount(count - 1)}
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
                    </View>}
                </View>
            </View>

        </View>
    )
}

const getStyles = (theme: typeof LightTheme) =>
    StyleSheet.create({
        card: {
            marginTop: Metrics._5
        },
        checkboxContainer: {
            flexDirection: 'row',
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
            top: Metrics._2
        },
        checkboxChecked: {
            backgroundColor: theme.primary,
        },
        cardReviewsContainer: {
            flexDirection: 'row',
            gap: Metrics._8,
            alignItems: 'center',
            marginVertical: Metrics._4
        },
        ratings: {
            color: theme.black8,
            fontSize: FontSizes._12,
        },
        price: {
            fontFamily: FontFamily.interSemiBold,
            fontSize: FontSizes._12,
            color: theme.black9,
            marginBottom: Metrics._6,
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
            backgroundColor: theme.iconButtonBackground,
        },
    });

export default ServiceDetailsItem;