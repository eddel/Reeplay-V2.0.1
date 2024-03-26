import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {AppImage, AppText} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import AuthFormComponent from './components/AuthFormComponent';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from '@react-navigation/native';
import {AuthMainNavigation} from '@/types/typings';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {AuthStackParamList} from '@/navigation/AuthNavigation';
import {RootStackParamList} from '@/navigation/AppNavigator';
import {DrawerNavigatorProps} from '@/navigation/AppStack';

export type SignUpNavigationProps = NativeStackScreenProps<AuthStackParamList>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const SignUpScreen = () => {
  //TODO:
  // - Add form validation using yup
  // - run otp endpoint here
  // - save form details with redux to use in the next screen to finish signup process

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

      <AppText
        style={{maxWidth: Size.getWidth() * 0.7}}
        className="text-sm text-grey_100 font-normal font-MANROPE_400 text-center mt-10">
        Create an Account
      </AppText>
      <AppText
        style={{maxWidth: Size.getWidth() * 0.7}}
        className="text-sm text-grey_100 font-normal font-MANROPE_400 text-center ">
        and Start Watching your Favorite Movies.
      </AppText>

      <View
        style={{
          paddingHorizontal: Size.calcHeight(24),
          marginTop: 12,
          width: '100%',
        }}>
        <AuthFormComponent screen="signUp" />
      </View>
    </View>
  );
};

export default SignUpScreen;

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
