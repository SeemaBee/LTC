import { StyleSheet, View } from 'react-native'
import React from 'react'
import CustomText from 'common/components/text';
import { useTheme } from 'common/helperFunctions';
import { LightTheme } from 'theme/colors';
import { FontFamily, FontSizes } from 'theme/typography';
import { Metrics } from 'theme/metrics';
import { Star } from 'lucide-react-native';

interface Props {
    title: string;
    day: string;
    desc: string;
}

const RatingReviewItem = ({ title, day, desc }: Props) => {
    const theme = useTheme();
    const styles = getStyles(theme);
    return (
        <View style={styles.itemContainer}>
            <View style={styles.rowBox}>
                <CustomText style={styles.name}>{title}</CustomText>
                <View style={styles.ratingStrip}>
                    <Star size={Metrics._8} fill={LightTheme.white} stroke={LightTheme.white} />
                    <CustomText style={styles.rating}>5</CustomText>
                </View>
            </View>
            <CustomText style={styles.day}>{day}</CustomText>
            <CustomText style={styles.descText}>{desc}</CustomText>
        </View>
    )
}

const getStyles = (theme: typeof LightTheme) =>
    StyleSheet.create({
        itemContainer: {
            borderBottomWidth: Metrics._1,
            borderColor: theme.border7,
            paddingBottom: Metrics._18,
            marginBottom: Metrics._10,
            paddingTop: Metrics._8
        },
        name: {
            fontSize: FontSizes._16,
            fontFamily: FontFamily.interMedium
        },
        day: {
            fontSize: FontSizes._12,
            fontFamily: theme.grey11,
            marginVertical: Metrics._10
        },
        rowBox: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        descText: {
            fontSize: FontSizes._12,
            fontFamily: theme.grey11
        },
        ratingStrip: {
            backgroundColor: theme.primary,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: Metrics._8,
            paddingVertical: Metrics._4,
            borderRadius: Metrics._2
        },
        rating: {
            fontSize: FontSizes._12,
            color: theme.white,
            marginLeft: Metrics._5
        }
    })

export default RatingReviewItem