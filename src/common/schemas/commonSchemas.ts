import { passwordRegex, phoneRegex } from 'common/regex';
import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),

  password: Yup.string().required('Password is required'),
});

export const ProviderSignupSchema = Yup.object().shape({
  name: Yup.string().trim().required('Name is required'),
  gender: Yup.string().trim().required('Gender is required'),
  dob: Yup.string().trim().required('Date of birth is required'),
  phone: Yup.string()
    .trim()
    .matches(phoneRegex, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .trim()
    .matches(
      passwordRegex,
      'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.',
    )
    .required('Password is required'),
});

export const SeekerSignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  phone: Yup.string()
    .trim()
    .matches(/^(\+1)?[2-9]\d{2}[2-9]\d{6}$/, 'Enter a valid phone number')
    .required('Phone number is required'),
  password: Yup.string()
    .matches(
      passwordRegex,
      'Password should contain uppercase, lowercase, special character and number',
    )
    .required('Password is required'),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
});

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .matches(
      passwordRegex,
      'Password should contain uppercase, lowercase, special character and number',
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});
