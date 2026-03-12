import CustomText from 'common/components/text';
import { Platform, StyleSheet, View } from 'react-native';

const EmptyChat = () => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.text}>No messages here yet</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...(Platform.OS === 'android'
      ? { transform: [{ rotate: '180deg' }] }
      : { transform: [{ scaleY: -1 }] }),
  },
});

export default EmptyChat;
