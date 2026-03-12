import Container from 'common/components/container';
import CustomDropDownPicker from 'common/components/customDropDownPicker';
import Input from 'common/components/input';
import CustomText from 'common/components/text';
import { useTheme } from 'common/helperFunctions';
import { RegistrationFormData } from 'features/provider/types/registrationForm';
import { useFormikContext } from 'formik';
import { useRef, useState } from 'react';
import { Keyboard, StyleSheet, TextInput } from 'react-native';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';

const StepThree = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const bankNameRef = useRef<TextInput>(null);
  const institutionNumberRef = useRef<TextInput>(null);
  const transitNumberRef = useRef<TextInput>(null);
  const accountNumberRef = useRef<TextInput>(null);

  const [dropwdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    Keyboard.dismiss();
    setDropdownOpen(!dropwdownOpen);
  }

  const { values, errors, touched, handleChange, setFieldValue } =
    useFormikContext<RegistrationFormData>();

  return (
    <Container>
      <CustomText style={styles.title}>Bank Details</CustomText>
      <Input
        label="Account Holder Name"
        placeholder="Enter account holder name"
        onChangeText={handleChange('accountHolderName')}
        value={values.accountHolderName}
        returnKeyType="next"
        submitBehavior="submit"
        onSubmitEditing={() => bankNameRef.current?.focus()}
        error={touched.accountHolderName ? errors.accountHolderName : undefined}
        autoCapitalize="words"
      />

      <Input
        ref={bankNameRef}
        label="Bank Name"
        placeholder="Enter bank name"
        onChangeText={handleChange('bankName')}
        value={values.bankName}
        returnKeyType="next"
        submitBehavior="submit"
        onSubmitEditing={() => institutionNumberRef.current?.focus()}
        error={touched.bankName ? errors.bankName : undefined}
        autoCapitalize="words"
      />

      <CustomDropDownPicker
        label='Account Type'
        dropdownOpen={dropwdownOpen}
        value={values.accountType}
        items={[
          { label: 'Chequing', value: 'chequing' },
          { label: 'Savings', value: 'savings' },
        ]}
        setDropdownOpen={handleDropdownOpen}
        setValue={callback => {
          const newValue =
            typeof callback === 'function'
              ? callback(values.accountType)
              : callback;
          setFieldValue('accountType', newValue);
        }}
        error={touched.accountType ? errors.accountType : undefined}
      />

      <Input
        ref={institutionNumberRef}
        label="Institution Number"
        placeholder="Enter institution number"
        onChangeText={handleChange('institutionNumber')}
        value={values.institutionNumber}
        keyboardType="number-pad"
        returnKeyType="next"
        submitBehavior="submit"
        onSubmitEditing={() => transitNumberRef.current?.focus()}
        error={touched.institutionNumber ? errors.institutionNumber : undefined}
      />

      <Input
        ref={transitNumberRef}
        label="Transit Number"
        placeholder="Enter transit number"
        onChangeText={handleChange('transitNumber')}
        value={values.transitNumber}
        keyboardType="number-pad"
        returnKeyType="next"
        submitBehavior="submit"
        onSubmitEditing={() => accountNumberRef.current?.focus()}
        error={touched.transitNumber ? errors.transitNumber : undefined}
      />

      <Input
        ref={accountNumberRef}
        label="Account Number"
        placeholder="Enter account number"
        onChangeText={handleChange('accountNumber')}
        value={values.accountNumber}
        keyboardType="number-pad"
        returnKeyType="done"
        submitBehavior="submit"
        error={touched.accountNumber ? errors.accountNumber : undefined}
      />
    </Container>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    title: {
      fontFamily: FontFamily.interMedium,
      fontSize: FontSizes._20,
      marginBottom: Metrics._18,
    },
  });

export default StepThree;
