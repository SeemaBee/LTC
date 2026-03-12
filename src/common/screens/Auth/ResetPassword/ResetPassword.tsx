import { View, Text, Keyboard, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import {
  CommonNavigationProp,
  CommonRouteProp,
} from 'common/types/navigationTypes';
import getStyles from './ResetPassword.styles';
import Header from 'common/components/header';
import CustomText from 'common/components/text';
import { Formik, FormikHelpers } from 'formik';
import Input from 'common/components/input';
import Button from 'common/components/button';
import Loader from 'common/components/loader';
import { ResetPasswordSchema } from 'common/schemas/commonSchemas';
import { resetPasswordApi } from 'api/authApis';
import Toast from 'react-native-toast-message';

interface Props {
  navigation: CommonNavigationProp<'ResetPassword'>;
  route: CommonRouteProp<'ResetPassword'>;
}

type initialValues = {
  password: string;
  confirmPassword: string;
};

const ResetPassword = ({ navigation, route }: Props) => {
  const styles = getStyles();
  const [loading, setLoading] = useState(false);
  const confirmPassRef = useRef<TextInput>(null);
  const { email } = route.params;

  const handleSubmit = async (
    values: initialValues,
    actions: FormikHelpers<initialValues>,
  ) => {
    Keyboard.dismiss();
    setLoading(true);
    try {
      const request = {
        email: email,
        new_password: values.password,
      };
      const response = await resetPasswordApi(request);
      if (response.success) {
        actions.resetForm();
        Toast.show({
          text1: 'Jacklap',
          text2: 'Password changed.',
          type: 'success',
        });
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Header text="Reset Password" onBackPress={() => navigation.goBack()} />
      <View style={styles.contentContainer}>
        <CustomText style={styles.subTitle}>
          Enter password for your .
        </CustomText>
        <Formik
          initialValues={{ password: '', confirmPassword: '' }}
          validationSchema={ResetPasswordSchema}
          onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
          {({
            values,
            handleChange,
            touched,
            errors,
            handleBlur,
            handleSubmit,
          }) => (
            <>
              <Input
                label="New Password"
                placeholder="Enter new email"
                value={values.password}
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                error={
                  touched.password && errors.password
                    ? errors.password
                    : undefined
                }
                autoCapitalize="none"
                submitBehavior="submit"
                onBlur={handleBlur}
                onSubmitEditing={() => confirmPassRef.current?.focus()}
              />
              <Input
                ref={confirmPassRef}
                label="Confirm New Password"
                placeholder="Confirm new password"
                value={values.confirmPassword}
                secureTextEntry={true}
                onChangeText={handleChange('confirmPassword')}
                error={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : undefined
                }
                autoCapitalize="none"
                onSubmitEditing={() => handleSubmit()}
              />
              <Button title="Submit" onPress={() => handleSubmit()} />
            </>
          )}
        </Formik>
      </View>
      {loading && <Loader show={loading} />}
    </View>
  );
};

export default ResetPassword;
