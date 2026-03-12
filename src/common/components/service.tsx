import { useTheme } from 'common/helperFunctions';
import { CircleCheck } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import CustomText from './text';

interface Props {
  title: string;
}

const Service: React.FC<Props> = ({ title }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.taskRow}>
      <CircleCheck
        fill={theme.primary}
        stroke={theme.white}
        size={Metrics._24}
      />
      <CustomText style={styles.taskTitle}>{title}</CustomText>
    </View>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    taskRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Metrics._8,
      marginBottom: Metrics._14,
    },
    taskTitle: {
      color: theme.black5,
    },
  });

export default Service;
