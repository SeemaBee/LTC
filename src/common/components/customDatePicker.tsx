import { formattedDate, useTheme } from 'common/helperFunctions';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { LightTheme } from 'theme/colors';
import CustomText from './text';
import { CalendarDays } from 'lucide-react-native';
import DatePicker from 'react-native-date-picker';
import { Metrics } from 'theme/metrics';
import { FontSizes } from 'theme/typography';

interface DatePickerProps {
  label: string;
  date: Date | null;
  open: boolean;
  setDate: (date: Date) => void;
  onCancel: () => void;
  openDatePicker: () => void;
  mode?: 'date' | 'time' | 'datetime';
  maxDate?: Date;
  error?: string;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({
  label,
  date,
  open,
  setDate,
  onCancel,
  openDatePicker,
  mode = 'date',
  maxDate,
  error,
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const displayDate = () => {
    if (date) {
      return formattedDate(
        date.getDate(),
        date.getMonth() + 1,
        date.getFullYear(),
      );
    } else {
      return 'Please select date';
    }
  };

  return (
    <>
      <View style={styles.container}>
        <CustomText style={styles.label}>{label}</CustomText>
        <TouchableOpacity style={styles.dateContainer} onPress={openDatePicker}>
          <CustomText style={styles.date}>{displayDate()}</CustomText>
          <CalendarDays size={Metrics._20} color={theme.grey2} />
        </TouchableOpacity>
        {error && <CustomText style={styles.error}>{error}</CustomText>}
      </View>
      {open && (
        <DatePicker
          modal
          open={open}
          date={date || new Date()}
          onConfirm={date => setDate(date)}
          onCancel={onCancel}
          mode={mode}
          maximumDate={maxDate}
        />
      )}
    </>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    container: {
      marginBottom: Metrics._20,
    },
    label: {
      marginBottom: Metrics._12,
      fontSize: FontSizes._16,
      color: theme.black2,
    },
    dateContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: Metrics._1,
      borderRadius: Metrics._8,
      height: Metrics._48,
      paddingVertical: Metrics._4,
      paddingHorizontal: Metrics._16,
      borderColor: theme.border2,
    },
    date: {
      flex: 1,
      fontSize: FontSizes._12,
    },
    error: {
      marginTop: Metrics._4,
      fontSize: FontSizes._12,
      color: theme.error,
    },
  });

export default CustomDatePicker;
