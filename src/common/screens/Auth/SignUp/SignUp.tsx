import { Keyboard, TextInput, View } from 'react-native';
import getStyles from './SignUp.styles';
import Header from 'common/components/header';
import CustomText from 'common/components/text';
import { Formik, FormikHelpers } from 'formik';
import Input from 'common/components/input';
import CustomDropDownPicker from 'common/components/customDropDownPicker';
import { genderOptions } from 'common/constants';
import CustomDatePicker from 'common/components/customDatePicker';
import { useRef, useState } from 'react';
import { get18YearsAgo } from 'common/helperFunctions';
import Button from 'common/components/button';
import Container from 'common/components/container';
import Loader from 'common/components/loader';
import { RegisterUser } from 'features/provider/types/commonTypes';
import Toast from 'react-native-toast-message';
import moment from 'moment';
import {
  ProviderSignupSchema,
  SeekerSignupSchema,
} from 'common/schemas/commonSchemas';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'common/redux/store';
import { CommonNavigationProp } from 'common/types/navigationTypes';
import { registerUser } from 'api/authApis';
import { setAuth } from 'common/redux/features/common/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  navigation: CommonNavigationProp<'SignUp'>;
};

const initialValues: RegisterUser = {
  name: '',
  gender: '',
  dob: null,
  email: '',
  phone: '',
  password: '',
};

const Signup: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) => state.auth.role);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const genderRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const [open, setOpen] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSubmit = async (
    values: RegisterUser,
    actions: FormikHelpers<RegisterUser>,
  ) => {
    Keyboard.dismiss();
    navigation.navigate('VerifyOtp', { email: values.email, from: role });
    return;
    try {
      let request: any = {
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
        role: role,
      };

      if (role == 'provider') {
        request['dob'] = moment(values.dob).format('YYYY-MM-DD');
        request['gender'] = values.gender;
      }

      const response = await registerUser(request);
      if (response.success) {
        actions.resetForm();
        Toast.show({
          type: 'success',
          text1: 'JackLap',
          text2: response?.message ?? 'User registration successful.',
        });
        await AsyncStorage.multiSet([
          ['role', response.user.role],
          ['userData', JSON.stringify(response.user)],
        ]);
        dispatch(
          setAuth({
            loggedIn: false,
            token: "",
            role: response.user.role,
            user: response.user,
          }),
        );
        navigation.navigate('VerifyOtp', { email: values.email, from: role });
      }
    } catch (error: any) {
      const errorMessage = error?.message || 'Something went wrong.';
      Toast.show({
        type: 'error',
        text1: 'JackLap',
        text2: errorMessage,
      });
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header text="Register" onBackPress={() => handleBackPress()} />
      <View style={styles.contentContainer}>
        <Container>
          <CustomText style={styles.subTitle}>
            Create your account to get started quickly and access all features.
          </CustomText>
          <Formik
            initialValues={initialValues}
            validationSchema={
              role === 'provider' ? ProviderSignupSchema : SeekerSignupSchema
            }
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              setFieldValue,
              isSubmitting,
            }) => (
              <>
                <CustomText style={styles.formHeader}>Basic Details</CustomText>
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  onChangeText={handleChange('name')}
                  value={values.name}
                  returnKeyType="next"
                  error={touched.name ? errors.name : undefined}
                  onSubmitEditing={() => genderRef?.current?.focus()}
                  submitBehavior="submit"
                  autoCapitalize="words"
                />
                {role === 'provider' && (
                  <>
                    <CustomDropDownPicker
                      label="Gender"
                      dropdownOpen={dropdownOpen}
                      placeholder="Select Gender"
                      value={values.gender ?? 'male'}
                      items={genderOptions}
                      setDropdownOpen={() => setDropdownOpen(!dropdownOpen)}
                      error={touched.gender ? errors.gender : undefined}
                      setValue={callback => {
                        const newValue =
                          typeof callback === 'function'
                            ? callback(values.gender)
                            : callback;
                        setFieldValue('gender', newValue);
                      }}
                    />

                    <CustomDatePicker
                      label="DOB"
                      date={values.dob ?? new Date()}
                      open={open}
                      setDate={(date: Date) => {
                        setOpen(false);
                        setFieldValue('dob', date);
                      }}
                      onCancel={() => setOpen(false)}
                      openDatePicker={() => {
                        setDropdownOpen(false);
                        setOpen(true);
                      }}
                      maxDate={get18YearsAgo()}
                      error={touched.dob ? errors.dob : undefined}
                    />
                  </>
                )}

                <Input
                  ref={emailRef}
                  label="Email"
                  placeholder="Enter your email"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  returnKeyType="next"
                  error={touched.email ? errors.email : undefined}
                  onSubmitEditing={() => phoneRef?.current?.focus()}
                  submitBehavior="submit"
                />

                <Input
                  ref={phoneRef}
                  label="Phone"
                  placeholder="Enter your phone number"
                  onChangeText={handleChange('phone')}
                  value={values.phone}
                  returnKeyType="next"
                  error={touched.phone ? errors.phone : undefined}
                  keyboardType="phone-pad"
                  maxLength={10}
                  onSubmitEditing={() => passwordRef?.current?.focus()}
                  submitBehavior="submit"
                />

                <Input
                  ref={passwordRef}
                  label="Password"
                  autoCapitalize="none"
                  secureTextEntry={true}
                  placeholder="Enter your password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  returnKeyType="done"
                  error={touched.password ? errors.password : undefined}
                  onSubmitEditing={handleSubmit}
                />
                <Button title={'Submit'} onPress={handleSubmit} />
                {isSubmitting && <Loader show={isSubmitting} />}
              </>
            )}
          </Formik>
        </Container>
      </View>
    </View>
  );
};

export default Signup;
