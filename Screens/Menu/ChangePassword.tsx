import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppHeader, AppScreen, AppText, AppView} from '@/components';
import colors from '@/configs/colors';
import Size from '@/Utils/useResponsiveSize';
import fonts from '@/configs/fonts';

const ChangePassword = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  function handleContinue() {
    if (password === '') {
      setError(true);
      setErrorMessage('Invalid Credentials');
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else if (password !== confirmPassword) {
      setError(true);
      setErrorMessage('Passwords do not match');
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      //Run update endpoint here

      setPassword('');
      setConfirmPassword('');
    }
  }

  return (
    <AppScreen containerStyle={{paddingTop: 10, position: 'relative'}}>
      <AppHeader />

      <AppText className="max-w-[250px] font-LEXEND_700 text-white text-2xl mt-12 mb-[68px]">
        Change your new password
      </AppText>

      {error && (
        <AppText className=" text-red text-[16px] font-MANROPE_500 mt-3">
          {errorMessage}
        </AppText>
      )}
      <AppView className="mt-2 space-y-7">
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="New Password"
          placeholderTextColor="#474748"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor="#474748"
          secureTextEntry
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

export default ChangePassword;

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
