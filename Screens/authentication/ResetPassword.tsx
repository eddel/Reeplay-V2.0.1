import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {AppButton, AppImage, AppText, AppView} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import AuthFormComponent from './components/AuthFormComponent';
import colors from '@/configs/colors';
import {useNavigation} from '@react-navigation/native';
import {ResetPasswordScreenProps} from '@/types/typings';
import routes from '@/navigation/routes';
import AppModal from '@/components/AppModal';
import VerificationModal from './components/VerificationModal';
import LinearGradient from 'react-native-linear-gradient';

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
        position: 'relative',
        alignItems: 'center',
        height: Size.getHeight(),
      }}>
      <StatusBar hidden />

      <FastImage
        source={require('@/assets/images/Login-bg.png')}
        style={styles.imageContainer}
      />

      <LinearGradient
        colors={['rgba(0,0,0,0.65)', 'rgba(0,0,0,0.95)', 'rgba(0,0,0,0.99)']}
        style={[styles.gradientStyles]}
      />

      <AppImage
        source={require('@/assets/images/authLogo.png')}
        style={{
          width: 300,
          height: 200,
          objectFit: 'contain',
          marginTop: 50,
        }}
      />

      <View
        style={{
          paddingHorizontal: Size.calcHeight(20),
          marginTop: 12,
          width: '100%',
        }}>
        <AuthFormComponent screen="reset" trigger={() => handleModal()} />
      </View>

      <AppView className="mt-auto mb-5 flex-row items-center">
        <AppText className="font-normal font-MANROPE_400 text-[#BCC1CA] text-base ">
          Return to{' '}
        </AppText>
        <AppButton
          title="Log in"
          bgColor="transparent"
          onPress={() => navigate(routes.LOGIN_SCREEN)}
          style={{width: 50, paddingHorizontal: 0}}
          labelStyle={{
            color: colors.RED,
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline',
            textDecorationColor: colors.RED,
            fontSize: 16,
          }}
        />
      </AppView>

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
  gradientStyles: {
    height: Size.getHeight(),
    width: Size.getWidth(),
    // zIndex: 10,
    position: 'absolute',
  },
});
