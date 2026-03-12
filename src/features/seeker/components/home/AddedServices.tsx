import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from 'common/helperFunctions';
import { LightTheme } from 'theme/colors';
import CustomText from 'common/components/text';
import { FontFamily, FontSizes } from 'theme/typography';
import { Minus, Plus } from 'lucide-react-native';
import { Metrics } from 'theme/metrics';

interface Props {
    title: string;
    price: number;
}

const AddedServices = ({ title, price }: Props) => {
    const theme = useTheme();
    const styles = getStyles(theme);
    const [count, setCount] = useState(1);
    return (
        <View style={styles.container}>
            <CustomText style={styles.title}>{title}</CustomText>
            <View style={styles.row}>
                <View style={[styles.addButton, styles.countContainer]}>
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
                </View>
                <CustomText style={styles.price}>$ {price}</CustomText>
            </View>
        </View>
    )
}

const getStyles = (theme: typeof LightTheme) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: Metrics._5,
            borderBottomWidth: Metrics._1,
            borderColor: theme.border7,
            paddingBottom: Metrics._14,
        },
        title:{
            width:"50%",
        },
        price: {
            fontSize: FontSizes._14,
            color: theme.primary,
            fontFamily: FontFamily.interSemiBold,
            marginLeft: Metrics._12
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
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
            backgroundColor: theme.primaryLight,
        },
    })

export default AddedServices