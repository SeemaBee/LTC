import { View, Keyboard, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import getStyles from './VerifyOtp.styles';
import CustomText from 'common/components/text';
import Header from 'common/components/header';
import Container from 'common/components/container';
import Button from 'common/components/button';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import Toast from 'react-native-toast-message';
import OTPInput from 'common/components/otpInput';
import * as Yup from 'yup';
import Loader from 'common/components/loader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'common/redux/store';
import {
  CommonNavigationProp,
  CommonRouteProp,
} from 'common/types/navigationTypes';
import { resendOtp, verifyOtp } from 'api/authApis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAuth } from 'common/redux/features/common/authSlice';
import { setAuthToken } from 'api/client';

type FormValues = {
  otp: string;
};

interface VerifyOtpProps {
  navigation: CommonNavigationProp<'VerifyOtp'>;
  route: CommonRouteProp<'VerifyOtp'>;
}

const VerifyOtp = ({ navigation, route }: VerifyOtpProps) => {
  const styles = getStyles();
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [showResend, setShowResend] = useState(false);
  const formikRef = useRef<FormikProps<FormValues> | null>(null);
  const { email, from } = route.params;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (secondsLeft > 0) {
      timer = setTimeout(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
    } else {
      setShowResend(true);
    }

    return () => clearTimeout(timer);
  }, [secondsLeft]);

  const handleResend = async () => {
    Keyboard.dismiss();
    setShowResend(false);
    setSecondsLeft(30);
    formikRef.current?.setSubmitting(true);
    try {
      const response = await resendOtp({ email });
      if (response.success) {
        Toast.show({
          type: 'success',
          text1: 'JackLap',
          text2: response?.message ?? 'OTP resent successfully.',
        });
      }
    } catch (error: any) {
      const errorMessage = error?.message || 'Something went wrong.';
      Toast.show({
        type: 'error',
        text1: 'DINKS',
        text2: errorMessage,
      });
    } finally {
      formikRef.current?.setSubmitting(false);
    }
  };

  const handleOtpComplete = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    Keyboard.dismiss();
    navigation.reset({
      index: 0,
      routes: [{ name: 'ProviderNavigator' }],
    });
    return;
    try {
      const response = await verifyOtp({ email, otp: values.otp });
      if (response.success) {
        setAuthToken(response.data.token);
        Toast.show({
          type: 'success',
          text1: 'JackLap',
          text2: response?.message ?? 'OTP verified successfully.',
        });
        if (from === 'provider') {
          await AsyncStorage.multiSet([
            ['token', response.data.token],
            ['role', from],
            ['loggedIn', JSON.stringify(true)],
            ['user', JSON.stringify(user)],
          ]);
          dispatch(
            setAuth({
              token: response.data.token,
              role: from,
              loggedIn: true,
              user: user,
            }),
          );
          navigation.reset({
            index: 0,
            routes: [{ name: 'ProviderNavigator' }],
          });
        } else if (from === 'seeker') {
          await AsyncStorage.multiSet([
            ['token', response.data.token],
            ['role', from],
            ['loggedIn', JSON.stringify(true)],
            ['user', JSON.stringify(user)],
          ]);
          dispatch(
            setAuth({
              token: response.data.token,
              role: from,
              loggedIn: true,
              user: user,
            }),
          );
          navigation.reset({
            index: 0,
            routes: [{ name: 'SeekerNavigator' }],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: 'ResetPassword', params: { email: email } }],
          });
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
      actions.setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        text="Please Check your email"
        onBackPress={() => navigation.goBack()}
      />
      <Container contentStyle={styles.contentContainer}>
        <CustomText style={styles.title}>
          We have sent the code to email
        </CustomText>
        <Formik
          innerRef={formikRef}
          validationSchema={Yup.object({
            otp: Yup.string()
              .required('OTP is required')
              .matches(/^\d{6}$/, 'OTP must be exactly 6 digits'),
          })}
          initialValues={{ otp: '' }}
          onSubmit={handleOtpComplete}
        >
          {({ setFieldValue, handleSubmit, errors, touched, isSubmitting }) => (
            <>
              <OTPInput
                onChange={(text: string) => setFieldValue('otp', text)}
              />
              {touched.otp && errors.otp ? (
                <View style={styles.errorBox}>
                  <CustomText style={styles.error}>{errors.otp}</CustomText>
                </View>
              ) : null}
              {showResend ? (
                <View style={styles.resendBox}>
                  <CustomText style={styles.resendText}>
                    Didn’t receive the code?{' '}
                  </CustomText>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleResend()}
                  >
                    <CustomText style={styles.linkText}>Resend Code</CustomText>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.resendBox}>
                  <CustomText style={styles.resendText}>
                    Resend code in {secondsLeft} Sec...
                  </CustomText>
                </View>
              )}
              <Button title="Verify OTP" onPress={handleSubmit} />
              {isSubmitting && <Loader show={isSubmitting} />}
            </>
          )}
        </Formik>
      </Container>
    </View>
  );
};

export default VerifyOtp;
