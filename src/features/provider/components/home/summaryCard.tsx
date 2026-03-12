import CustomText from 'common/components/text';
import { useTheme } from 'common/helperFunctions';
import { StyleSheet, View } from 'react-native';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';

interface Props {
  count: number;
  Icon: React.ComponentType<{ width: number; height: number }>;
  title: string;
  subTitle: string;
}

const SummaryCard: React.FC<Props> = ({ count, Icon, title, subTitle }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.card}>
      <CustomText style={styles.count}>{count}</CustomText>
      <View style={styles.iconAndTitle}>
        <Icon width={Metrics._20} height={Metrics._20} />
        <View>
          <CustomText>{title}</CustomText>
          <CustomText style={styles.cardSubTitle}>{subTitle}</CustomText>
        </View>
      </View>
    </View>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    card: {
      width: '48%',
      height: Metrics._100,
      borderRadius: Metrics._8,
      borderWidth: Metrics._1,
      padding: Metrics._16,
      borderColor: theme.border4,
      justifyContent: 'center',
    },
    count: {
      fontFamily: FontFamily.interBold,
      fontSize: FontSizes._24,
      color: theme.primary,
      marginBottom: Metrics._12,
    },
    iconAndTitle: {
      flexDirection: 'row',
      gap: Metrics._12,
    },
    cardSubTitle: {
      fontSize: FontSizes._10,
      color: theme.grey5,
      marginTop: Metrics._2,
    },
  });

export default SummaryCard;
