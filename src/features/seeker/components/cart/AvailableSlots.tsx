import CustomText from 'common/components/text';
import { useTheme } from 'common/helperFunctions';
import { CircleX } from 'lucide-react-native';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';

type Props = {
  show: boolean;
  handleClose: () => void;
};

const AvailableSlots: React.FC<Props> = ({ show, handleClose }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const generateAllDatesForThisMonth = () => {
    const today = moment().startOf('day');
    const endOfMonth = moment().endOf('month');

    const dates = [];
    const current = today.clone();

    while (current.isSameOrBefore(endOfMonth, 'day')) {
      dates.push(current.format('D MMM, YYYY'));
      current.add(1, 'day');
    }

    return dates;
  };

  const generateReadableTimeRanges = (
    startHour: number,
    endHour: number,
    slotDurationInHours = 1,
  ): string[] => {
    const ranges: string[] = [];

    let current = moment().startOf('day').hour(startHour);
    const end = moment().startOf('day').hour(endHour);

    while (current.isBefore(end)) {
      const next = current.clone().add(slotDurationInHours, 'hour');

      ranges.push(`${current.format('hA')} to ${next.format('hA')}`);

      current = next;
    }

    return ranges;
  };

  const dates = useMemo(generateAllDatesForThisMonth, []);
  const timeRanges = useMemo(() => generateReadableTimeRanges(9, 17), []);

  useEffect(() => {
    if (dates.length) setSelectedDate(dates[0]);
  }, [dates]);

  return (
    <ReactNativeModal
      isVisible={show}
      onBackButtonPress={handleClose}
      onBackdropPress={handleClose}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.closeButton}
        onPress={handleClose}
        hitSlop={Metrics._10}
        activeOpacity={0.8}
      >
        <CircleX />
      </TouchableOpacity>
      <CustomText style={styles.title}>Select Date</CustomText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dateScroll}
        style={styles.scrollView}
      >
        {dates.map((date, index) => {
          const isActive = selectedDate === date;
          const day = moment(date, 'D MMM, YYYY').format('DD');
          const month = moment(date, 'D MMM, YYYY').format('MMM');

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.85}
              onPress={() => setSelectedDate(date)}
              style={[styles.dateCard, isActive && styles.activeDateCard]}
            >
              <CustomText
                style={[styles.dayText, isActive && styles.activeDateText]}
              >
                {day}
              </CustomText>
              <CustomText
                style={[styles.monthText, isActive && styles.activeDateText]}
              >
                {month}
              </CustomText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <CustomText style={styles.secondaryTitle}>
        Choose available time slot
      </CustomText>
      <View style={styles.chipContainer}>
        {timeRanges.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.chip,
              selectedTime === time && styles.selectedTimeContainer,
            ]}
            activeOpacity={0.8}
            onPress={() => setSelectedTime(time)}
          >
            <CustomText
              style={[
                styles.time,
                selectedTime === time && styles.selectedTime,
              ]}
            >
              {time}
            </CustomText>
          </TouchableOpacity>
        ))}
      </View>
    </ReactNativeModal>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      backgroundColor: theme.white,
      margin: 0,
      padding: Metrics._16,
    },
    scrollView: {
      maxHeight: Metrics._100,
    },
    title: {
      textAlign: 'center',
      fontSize: FontSizes._16,
      fontFamily: FontFamily.interMedium,
      marginBottom: Metrics._20,
    },
    chipContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: Metrics._16,
    },
    chip: {
      borderWidth: Metrics._1,
      borderColor: theme.primary,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: Metrics._12,
      paddingVertical: Metrics._6,
      borderRadius: Metrics._14,
    },
    time: {
      color: theme.primary,
      fontSize: FontSizes._12,
    },
    selectedTimeContainer: {
      backgroundColor: theme.primary,
    },
    selectedTime: {
      color: theme.white,
    },
    closeButton: {
      position: 'absolute',
      top: Metrics._16,
      right: Metrics._16,
      zIndex: 999,
    },
    dateScroll: {
      paddingVertical: Metrics._12,
      paddingRight: Metrics._16,
      marginBottom: Metrics._20,
    },

    activeDateText: {
      color: theme.white,
    },

    dateCard: {
      width: Metrics._50,
      height: Metrics._70,
      borderRadius: Metrics._14,
      borderWidth: Metrics._1,
      borderColor: theme.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: Metrics._12,
      backgroundColor: theme.white,
    },

    activeDateCard: {
      backgroundColor: theme.primary,
    },

    dayText: {
      fontSize: FontSizes._18,
      fontFamily: FontFamily.interMedium,
      color: theme.primary,
    },

    monthText: {
      fontSize: FontSizes._12,
      marginTop: Metrics._4,
      color: theme.primary,
    },
    secondaryTitle: {
      marginBottom: Metrics._16,
      fontSize: FontSizes._16,
      fontFamily: FontFamily.interMedium,
    },
  });

export default AvailableSlots;
