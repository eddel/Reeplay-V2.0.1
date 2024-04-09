import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppHeader, AppScreen, AppText, AppView} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import fonts from '@/configs/fonts';
import colors from '@/configs/colors';

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const ChangeEmail = () => {
  const [email, setEmail] = useState<string>('');
  const [confirmEmail, setConfirmEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  function handleContinue() {
    if (email === '') {
      setError(true);
      setErrorMessage('Invalid Credentials');
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else if (email !== confirmEmail) {
      setError(true);
      setErrorMessage('Emails must match');
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      if (regex.test(email)) {
        //   setLoading(true);  //Pass loading variable to button to handle loading
        //Run update email endpoint here endpoint
        setTimeout(() => {
          //navigate to home

          // setLoading(false);
          setEmail('');
          setConfirmEmail('');
        }, 2500);
      } else {
        setError(true);
        setErrorMessage('Invalid Email');
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    }
  }

  return (
    <AppScreen containerStyle={{paddingTop: 10, position: 'relative'}}>
      <AppHeader />

      <AppText className=" font-LEXEND_700 text-white text-2xl mt-12 mb-[68px]">
        Change email
      </AppText>

      {error && (
        <AppText className=" text-red text-[16px] font-MANROPE_500 mt-3">
          {errorMessage}
        </AppText>
      )}
      <AppView className="mt-2 space-y-7">
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="New Email"
          placeholderTextColor="#474748"
          style={styles.input}
        />
        <TextInput
          value={confirmEmail}
          onChangeText={setConfirmEmail}
          placeholder="Confirm Email"
          placeholderTextColor="#474748"
          style={styles.input}
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

export default ChangeEmail;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: Size.calcHeight(18),
    paddingVertical: Size.calcHeight(15),
    fontFamily: fonts.MANROPE_500,
    fontSize: 16,
    color: '#474748',
  },
});
