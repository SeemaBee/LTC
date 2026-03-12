import { Send } from 'lucide-react-native';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { memo, useRef } from 'react';
import { Metrics } from 'theme/metrics';
import { useTheme } from 'common/helperFunctions';
import { LightTheme } from 'theme/colors';
import { FontSizes } from 'theme/typography';

type MessageBoxProps = {
  text?: string;
  textInputProps?: {
    onChangeText?: (text: string) => void;
  };
  onSend?: (
    messages: { text: string }[],
    shouldResetInputToolbar: boolean,
  ) => void;
};

const MessageBox = ({ text, textInputProps, onSend }: MessageBoxProps) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const inputRef = useRef<TextInput>(null);
  const handleSend = () => {
    if (text?.trim() && onSend) {
      onSend([{ text: text.trim() }], true);
      textInputProps?.onChangeText?.('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        ref={inputRef}
        value={text}
        onChangeText={textInputProps?.onChangeText}
        placeholder="Type message here..."
        style={styles.input}
        multiline
        submitBehavior="blurAndSubmit"
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.sendButtonBox}
        onPress={handleSend}
      >
        <Send color={theme.white} size={Metrics._20} />
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    inputContainer: {
      width: '100%',
      height: Metrics._60,
      borderRadius: Metrics._30,
      borderWidth: Metrics._1,
      borderColor: theme.border1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Metrics._10,
      backgroundColor: theme.white,
      marginBottom: 0,
    },
    input: {
      flex: 1,
      fontSize: FontSizes._14,
    },
    sendButtonBox: {
      width: Metrics._40,
      height: Metrics._40,
      borderRadius: Metrics._20,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default memo(MessageBox);
