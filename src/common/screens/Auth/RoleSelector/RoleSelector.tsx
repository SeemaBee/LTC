import { CommonNavigationProp } from 'common/types/navigationTypes';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import getStyles from './RoleSelector.styles';
import CustomText from 'common/components/text';
import Button from 'common/components/button';
import Header from 'common/components/header';
import { useDispatch } from 'react-redux';
import { setRole } from 'common/redux/features/common/authSlice';

interface LoginProps {
  navigation: CommonNavigationProp<'RoleSelector'>;
}

const RoleSelector = ({ navigation }: LoginProps) => {
  const [selectedRole, setSelectedRole] = useState(0);
  const dispatch = useDispatch();
  const styles = getStyles();

  const navigateToSignUp = () => {
    dispatch(setRole(selectedRole === 0 ? 'seeker' : 'provider'));
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Header text="Register" onBackPress={() => navigation.goBack()} />
      <View style={styles.contentStyle}>
        <CustomText style={styles.subTitle}>
          Create your account to get started quickly and access all features.
        </CustomText>
        <CustomText style={styles.selectionTitle}>Account Type</CustomText>
        <TouchableOpacity
          style={styles.radioBox}
          activeOpacity={0.8}
          onPress={() => setSelectedRole(0)}
        >
          <View
            style={[
              styles.emptyRadio,
              selectedRole === 0 ? styles.selectedRadio : null,
            ]}
          />
          <CustomText style={styles.radioText}>Service Seeker</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioBox}
          activeOpacity={0.8}
          onPress={() => setSelectedRole(1)}
        >
          <View
            style={[
              styles.emptyRadio,
              selectedRole === 1 ? styles.selectedRadio : null,
            ]}
          />
          <CustomText style={styles.radioText}>Service Provider</CustomText>
        </TouchableOpacity>
        <Button
          title="Continue"
          onPress={navigateToSignUp}
          style={styles.button}
        />
        <View style={styles.signUpContainer}>
          <CustomText style={styles.promptText}>
            Already have an account?{' '}
          </CustomText>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <CustomText style={styles.signUpLink}>Login</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RoleSelector;
