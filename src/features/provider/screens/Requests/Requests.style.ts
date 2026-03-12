import { useTheme } from "common/helperFunctions"
import { StyleSheet } from "react-native";
import { Metrics } from "theme/metrics";

const getStyles = () => {
    const theme = useTheme();

    return StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: theme.background,
        },
        subContainer:{
            flex:1,
            padding: Metrics._16,
        },
        row:{
            flexDirection:'row',
        },
        tab:{
            width: Metrics._100,
            alignItems:'center',
            justifyContent:'center',
            paddingVertical: Metrics._10
        },
        selectedTab:{
            borderBottomWidth: Metrics._1,
            borderColor: theme.primary,
        },
        contentStyle:{
            paddingTop: Metrics._16,
            gap: Metrics._24,
        }
    })
}

export default getStyles;