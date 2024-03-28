import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  AppButton,
  AppHeader,
  AppScreen,
  AppText,
  AppView,
  OTPInput,
  TouchableOpacity,
} from '@/components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  SignUpScreenProps,
  VerificationScreenProps,
  VerifyRouteProps,
} from '@/types/typings';
import colors from '@/configs/colors';
import Size from '@/Utils/useResponsiveSize';
import routes from '@/navigation/routes';
import AppModal from '@/components/AppModal';
import VerificationModal from './components/VerificationModal';
import {storeData} from '@/Utils/useAsyncStorage';
import {hasUserDetails} from '../Splashscreen/Splashscreen';

const VerificationScreen = () => {
  const {replace} = useNavigation<VerificationScreenProps>();
  const route = useRoute<VerifyRouteProps>();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVerifyModal, setIsVerifyModal] = useState(false);
  const [expiryTime, setExpiryTime] = useState(5 * 60);
  const [isExpired, setIsExpired] = useState(false);
  const phoneNo = route.params.userDetails.phoneNo;
  const userDetails = route.params.userDetails;

  //TODO: After user have been verified, set to async storage userdatils like name so user won't login on returning to the app

  async function handleVerification() {
    if (otp.length === 6) {
      setLoading(true);
      //TODO: try catch that validates verification which pops verification modal

      //Svaing user data after verification was successful
      await storeData(hasUserDetails, JSON.stringify(userDetails));

      setIsVerifyModal(true); //Render this when response.ok() is true and signup is veerified
      setTimeout(() => {
        setIsVerifyModal(false);
        replace(routes.SET_PIN);
        setLoading(false);
      }, 4000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setExpiryTime(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (expiryTime === 0) {
      setIsExpired(true);
    }
  }, [expiryTime]);

  return (
    <AppScreen containerStyle={{paddingTop: 15}}>
      <AppHeader />
      <StatusBar hidden />

      <AppModal
        isModalVisible={isVerifyModal}
        hideLoge
        hideCloseBtn
        replaceDefaultContent={<VerificationModal />}
        handleClose={() => setIsVerifyModal(false)}
      />

      <View style={{height: '85%'}}>
        <AppText className="text-2xl text-white font-bold font-LEXEND_700 mt-12 mb-2">
          Verify Phone
        </AppText>
        <AppText className="text-base text-white font-normal font-MANROPE_400">
          Enter the code we send to {phoneNo}
        </AppText>

        <AppView className="mt-8 items-center">
          <OTPInput pinCount={6} handleCode={code => setOtp(code)} space />
          {error && (
            <AppText className="max-w-[120px] text-red text-[16px] text-center font-medium font-MANROPE_500 mt-3">
              Invalid PIN Please try again
            </AppText>
          )}
        </AppView>

        <AppText className="text-base text-white font-normal font-MANROPE_400 mt-10">
          Code is expired in {Math.floor(expiryTime / 60)}:
          {expiryTime % 60 < 10 ? '0' : ''}
          {expiryTime % 60}s
        </AppText>
        <TouchableOpacity className="mt-5">
          <AppText className="text-base text-yellow-300 font-normal font-MANROPE_400">
            Resend
          </AppText>
        </TouchableOpacity>
      </View>

      <AppView className="w-full items-center">
        <AppButton
          isLoading={loading}
          bgColor={colors.RED}
          title="Verify"
          onPress={() => handleVerification()}
          style={{borderRadius: 8, width: Size.getWidth() * 0.85}}
        />
      </AppView>
    </AppScreen>
  );
};

export default VerificationScreen;
