import { useTheme } from 'common/helperFunctions';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';
import CustomText from './text';
import DropDownPicker, {
  ItemType,
  RenderListItemPropsInterface,
} from 'react-native-dropdown-picker';

type ServiceItem = ItemType<string> & { price?: number };

interface Props {
  label?: string;
  dropdownOpen: boolean;
  value: string;
  placeholder?: string;
  items: ServiceItem[];
  setDropdownOpen: () => void;
  error?: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  containerStyle?: StyleProp<ViewStyle>;
}

const renderItem =
  (
    setValue: (cb: any) => void,
    setDropdownOpen: (open: boolean) => void,
  ) =>
  (
    item: RenderListItemPropsInterface<string> & { item: ServiceItem },
  ) => {
    const theme = useTheme();
    const styles = getStyles(theme);

    return (
      <TouchableOpacity
        style={styles.dropdownItem}
        activeOpacity={0.8}
        onPress={() => {
          setValue(() => item.item.value);
          setDropdownOpen(false);
        }}
      >
        <CustomText style={styles.label}>{item.item.label}</CustomText>
        {typeof item.item.price === 'number' && (
          <CustomText style={styles.price}>${item.item.price}</CustomText>
        )}
      </TouchableOpacity>
    );
  };

const CustomDropDownPicker: React.FC<Props> = ({
  label,
  dropdownOpen,
  value,
  items,
  setDropdownOpen,
  error,
  placeholder = 'Select an item',
  setValue,
  containerStyle = {},
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      {label && <CustomText style={styles.dropDownLabel}>{label}</CustomText>}
      <DropDownPicker
        open={dropdownOpen}
        value={value}
        items={items}
        setOpen={setDropdownOpen}
        setValue={setValue}
        placeholder={placeholder}
        listMode="SCROLLVIEW"
        style={styles.pickerStyle}
        placeholderStyle={styles.labelStyle}
        dropDownContainerStyle={styles.dropDownContainer}
        listItemLabelStyle={styles.listItemLabel}
        containerStyle={containerStyle}
        renderListItem={renderItem(setValue, setDropdownOpen)}
        itemSeparator
        itemSeparatorStyle={styles.itemSeparator}
      />
      {error && <CustomText style={styles.error}>{error}</CustomText>}
    </View>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    container: {
      marginBottom: Metrics._20,
    },
    dropDownLabel: {
      marginBottom: Metrics._12,
      fontSize: FontSizes._16,
      color: theme.black2,
    },
    error: {
      marginTop: Metrics._4,
      fontSize: FontSizes._12,
      color: theme.error,
    },
    pickerStyle: {
      borderWidth: Metrics._1,
      height: Metrics._48,
      borderColor: theme.border2,
      paddingHorizontal: Metrics._16,
      borderRadius: Metrics._8,
    },
    labelStyle: {
      fontSize: FontSizes._12,
      fontFamily: FontFamily.interRegular,
    },
    arrowIcon: {
      color: theme.border2,
    },
    dropDownContainer: {
      borderTopWidth: 0,
      borderColor: theme.border2,
    },
    listItemLabel: {
      fontSize: FontSizes._12,
      color: theme.black2,
      fontFamily: FontFamily.interRegular,
    },
    label: {
      fontSize: FontSizes._12,
      color: theme.black7,
    },
    price: {
      fontSize: FontSizes._12,
    },
    dropdownItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: Metrics._22,
      paddingVertical: Metrics._10,
    },
    itemSeparator: {
      backgroundColor: theme.grey9,
      height: Metrics._1,
    },
  });

export default CustomDropDownPicker;