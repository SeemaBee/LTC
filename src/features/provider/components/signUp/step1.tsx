import CustomDropDownPicker from 'common/components/customDropDownPicker';
import Input from 'common/components/input';
import CustomText from 'common/components/text';
import { languagesList } from 'common/constants';
import { RegistrationFormData } from 'features/provider/types/registrationForm';
import { useFormikContext } from 'formik';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Keyboard, StyleSheet, TextInput } from 'react-native';
import { Metrics } from 'theme/metrics';
import { FontSizes } from 'theme/typography';
import Container from 'common/components/container';
import { useTheme } from 'common/helperFunctions';
import { LightTheme } from 'theme/colors';
import MultiSelectDropDownPicker from 'common/components/multiSelectDropdownPicker';
import Toast from 'react-native-toast-message';
import { getServiceList } from 'features/provider/apis/providerAuthApis';
import Loader from 'common/components/loader';
import { useDispatch, useSelector } from 'react-redux';
import { setProviderServicesList } from 'common/redux/features/provider/servicesListSlice';
import { RootState } from 'common/redux/store';

const StepOne = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languagesDropdownOpen, setLanguagesDropdownOpen] = useState(false);
  const theme = useTheme();
  const styles = getStyles(theme);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const servicesList = useSelector((state: RootState) => state.servicesList);

  const experienceRef = useRef<TextInput>(null);
  const languages = useRef<TextInput>(null);

  const { values, errors, touched, setFieldValue } =
    useFormikContext<RegistrationFormData>();

  const getServices = async () => {
    setIsLoading(true);
    try {
      const response = await getServiceList();
      if (response.success) {
        Toast.show({
          type: 'success',
          text1: 'JackLap',
          text2: response?.message ?? '',
        });
        dispatch(setProviderServicesList(response?.data ?? []));
      }
    } catch (error: any) {
      const errorMessage = error?.message || 'Something went wrong.';
      Toast.show({
        type: 'error',
        text1: 'JackLap',
        text2: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const selectedSet = useMemo(
    () => new Set(values.languages),
    [values.languages],
  );

  const handleSelectOption = useCallback(
    (value: string) => {
      const next = new Set(selectedSet);

      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }

      setFieldValue('languages', Array.from(next));
    },
    [selectedSet],
  );

  const handleLanguagesDropdownOpen = () => {
    Keyboard.dismiss();
    setLanguagesDropdownOpen(prevState => !prevState);
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <Container>
      <CustomText style={styles.formHeader}>Professional Details</CustomText>
      <CustomDropDownPicker
        label="Service Category"
        dropdownOpen={dropdownOpen}
        placeholder="Select Category"
        value={`${values.serviceCategory}`}
        items={servicesList.map(item => ({
          label: item.name,
          value: `${item.id}`,
          price: item.price,
        }))}
        setDropdownOpen={() => setDropdownOpen(!dropdownOpen)}
        error={touched.serviceCategory ? errors.serviceCategory : undefined}
        setValue={callback => {
          const newValue =
            typeof callback === 'function'
              ? callback(values.serviceCategory)
              : callback;

          setFieldValue('serviceCategory', +newValue);
        }}
      />

      <Input
        ref={experienceRef}
        label="Experience (Years)"
        placeholder="Enter your experience"
        onChangeText={value => setFieldValue('experience', value)}
        value={values.experience}
        returnKeyType="next"
        error={touched.experience ? errors.experience : undefined}
        onSubmitEditing={() => languages?.current?.focus()}
        submitBehavior="submit"
        keyboardType="number-pad"
        maxLength={2}
      />

      <MultiSelectDropDownPicker
        dropdownOpen={languagesDropdownOpen}
        items={languagesList}
        setDropdownOpen={handleLanguagesDropdownOpen}
        selectOption={handleSelectOption}
        values={values.languages}
        searchPlaceholder="Search your language"
        placeholder="Select languages"
        label="Languages Known"
        error={
          touched.languages && typeof errors.languages === 'string'
            ? errors.languages
            : undefined
        }
      />
      {isLoading && <Loader show={isLoading} />}
    </Container>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    formHeader: {
      marginBottom: Metrics._16,
      fontSize: FontSizes._20,
    },
  });

export default StepOne;
