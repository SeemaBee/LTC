import CustomText from "common/components/text";
import { useTheme } from "common/helperFunctions";
import { StyleSheet, TouchableOpacity } from "react-native";
import { LightTheme } from "theme/colors";
import { Metrics } from "theme/metrics";


interface Props {
  Icon: React.ComponentType<{ width: number; height: number }>;
  title: string;
  onClick: () => void;
}

const ProfileOption: React.FC<Props> = ({ Icon, title, onClick }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <TouchableOpacity style={styles.optionContainer} activeOpacity={0.8} onPress={onClick}>
      <Icon width={Metrics._16} height={Metrics._16} />
      <CustomText style={styles.optionName}>{title}</CustomText>
    </TouchableOpacity>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    optionContainer: {
      flexDirection: 'row',
      gap: Metrics._6,
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      paddingBottom: Metrics._12,
      paddingTop: Metrics._14,
      borderBottomWidth: Metrics._1,
      borderColor: theme.border3,
    },
    optionName: {
      color: theme.black4,
    },
  });

export default ProfileOption;