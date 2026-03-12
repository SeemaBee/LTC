import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import { moderateScale } from 'react-native-size-matters';
import { Camera, CircleX, Images } from 'lucide-react-native';
import CustomText from './text';
import { useTheme } from 'common/helperFunctions';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { FontFamily, FontSizes } from 'theme/typography';

type Props = {
  showPicker: boolean;
  onClose: () => void;
  onCameraPress: () => void;
  onGalleryPress: () => void;
};

const ImagePickerModal = ({
  showPicker,
  onClose,
  onCameraPress,
  onGalleryPress,
}: Props) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <ReactNativeModal
      isVisible={showPicker}
      style={styles.modalBox}
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
    >
      <View style={styles.imagePickerContainer}>
        <View style={styles.titleBox}>
          <View style={styles.empty} />
          <CustomText style={styles.title}>Choose Option</CustomText>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onClose()}
            testID="close-icon"
          >
            <CircleX
              size={moderateScale(30)}
              color={theme.white}
              fill={theme.grey2}
              strokeWidth={moderateScale(1.5)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonBox}
            onPress={() => onCameraPress()}
          >
            <CustomText style={styles.selectionText}>Take Photo</CustomText>
            <Camera size={moderateScale(20)} color={theme.white} />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonBox}
            onPress={() => onGalleryPress()}
          >
            <CustomText style={styles.selectionText}>Choose Photo</CustomText>
            <Images size={moderateScale(20)} color={theme.white} />
          </TouchableOpacity>
        </View>
      </View>
    </ReactNativeModal>
  );
};

const getStyles = (theme: typeof LightTheme) =>
  StyleSheet.create({
    modalBox: {
      margin: 0,
      justifyContent: 'flex-end',
    },
    imagePickerContainer: {
      padding: moderateScale(15),
      borderTopLeftRadius: moderateScale(15),
      borderTopRightRadius: moderateScale(15),
      backgroundColor: theme.white,
    },
    titleBox: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: moderateScale(20),
    },
    empty: {
      width: moderateScale(30),
    },
    title: {
      color: theme.black1,
      fontSize: FontSizes._24,
      fontFamily: FontFamily.interSemiBold,
    },
    buttonContainer: {
      paddingHorizontal: moderateScale(10),
      paddingVertical: moderateScale(5),
      backgroundColor: theme.primary,
      borderRadius: moderateScale(10),
      marginBottom: moderateScale(10),
    },
    buttonBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    selectionText: {
      color: theme.white,
      fontSize: Metrics._16,
      fontFamily: FontFamily.interMedium,
      paddingVertical: moderateScale(5),
    },
    divider: {
      height: moderateScale(1),
      backgroundColor: theme.grey9,
      marginVertical: moderateScale(5),
    },
  });

export default ImagePickerModal;