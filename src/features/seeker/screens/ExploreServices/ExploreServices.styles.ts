import { useTheme } from "common/helperFunctions";
import { StyleSheet } from "react-native";
import { Metrics } from "theme/metrics";

const getStyles = () => {
    const theme = useTheme();
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.white
        },
        subcontainer: {
            padding: Metrics._16
        }
    })
}

export default getStyles;