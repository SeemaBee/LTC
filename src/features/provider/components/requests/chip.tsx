import CustomText from 'common/components/text';
import { useTheme } from 'common/helperFunctions';
import { StyleSheet, View } from 'react-native';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { FontSizes } from 'theme/typography';

interface Props {
  Icon?: React.ComponentType<{ width: number; height: number }>;
  text: string;
  bgColor?: string;
}

const Chip: React.FC<Props> = ({ text, Icon, bgColor }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const backgroundColor = bgColor ? bgColor : theme.white;
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {Icon && (
        <View style={styles.iconContainer}>
          <Icon width={Metrics._12} height={Metrics._12} />
        </View>
      )}
      <CustomText style={styles.text}>{text}</CustomText>
    </View>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: Metrics._8,
      paddingHorizontal: Metrics._12,
      height: Metrics._38,
      borderRadius: Metrics._78,
      gap: Metrics._10,
    },
    text: {
      fontSize: FontSizes._12,
    },
    iconContainer: {
      width: Metrics._18,
      height: Metrics._18,
      padding: Metrics._4,
      borderRadius: Metrics._100,
      backgroundColor: theme.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Chip;
