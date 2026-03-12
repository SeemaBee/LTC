import { StyleSheet, View } from 'react-native';
import { IMessage, MessageProps } from 'react-native-gifted-chat';
import CustomText from 'common/components/text';
import { Metrics } from 'theme/metrics';
import { useTheme } from 'common/helperFunctions';
import { LightTheme } from 'theme/colors';
import renderBubble from './Bubble';

const renderMessage = (props: MessageProps<IMessage>) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const isCurrentUser = props.currentMessage.user._id === props.user._id;

  const time = new Date(props.currentMessage.createdAt).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <View
      style={[
        styles.container,
        isCurrentUser ? styles.currentUser : styles.otherUser,
      ]}
    >
      <View style={styles.bubbleAndTimeContainer}>
        {renderBubble(props)}
        <CustomText style={styles.timeText}>{time}</CustomText>
      </View>
    </View>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    container: {
      marginTop: Metrics._4,
    },
    timeText: {
      marginTop: Metrics._2,
      fontSize: Metrics._10,
      color: theme.black12,
      textAlign: 'right',
    },
    bubbleAndTimeContainer: {
      maxWidth: '80%',
    },
    currentUser: {
      alignItems: 'flex-end',
    },
    otherUser: {
      alignItems: 'flex-start',
    },
  });

export default renderMessage;
