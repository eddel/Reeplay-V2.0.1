import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {AppButton, AppImage, AppText} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import AuthFormComponent from './components/AuthFormComponent';
import colors from '@/configs/colors';
import {useNavigation} from '@react-navigation/native';
import {ResetPasswordScreenProps} from '@/types/typings';
import routes from '@/navigation/routes';
import AppModal from '@/components/AppModal';
import VerificationModal from './components/VerificationModal';

const ResetPassword = () => {
  const {navigate} = useNavigation<ResetPasswordScreenProps>();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  function handleModal() {
    setIsShowModal(true);
    setTimeout(() => {
      setIsShowModal(false);
    }, 5500);
  }

  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar barStyle={'light-content'} />

      <FastImage
        source={require('@/assets/images/Login-bg.png')}
        style={styles.imageContainer}
      />

      <AppImage
        source={require('@/assets/images/LogoReply.png')}
        style={{width: 200, height: 100, objectFit: 'contain'}}
      />

      <View
        style={{
          paddingHorizontal: Size.calcHeight(24),
          marginTop: Size.calcHeight(112),
          width: '100%',
        }}>
        <AuthFormComponent screen="reset" trigger={() => handleModal()} />
      </View>

      <AppButton
        title="Create a New Account"
        bgColor="rgba(0, 0, 0, 0.3)"
        onPress={() => navigate(routes.SIGNUP_SCREEN)}
        style={{
          marginTop: Size.calcHeight(20),
          borderColor: colors.RED,
          borderWidth: 3,
          borderRadius: 30,
        }}
        labelStyle={{
          color: colors.RED,
        }}
      />

      <AppButton
        title="Login"
        bgColor="rgba(0, 0, 0, 0.3)"
        onPress={() => navigate(routes.LOGIN_SCREEN)}
        style={{
          marginTop: Size.calcHeight(20),
          borderColor: colors.RED,
          borderWidth: 3,
          borderRadius: 30,
        }}
        labelStyle={{
          color: colors.RED,
        }}
      />

      <AppModal
        isModalVisible={isShowModal}
        hideLoge
        hideCloseBtn
        replaceDefaultContent={<VerificationModal reset />}
        handleClose={() => setIsShowModal(false)}
      />
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'contain',
  },
});
