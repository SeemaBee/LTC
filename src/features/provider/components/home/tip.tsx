import CustomText from 'common/components/text';
import { useTheme } from 'common/helperFunctions';
import { Check } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';

interface Props {
  text: string;
}

const Tip: React.FC<Props> = ({ text }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.row}>
      <Check color={theme.primary} size={Metrics._20} />
      <CustomText style={styles.tipText}>{text}</CustomText>
    </View>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: Metrics._4,
      marginBottom: Metrics._10,
    },
    tipText: {
      fontSize: FontSizes._12,
      fontFamily: FontFamily.interLight,
    },
  });

export default Tip;