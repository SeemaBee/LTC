import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from 'common/helperFunctions';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { ChevronLeft } from 'lucide-react-native';
import CustomText from './text';
import { FontFamily, FontSizes } from 'theme/typography';

interface HeaderProps {
    text?: string;
    showBackIcon?: boolean;
    onBackPress?: () => void
}

const DashboardHeader = ({ text, showBackIcon = true, onBackPress }: HeaderProps) => {
    const theme = useTheme();
    const styles = getStyles(theme);
    return (
        <View style={styles.headerRow}>
            {showBackIcon && (
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => onBackPress && onBackPress()}
                    style={styles.backIcon}
                >
                    <ChevronLeft size={Metrics._20} color={theme.black1} />
                </TouchableOpacity>
            )}
            {text && <CustomText style={styles.title}>{text}</CustomText>}
        </View>
    )
}

const getStyles = (theme: typeof LightTheme) =>
    StyleSheet.create({
        headerRow: {
            width: '100%',
            height: Metrics._60,
            marginTop: Metrics._8,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: Metrics._16,
        },
        title: {
            fontSize: FontSizes._18,
            fontFamily: FontFamily.interMedium,
            color: theme.black1,
        },
        backIcon: {
            marginRight: Metrics._8,
        },
    })

export default DashboardHeader