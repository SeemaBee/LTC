import { useTheme } from 'common/helperFunctions';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';
import CustomText from './text';
import DropDownPicker, {
  ItemType,
  RenderListItemPropsInterface,
} from 'react-native-dropdown-picker';
import { Check } from 'lucide-react-native';
import { useCallback, useMemo } from 'react';

type MultiItem = ItemType<string>;

interface MultiDropDownProps {
  label?: string;
  dropdownOpen: boolean;
  values: string[];
  placeholder?: string;
  items: MultiItem[];
  setDropdownOpen: () => void;
  error?: string;
  selectOption: (val: string) => void;
  searchPlaceholder?: string;
}

const SelectedChip = ({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.chip}>
      <CustomText style={styles.chipText}>{label}</CustomText>
      <TouchableOpacity onPress={onRemove}>
        <CustomText style={styles.chipClose}>×</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const renderMultiItem =
  (selectedSet: Set<string>, selectOption: (val: string) => void) =>
  (item: RenderListItemPropsInterface<string>) => {
    const value = item.item.value ?? '';
    const isSelected = selectedSet.has(value);
    const theme = useTheme();
    const styles = getStyles(theme);

    return (
      <TouchableOpacity
        style={styles.dropdownItem}
        activeOpacity={0.8}
        onPress={() => selectOption(value)}
      >
        <View style={[styles.checkbox, isSelected && styles.checkboxChecked]}>
          {isSelected && <Check color={theme.white} size={Metrics._14} />}
        </View>

        <CustomText style={styles.label}>{item.item.label}</CustomText>
      </TouchableOpacity>
    );
  };

const MultiSelectDropDownPicker: React.FC<MultiDropDownProps> = ({
  label,
  dropdownOpen,
  values,
  items,
  setDropdownOpen,
  error,
  placeholder = 'Select items',
  searchPlaceholder = '',
  selectOption,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const selectedSet = useMemo(() => new Set(values), [values]);

  const memoizedRenderItem = useCallback(
    renderMultiItem(selectedSet, selectOption),
    [selectedSet, selectOption],
  );

  const itemsMap = useMemo(
    () => Object.fromEntries(items.map(i => [i.value, i.label])),
    [items],
  );

  return (
    <View style={styles.container}>
      {label && <CustomText style={styles.dropDownLabel}>{label}</CustomText>}
      {values.length > 0 && (
        <View style={styles.chipsContainer}>
          {values.map(value => (
            <SelectedChip
              key={value}
              label={itemsMap[value]}
              onRemove={() => selectOption(value)}
            />
          ))}
        </View>
      )}

      <DropDownPicker
        open={dropdownOpen}
        items={items}
        value={values}
        multiple
        setOpen={setDropdownOpen}
        setValue={() => {}}
        placeholder={placeholder}
        listMode="FLATLIST"
        searchable={true}
        scrollViewProps={{}}
        searchPlaceholder={searchPlaceholder}
        style={styles.pickerStyle}
        placeholderStyle={styles.labelStyle}
        dropDownContainerStyle={[
          styles.dropDownContainer,
          dropdownOpen ? styles.minDropdownHeight : {},
        ]}
        containerStyle={dropdownOpen ? styles.containerStyle : {}}
        renderListItem={memoizedRenderItem}
        itemSeparator
        itemSeparatorStyle={styles.itemSeparator}
        flatListProps={{
          keyExtractor: (_, index) => index.toString(),
          initialNumToRender: 20,
          windowSize: 10,
          removeClippedSubviews: true,
          nestedScrollEnabled: true,
        }}
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
      fontFamily: FontFamily.interRegular,
    },

    pickerStyle: {
      borderWidth: Metrics._1,
      height: Metrics._48,
      borderColor: theme.border2,
      paddingHorizontal: Metrics._16,
      borderRadius: Metrics._8,
      backgroundColor: theme.white,
    },

    labelStyle: {
      fontSize: FontSizes._12,
      fontFamily: FontFamily.interRegular,
      color: theme.black5,
    },

    arrowIcon: {
      color: theme.border2,
    },

    dropDownContainer: {
      borderTopWidth: 0,
      borderColor: theme.border2,
      borderRadius: Metrics._8,
      backgroundColor: theme.white,
    },

    containerStyle: {
      minHeight: Metrics._320,
    },

    minDropdownHeight: {
      minHeight: Metrics._340,
    },

    listItemLabel: {
      fontSize: FontSizes._12,
      color: theme.black2,
      fontFamily: FontFamily.interRegular,
    },

    dropdownItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Metrics._22,
      paddingVertical: Metrics._12,
      backgroundColor: theme.white,
      gap: Metrics._8,
    },

    label: {
      fontSize: FontSizes._12,
      color: theme.black7,
      fontFamily: FontFamily.interRegular,
    },

    price: {
      fontSize: FontSizes._12,
      color: theme.black3,
      fontFamily: FontFamily.interMedium,
    },

    selected: {
      fontSize: FontSizes._14,
      color: theme.primary,
      fontFamily: FontFamily.interMedium,
    },

    itemSeparator: {
      backgroundColor: theme.grey9,
      height: Metrics._1,
    },

    checkbox: {
      width: Metrics._20,
      height: Metrics._20,
      borderRadius: Metrics._6,
      backgroundColor: theme.white,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: Metrics._8,
      borderWidth: Metrics._1,
      borderColor: theme.grey8,
    },

    checkboxChecked: {
      borderColor: theme.primary,
      backgroundColor: theme.primary,
    },

    chipsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: Metrics._8,
      marginBottom: Metrics._12,
    },

    chip: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.primaryLight,
      borderRadius: Metrics._16,
      paddingHorizontal: Metrics._12,
      paddingVertical: Metrics._6,
    },

    chipText: {
      fontSize: FontSizes._12,
      color: theme.primary,
      marginRight: Metrics._6,
      fontFamily: FontFamily.interRegular,
    },

    chipClose: {
      fontSize: FontSizes._14,
      color: theme.primary,
      fontFamily: FontFamily.interMedium,
    },
  });

export default MultiSelectDropDownPicker;
