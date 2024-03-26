import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Size from '@/Utils/useResponsiveSize';
import {AppImage, AppText} from '@/components';
import AuthFormComponent from './components/AuthFormComponent';

const LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar hidden />

      <FastImage
        source={require('@/assets/images/Login-bg.png')}
        style={styles.imageContainer}
      />

      <AppImage
        source={require('@/assets/images/LogoReply.png')}
        style={{width: 200, height: 100, objectFit: 'contain'}}
      />

      <AppText
        style={{maxWidth: Size.getWidth() * 0.7}}
        className="text-sm text-grey_100 font-normal font-MANROPE_400 text-center mt-10">
        Login to Watch the Action, Romance and Live Shows from your Favorite
        Stars.
      </AppText>

      <View
        style={{
          paddingHorizontal: Size.calcHeight(24),
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
});
