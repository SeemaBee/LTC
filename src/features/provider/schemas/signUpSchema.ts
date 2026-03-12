import { Asset } from 'react-native-image-picker';
import * as Yup from 'yup';

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export const Step1Schema = Yup.object().shape({
  serviceCategory: Yup.string().trim().required('Service Category is required'),
  languages: Yup.array()
    .of(Yup.string().trim())
    .min(1, 'At least one language is required')
    .required('Language is required'),
  experience: Yup.number().required('Experience is required'),
});

export const Step2Schema = Yup.object().shape({
  identity_type_id: Yup.number()
    .moreThan(0, 'Please select ID Proof')
    .required('Please select ID Proof'),

  id_front: Yup.mixed()
    .required('ID proof is required')
    .test(
      'fileSize',
      'ID proof must be less than 10MB',
      (file: Asset) =>
        file && file.fileSize != null && file.fileSize <= MAX_FILE_SIZE,
    ),

  id_back: Yup.mixed()
    .required('ID proof is required')
    .test(
      'fileSize',
      'ID proof must be less than 10MB',
      (file: Asset) =>
        file && file.fileSize != null && file.fileSize <= MAX_FILE_SIZE,
    ),

  certificate: Yup.mixed()
    .nullable()
    .test(
      'fileSize',
      'Certificate must be less than 10MB',
      (file?: Asset | null) =>
        !file || (file.fileSize != null && file.fileSize <= MAX_FILE_SIZE),
    ),

  profilePhoto: Yup.mixed()
    .required('Profile photo is required')
    .test(
      'fileSize',
      'Profile photo must be less than 10MB',
      (file: Asset) =>
        file && file.fileSize != null && file.fileSize <= MAX_FILE_SIZE,
    ),
});

export const Step3Schema = Yup.object().shape({
  accountHolderName: Yup.string()
    .trim()
    .min(2, 'Account holder name is too short')
    .max(100, 'Account holder name is too long')
    .required('Account holder name is required'),

  bankName: Yup.string()
    .trim()
    .min(2, 'Bank name is too short')
    .max(100, 'Bank name is too long')
    .required('Bank name is required'),

  institutionNumber: Yup.string()
    .trim()
    .matches(/^\d{3}$/, 'Institution number must be exactly 3 digits')
    .required('Institution number is required'),

  transitNumber: Yup.string()
    .trim()
    .matches(/^\d{5}$/, 'Transit number must be exactly 5 digits')
    .required('Transit number is required'),

  accountNumber: Yup.string()
    .trim()
    .matches(/^\d+$/, 'Account number must contain only digits')
    .min(7, 'Account number must be at least 7 digits')
    .max(12, 'Account number must be at most 12 digits')
    .required('Account number is required'),

  accountType: Yup.string()
    .oneOf(['chequing', 'savings'], 'Invalid account type')
    .required('Account type is required'),
});
