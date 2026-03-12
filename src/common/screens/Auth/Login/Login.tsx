import React, { useRef, useState } from 'react';
import { Keyboard, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import Container from 'common/components/container';
import CustomText from 'common/components/text';
import Input from 'common/components/input';
import Button from 'common/components/button';
import getStyles from './Login.styles';
import { CommonNavigationProp } from 'common/types/navigationTypes';
import Header from 'common/components/header';
import { loginApi, resendOtp } from 'api/authApis';
import Toast from 'react-native-toast-message';
import Loader from 'common/components/loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setAuth } from 'common/redux/features/common/authSlice';
import { setAuthToken } from 'api/client';
import { LoginSchema } from 'common/schemas/commonSchemas';

interface LoginProps {
  navigation: CommonNavigationProp<'Login'>;
}

type initialProps = {
  email: string;
  password: string;
};

const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {
  const styles = getStyles();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const passwordRef = useRef<TextInput>(null);

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSignIn = async (
    values: initialProps,
    actions: FormikHelpers<initialProps>,
  ) => {
    Keyboard.dismiss();
    navigation.navigate('SeekerNavigator');
    return
    setIsLoading(true);
    try {
      const response = await loginApi(values.email, values.password);
      const { token, user } = response;
      if (response.success) {
        Toast.show({
          type: 'success',
          text1: 'JackLap',
          text2: 'Login Successful.',
        });
        await AsyncStorage.multiSet([
          ['token', token],
          ['role', user.role],
          ['loggedIn', JSON.stringify(true)],
          ['userData', JSON.stringify(user)],
        ]);
        dispatch(
          setAuth({
            loggedIn: true,
            token: token,
            role: user.role,
            user: user,
          }),
        );
        setAuthToken(token);
        actions.resetForm();
        if (user.email_verified_at === null) {
          await resendOtp({ email: values.email });
          navigation.navigate('VerifyOtp', {
            email: user.email,
            from: user.role,
          });
        } else if (user.role === 'seeker') {
          navigation.reset({
            index: 0,
            routes: [{ name: 'SeekerNavigator' }],
          });
        } else {
          if (user.professionalDetail === 'no' || user.media === 'no') {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'ProviderNavigator',
                  params: {
                    screen: 'SignupStepper',
                    params: { step: user.professionalDetail === 'no' ? 1 : 2 },
                  },
                },
              ],
            });
          } else {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'ProviderNavigator',
                  params: {
                    screen: 'ProviderBottomTabs',
                  },
                },
              ],
            });
          }
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

  return (
    <View style={styles.container}>
      <Header text="Login" showBackIcon={false} />
      <View style={styles.contentContainer}>
        <CustomText style={styles.subTitle}>
          Sign in to connect, collaborate, and grow.
        </CustomText>
        <Formik
          initialValues={initialValues}
          // validationSchema={LoginSchema}
          onSubmit={(values, actions) => handleSignIn(values, actions)}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <Container>
              <Input
                label="E-mail"
                placeholder="Enter your email"
                onChangeText={handleChange('email')}
                value={values.email}
                keyboardType="email-address"
                autoCapitalize="none"
                error={touched.email ? errors.email : undefined}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef?.current?.focus()}
                submitBehavior={'submit'}
                containerStyle={styles.emailContainer}
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry
                autoCapitalize="none"
                error={touched.password ? errors.password : undefined}
                returnKeyType="done"
                ref={passwordRef}
                onSubmitEditing={() => handleSubmit()}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('ForgotPassword')}
              >
                <CustomText style={styles.forgotPassword}>
                  Forgot password?
                </CustomText>
              </TouchableOpacity>
              <Button title="Sign in" onPress={handleSubmit} />
              <View style={styles.signUpContainer}>
                <CustomText style={styles.promptText}>
                  Don't have an account?{' '}
                </CustomText>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RoleSelector')}
                  activeOpacity={0.8}
                >
                  <CustomText style={styles.signUpLink}>Sign Up</CustomText>
                </TouchableOpacity>
              </View>
            </Container>
          )}
        </Formik>
      </View>
      {isLoading && <Loader show={isLoading} />}
    </View>
  );
};

export default LoginScreen;
