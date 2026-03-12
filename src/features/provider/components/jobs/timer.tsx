import React, { useRef, useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import CustomText from 'common/components/text';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';
import { useTheme } from 'common/helperFunctions';
import { Step } from 'features/provider/types/commonTypes';

const status = {
  1: 'Start',
  2: 'In Progress',
  3: 'New Service',
  4: 'Service Done',
};

interface Props {
  currentStep: number;
  startTime?: number;
}

const Timer: React.FC<Props> = ({ currentStep, startTime }) => {
  const intervalRef = useRef<number | null>(null);
  const [seconds, setSeconds] = useState(0);

  const theme = useTheme();
  const styles = getStyles(theme);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
  };

  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startTimer = (baseStartTime: number) => {
    stopTimer();

    const update = () => {
      const diff = Math.floor((Date.now() - baseStartTime) / 1000);
      setSeconds(diff);
    };

    update();
    intervalRef.current = setInterval(update, 1000);
  };

  useFocusEffect(
    useCallback(() => {
      if (startTime != null) {
        startTimer(startTime);
      } else {
        const localStart = Date.now();
        startTimer(localStart);
      }

      return () => {
        stopTimer();
      };
    }, [startTime]),
  );

  return (
    <View style={styles.timerContainer}>
      <CustomText style={styles.timer}>
        {formatTime(seconds)}
      </CustomText>

      <CustomText style={styles.status}>
        {status[currentStep as Step]}
      </CustomText>
    </View>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    timerContainer: {
      gap: Metrics._4,
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    timer: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._20,
    },
    status: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._16,
      color: theme.black12,
    },
  });

export default Timer;