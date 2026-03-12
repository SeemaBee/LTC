import { View, Text, Keyboard } from 'react-native';
import React, { useState } from 'react';
import getStyles from './ForgotPassword.styles';
import Header from 'common/components/header';
import { CommonNavigationProp } from 'common/types/navigationTypes';
import CustomText from 'common/components/text';
import { Formik, FormikHelpers } from 'formik';
import Input from 'common/components/input';
import Button from 'common/components/button';
import Loader from 'common/components/loader';
import { forgotApi } from 'api/authApis';
import Toast from 'react-native-toast-message';
import Container from 'common/components/container';
import { ForgotPasswordSchema } from 'common/schemas/commonSchemas';

interface Props {
  navigation: CommonNavigationProp<'ForgotPassword'>;
}

type initialValues = {
  email: string;
};

const ForgotPassword = ({ navigation }: Props) => {
  const styles = getStyles();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    values: initialValues,
    actions: FormikHelpers<initialValues>,
  ) => {
    Keyboard.dismiss();
    setLoading(true);
    try {
      const request = {
        email: values.email,
      };
      const response = await forgotApi(request);
      if (response.success) {
        Toast.show({
          text1: 'Jacklap',
          text2: 'Otp send on your email.Please check',
          type: 'success',
        });
        actions.resetForm();
        navigation.navigate('VerifyOtp', {
          email: values.email,
          from: 'forgotPassword',
        });
      }
    } catch (error: any) {
      Toast.show({
        text1: 'Jacklap',
        text2: error?.message ?? 'Something went wrong',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header text="Forgot Password" onBackPress={() => navigation.goBack()} />
      <View style={styles.contentContainer}>
        <CustomText style={styles.subTitle}>
          Enter your email and we'll send a verification code instantly.
        </CustomText>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={ForgotPasswordSchema}
          onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
          {({ values, handleChange, touched, errors, handleSubmit }) => (
            <Container>
              <Input
                label="Email"
                placeholder="Enter your email"
                value={values.email}
                onChangeText={handleChange('email')}
                keyboardType="email-address"
                autoCapitalize="none"
                error={touched.email && errors.email ? errors.email : undefined}
                onSubmitEditing={() => handleSubmit()}
              />
              <Button title="Submit" onPress={() => handleSubmit()} />
            </Container>
          )}
        </Formik>
      </View>
      {loading && <Loader show={loading} />}
    </View>
  );
};

export default ForgotPassword;
