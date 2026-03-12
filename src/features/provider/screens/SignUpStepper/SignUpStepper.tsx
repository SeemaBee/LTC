import React, { useRef, useState } from 'react';
import { Platform, View } from 'react-native';
import { Formik, FormikErrors, FormikProps, FormikTouched } from 'formik';
import Button from 'common/components/button';
import CustomText from 'common/components/text';
import { ProviderAppNavigationProp } from 'features/provider/types/providerNavigationTypes';
import Header from 'common/components/header';
import getStyles from './SignUpStepper.styles';
import {
  Step1Schema,
  Step2Schema,
  Step3Schema,
} from 'features/provider/schemas/signUpSchema';
import {
  BankAccountType,
  RegistrationFormData,
} from 'features/provider/types/registrationForm';
import Loader from 'common/components/loader';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { CommonNavigationProp } from 'common/types/navigationTypes';
import StepOne from 'features/provider/components/signUp/step1';
import StepTwo from 'features/provider/components/signUp/step2';
import StepThree from 'features/provider/components/signUp/step3';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAuth } from 'common/redux/features/common/authSlice';
import {
  saveBankDetails,
  saveProviderDocuments,
} from 'features/provider/apis/providerAuthApis';

interface SignUpProps {
  navigation: ProviderAppNavigationProp<'SignupStepper'>;
}

const initialValues = {
  serviceCategory: '',
  experience: '',
  languages: [],
  price: 0,
  identity_type_id: 0,
  id_front: null,
  id_back: null,
  profilePhoto: null,
  certificate: null,
  accountHolderName: '',
  bankName: '',
  institutionNumber: '',
  transitNumber: '',
  accountNumber: '',
  accountType: 'chequing' as BankAccountType,
};

const SignupStepper: React.FC<SignUpProps> = ({ navigation }) => {
  const styles = getStyles();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const formikRef = useRef<FormikProps<RegistrationFormData>>(null);
  const dispatch = useDispatch();

  const getSchema = () => {
    switch (step) {
      case 1:
        return Step1Schema;
      case 2:
        return Step2Schema;
      default:
        return Step3Schema;
    }
  };

  const appendFile = (formData: FormData, key: string, file: any) => {
    if (!file?.uri) return;

    formData.append(key, {
      uri: Platform.OS === 'ios' ? file.uri.replace('file://', '') : file.uri,
      name: file.fileName || `image_${Date.now()}.jpg`,
      type: file.type || 'image/jpeg',
    });
  };

  const getData = () => {
    const values = formikRef.current?.values;
    switch (step) {
      case 1:
        return {
          service_category_id: Number(values?.serviceCategory) ?? 0,
          price: values?.price ?? 0,
          experience: Number(values?.experience) ?? 0,
          languages: values?.languages ?? [],
        };
      case 2:
        const formData = new FormData();
        formData.append('identity_type_id', values?.identity_type_id);
        appendFile(formData, 'id_front', values?.id_front);
        appendFile(formData, 'id_back', values?.id_back);
        if (values?.certificate) {
          appendFile(formData, 'certificate', values?.certificate);
        }
        appendFile(formData, 'profile_photo', values?.profilePhoto);
        return formData;
      default:
        return {
          accountHolderName: values?.accountHolderName,
          bankName: values?.bankName,
          institutionNumber: values?.institutionNumber,
          transitNumber: values?.transitNumber,
          accountNumber: values?.accountNumber,
          accountType: values?.accountType,
        };
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const requestData = getData();
      let response;
      if (step === 1) {
        // response = await saveProfessionalDetails(requestData as object);

        // remove these two lines when implementation for step 1 is clear.
        setStep(prevState => prevState + 1);
        return;
      } else if (step === 2) {
        setStep(prevState => prevState + 1);
        response = await saveProviderDocuments(requestData as FormData);
      } else {
        response = await saveBankDetails(requestData);
      }
      return;
      if (response.success) {
        Toast.show({
          type: 'success',
          text1: 'JackLap',
          text2: 'User data saved successfully.',
        });
        if (step === 3) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'ProviderBottomTabs' }],
          });
        } else {
          setStep(prevState => prevState + 1);
        }
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

  const clearStorageAndRedux = async () => {
    await AsyncStorage.multiRemove(['token', 'role', 'loggedIn', 'user']);
    dispatch(
      setAuth({
        token: '',
        role: 'provider',
        loggedIn: false,
        user: {},
      }),
    );
  };

  const handleBackPress = () => {
    if (step === 1) {
      navigation.getParent<CommonNavigationProp<'ProviderNavigator'>>()?.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
      clearStorageAndRedux();
    } else {
      setStep(step - 1);
    }
  };

  const handlePress = async (
    validateForm: () => Promise<FormikErrors<RegistrationFormData>>,
    setTouched: (
      touched: FormikTouched<RegistrationFormData>,
      shouldValidate?: boolean,
    ) => void,
    values: RegistrationFormData,
  ) => {
    const errors = await validateForm();
    if (Object.keys(errors).length === 0) {
      handleSubmit();
    } else {
      const stepFields = Object.keys(getSchema().fields);
      const touchedFields = stepFields.reduce(
        (acc, field) => ({ ...acc, [field]: true }),
        {},
      );
      setTouched(touchedFields, false);
    }
  };

  return (
    <View style={styles.container}>
      <Header text="Register" onBackPress={() => handleBackPress()} />
      <View style={styles.contentContainer}>
        <CustomText style={styles.subTitle}>
          Create your account to get started quickly and access all features.
        </CustomText>
        <View style={styles.stepperContainer}>
          <View style={styles.stepperRow}>
            {[1, 2, 3].map((item, index) => {
              return (
                <View
                  key={index}
                  style={[styles.step, item <= step ? styles.filledStep : null]}
                />
              );
            })}
          </View>
          <CustomText>{step}/3</CustomText>
        </View>
        <Formik<RegistrationFormData>
          initialValues={initialValues}
          // validationSchema={getSchema}
          onSubmit={handleSubmit}
          innerRef={formikRef}
        >
          {({ validateForm, setTouched, values }) => (
            <>
              {step === 1 ? (
                <StepOne />
              ) : step === 2 ? (
                <StepTwo />
              ) : (
                <StepThree />
              )}
              <Button
                title={step === 3 ? 'Submit' : 'Continue'}
                onPress={() => handlePress(validateForm, setTouched, values)}
              />
            </>
          )}
        </Formik>
      </View>
      {isLoading && <Loader show={isLoading} />}
    </View>
  );
};

export default SignupStepper;
