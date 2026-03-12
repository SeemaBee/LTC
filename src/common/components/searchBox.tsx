import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { LightTheme } from 'theme/colors';
import { useTheme } from 'common/helperFunctions';
import { Metrics } from 'theme/metrics';
import { CircleX, Search } from 'lucide-react-native';
import { FontSizes } from 'theme/typography';

type Props = {
  onChange: (text: string) => void;
  val: string;
};

const SearchBox = ({ onChange, val }: Props) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [showClose, setShowClose] = useState(false);

  const searchRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      {!showClose && <Search size={Metrics._15} />}
      <TextInput
        ref={searchRef}
        placeholder="Search"
        value={val}
        onFocus={() => setShowClose(true)}
        onChangeText={text => onChange(text)}
        returnKeyType="search"
        returnKeyLabel="Search"
        autoCapitalize="sentences"
        autoCorrect={false}
        autoComplete="off"
        style={styles.input}
        onBlur={() => {
          Keyboard.dismiss();
          setShowClose(false);
        }}
        placeholderTextColor={theme.grey9}
      />
      {showClose && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => searchRef.current?.clear()}
        >
          <CircleX />
        </TouchableOpacity>
      )}
    </View>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: Metrics._50,
      borderRadius: Metrics._8,
      borderWidth: Metrics._1,
      borderColor: theme.border1,
      marginVertical: Metrics._16,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Metrics._15,
      gap: Metrics._6,
    },
    input: {
      flex: 1,
      fontSize: FontSizes._12,
    },
  });

export default SearchBox;
