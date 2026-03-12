import { useTheme } from 'common/helperFunctions';
import React from 'react';
import {
  Keyboard,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateScale } from 'react-native-size-matters';
import { LightTheme } from 'theme/colors';

type ContainerProps = {
  children: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
};

const Container: React.FC<ContainerProps> = ({ children, contentStyle }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const handleContainerPress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleContainerPress}>
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.contentContainer, contentStyle]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        extraScrollHeight={moderateScale(120)}
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        nestedScrollEnabled={true}
      >
        {children}
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    contentContainer: {
      flexGrow: 1,
      backgroundColor: theme.white,
    },
  });

export default Container;