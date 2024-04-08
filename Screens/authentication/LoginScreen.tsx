import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Size from '@/Utils/useResponsiveSize';
import {AppImage, AppText, AppView} from '@/components';
import AuthFormComponent from './components/AuthFormComponent';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = () => {
  return (
    <View
      style={{
        // flex: 1,
        position: 'relative',
        alignItems: 'center',
        // justifyContent: 'center',
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

      <AppText className="font-semibold font-MANROPE_600 text-white text-xl text-center -mt-3">
        Login Account
      </AppText>
      <AppText className="text-base text-white font-normal font-MANROPE_400 text-center">
        Watch your favorite stars
      </AppText>

      <View
        style={{
          paddingHorizontal: Size.calcHeight(20),
          marginTop: 12,
          width: '100%',
        }}>
        <AuthFormComponent screen="login" />
      </View>
    </View>
  );
};

export default LoginScreen;

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
