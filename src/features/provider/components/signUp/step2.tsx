import CustomText from 'common/components/text';
import { useTheme } from 'common/helperFunctions';
import { Upload } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { FontSizes } from 'theme/typography';
import Container from 'common/components/container';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useFormikContext } from 'formik';
import { RegistrationFormData } from 'features/provider/types/registrationForm';
import ImagePickerModal from 'common/components/ImagePickerModal';
import { useDispatch, useSelector } from 'react-redux';
import { setProviderIdProofList } from 'common/redux/features/provider/idProofLSlice';
import { RootState } from 'common/redux/store';
import { getIdProofList } from 'features/provider/apis/providerAuthApis';
import Toast from 'react-native-toast-message';
import Loader from 'common/components/loader';
import CustomDropDownPicker from 'common/components/customDropDownPicker';

type FileType = 'id_front' | 'id_back' | 'certificate' | 'profilePhoto';

const StepTwo = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [showPicker, setShowPicker] = useState(false);
  const [currentFileType, setCurrentFileType] = useState<FileType>('id_front');
  const [isLoading, setIsLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const idProofList = useSelector((state: RootState) => state.idProofList);

  const { values, errors, touched, setFieldValue } =
    useFormikContext<RegistrationFormData>();

  const getIdTypes = async () => {
    setIsLoading(true);
    try {
      const response = await getIdProofList();
      if (response.success) {
        dispatch(setProviderIdProofList(response.data ?? []));
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

  const pickFromCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.1,
      saveToPhotos: true,
    });

    setShowPicker(false);

    if (!result.didCancel && result.assets) {
      setFieldValue(currentFileType, result.assets[0]);
    }
  };

  const pickImages = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      quality: 0.1,
    });
    setShowPicker(false);

    if (!result.didCancel && result.assets) {
      setFieldValue(currentFileType, result.assets[0]);
    }
  };

  const handleFileSelect = (type: FileType) => {
    setShowPicker(true);
    setCurrentFileType(type);
  };

  useEffect(() => {
    getIdTypes();
  }, []);

  return (
    <Container>
      <CustomText style={styles.formHeader}>Verification</CustomText>
      <CustomDropDownPicker
        label="ID Proof Upload"
        dropdownOpen={dropdownOpen}
        value={`${values.identity_type_id}`}
        items={idProofList.map(item => ({
          label: item.name,
          value: `${item.id}`,
        }))}
        setDropdownOpen={() => setDropdownOpen(!dropdownOpen)}
        setValue={callback => {
          const newValue =
            typeof callback === 'function'
              ? callback(values.identity_type_id)
              : callback;
          setFieldValue('identity_type_id', newValue);
        }}
        error={touched.identity_type_id ? errors.identity_type_id : undefined}
      />
      <View style={styles.idContainer}>
        <View style={styles.imageWrapper}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.imageContainer}
            onPress={() => handleFileSelect('id_front')}
          >
            {values.id_front ? (
              <Image
                source={{ uri: values.id_front.uri }}
                resizeMode="cover"
                style={styles.image}
              />
            ) : (
              <>
                <CustomText style={styles.uploadText}>Front image</CustomText>
                <Upload size={Metrics._20} color={theme.black3} />
              </>
            )}
          </TouchableOpacity>
          {touched.id_front
            ? errors.id_front && (
                <CustomText style={styles.error}>{errors.id_front}</CustomText>
              )
            : null}
        </View>
        <View style={styles.imageWrapper}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.imageContainer}
            onPress={() => handleFileSelect('id_back')}
          >
            {values.id_back ? (
              <Image
                source={{ uri: values.id_back.uri }}
                resizeMode="cover"
                style={styles.image}
              />
            ) : (
              <>
                <CustomText style={styles.uploadText}>Back image</CustomText>
                <Upload size={Metrics._20} color={theme.black3} />
              </>
            )}
          </TouchableOpacity>
          {touched.id_back
            ? errors.id_back && (
                <CustomText style={styles.error}>{errors.id_back}</CustomText>
              )
            : null}
        </View>
      </View>
      <View style={styles.imageWrapper}>
        <CustomText style={styles.label}>Certificate</CustomText>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.imageContainer}
          onPress={() => handleFileSelect('certificate')}
        >
          {values.certificate ? (
            <Image
              source={{ uri: values.certificate.uri }}
              resizeMode="cover"
              style={styles.image}
            />
          ) : (
            <>
              <CustomText style={styles.uploadText}>
                Select file to upload
              </CustomText>
               <Upload size={Metrics._20} color={theme.black3} />
            </>
          )}
        </TouchableOpacity>
        {touched.certificate
          ? errors.certificate && (
              <CustomText style={styles.error}>{errors.certificate}</CustomText>
            )
          : null}
      </View>

      <View style={styles.imageWrapper}>
        <CustomText style={styles.label}>Profile Photo</CustomText>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.imageContainer}
          onPress={() => handleFileSelect('profilePhoto')}
        >
          {values.profilePhoto ? (
            <Image
              source={{ uri: values.profilePhoto.uri }}
              resizeMode="cover"
              style={styles.image}
            />
          ) : (
            <>
              <CustomText style={styles.uploadText}>
                Select file to upload
              </CustomText>
               <Upload size={Metrics._20} color={theme.black3} />
            </>
          )}
        </TouchableOpacity>
        {touched.profilePhoto
          ? errors.profilePhoto && (
              <CustomText style={styles.error}>
                {errors.profilePhoto}
              </CustomText>
            )
          : null}
      </View>
      {showPicker && (
        <ImagePickerModal
          showPicker={showPicker}
          onClose={() => setShowPicker(false)}
          onCameraPress={pickFromCamera}
          onGalleryPress={pickImages}
        />
      )}

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
    imageContainer: {
      width: '100%',
      height: Metrics._130,
      borderWidth: Metrics._1,
      borderColor: theme.border1,
      borderRadius: Metrics._5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    uploadText: {
      color: theme.black3,
      marginBottom: Metrics._8,
    },
    error: {
      marginTop: Metrics._4,
      fontSize: FontSizes._12,
      color: theme.error,
    },
    imageWrapper: {
      flex: 1,
      marginBottom: Metrics._20
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: Metrics._5,
    },
    label: {
      marginBottom: Metrics._12,
    },
    idContainer: {
      flexDirection: 'row',
      gap: Metrics._12,
      justifyContent: 'space-between',
    },
  });

export default StepTwo;
