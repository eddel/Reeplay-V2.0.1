import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {AppImage, AppText} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import AuthFormComponent from './components/AuthFormComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '@/navigation/AuthNavigation';
import {RootStackParamList} from '@/navigation/AppNavigator';
import {DrawerNavigatorProps} from '@/navigation/AppStack';
import LinearGradient from 'react-native-linear-gradient';
import country_codes from '@/configs/country_codes';
import BottomSheet from './components/BottomModal';

export type SignUpNavigationProps = NativeStackScreenProps<AuthStackParamList>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const SignUpScreen = () => {
  const [isCountryCode, setIsCountryCode] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState({
    cc: country_codes[0].dial_code,
    cf: country_codes[0].flag,
  });

  //TODO:
  // - Add form validation using yup
  // - run otp endpoint here
  // - save form details with redux to use in the next screen to finish signup process

  return (
    <>
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

        <AppText className="font-semibold font-MANROPE_600 text-white text-xl text-center -mt-3">
          Create an Account
        </AppText>
        <AppText className="text-base text-white font-normal font-MANROPE_400 text-center">
          Watch your favorite contents.
        </AppText>

        <View
          style={{
            paddingHorizontal: Size.calcHeight(20),
            marginTop: 12,
            width: '100%',
          }}>
          <AuthFormComponent
            countryCode={countryCode}
            setIsCountryCode={setIsCountryCode}
            screen="signUp"
          />
        </View>
      </View>

      {isCountryCode && (
        <View style={{position: 'absolute', width: '100%', height: '100%'}}>
          <View style={styles.bottomSheetContainer}>
            <Pressable
              onPress={() => setIsCountryCode(false)}
              style={{width: '100%', height: '100%'}}
            />
            <BottomSheet
              handleClose={() => setIsCountryCode(false)}
              handleNav={item =>
                setCountryCode({cc: item.dial_code, cf: item.flag})
              }
            />
          </View>
        </View>
      )}
    </>
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
  gradientStyles: {
    height: Size.getHeight(),
    width: Size.getWidth(),
    // zIndex: 10,
    position: 'absolute',
  },
  bottomSheetContainer: {
    width: Size.getWidth(),
    height: Size.getHeight(),
    position: 'relative',
  },
});
