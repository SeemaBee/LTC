import { useTheme } from 'common/helperFunctions';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Bubble, BubbleProps, IMessage } from 'react-native-gifted-chat';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';

const renderBubble = (props: BubbleProps<IMessage>) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: styles.bubbleWrapperRight,
        left: styles.bubbleWrapperLeft,
      }}
      textStyle={{
        right: styles.bubbleText,
        left: styles.bubbleText,
      }}
      renderTime={() => null}
    />
  );
};

const baseWrapper = {
  paddingVertical: Metrics._10,
  borderTopLeftRadius: Metrics._12,
  borderTopRightRadius: Metrics._12,
  borderBottomLeftRadius: Metrics._12,
  borderBottomRightRadius: Metrics._12,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    bubbleWrapperRight: {
      ...baseWrapper,
      backgroundColor: theme.grey16,
    },
    bubbleWrapperLeft: {
      ...baseWrapper,
      backgroundColor: theme.primaryLight2,
    },

    bubbleText: {
      color: theme.black1,
      fontFamily: FontFamily.interRegular,
      fontSize: Metrics._12,
    },
  });

export default renderBubble;
