import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppHeader, AppScreen, AppText, AppView} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import fonts from '@/configs/fonts';
import colors from '@/configs/colors';

const ChangePhone = () => {
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  function handleContinue() {
    if (phoneNum === '') {
      setError(true);
      setErrorMessage('Invalid Credentials');
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      //Run update Phone endpoint

      setPhoneNum('');
    }
  }

  return (
    <AppScreen containerStyle={{paddingTop: 10, position: 'relative'}}>
      <AppHeader />

      <AppText className="max-w-[200px] font-bold font-LEXEND_700 text-white text-2xl mt-12 mb-[68px]">
        Change phone number
      </AppText>

      {/* In cases of server error */}
      {/* {error && (
        <AppText className=" text-red text-[16px] font-medium font-MANROPE_500 mt-3">
          {errorMessage}
        </AppText>
      )} */}
      <AppView className="mt-2 space-y-7">
        <TextInput
          value={phoneNum}
          onChangeText={setPhoneNum}
          placeholder="New Phone"
          placeholderTextColor="#474748"
          style={styles.input}
          keyboardType="number-pad"
        />
      </AppView>

      <AppView className="absolute bottom-6 w-full">
        <AppButton
          bgColor={colors.RED}
          title="Continue"
          onPress={handleContinue}
          style={{borderRadius: 10, width: '100%'}}
        />
      </AppView>
    </AppScreen>
  );
};

export default ChangePhone;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: Size.calcHeight(18),
    paddingVertical: Size.calcHeight(15),
    fontFamily: fonts.MANROPE_500,
    fontWeight: '500',
    fontSize: 16,
    color: '#474748',
  },
});
