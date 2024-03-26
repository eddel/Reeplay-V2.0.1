import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppHeader, AppScreen, AppText, AppView, OTPInput} from '@/components';
import {useNavigation} from '@react-navigation/native';
import {SetPinScreenProps} from '@/types/typings';
import routes from '@/navigation/routes';

const CreatePIN = () => {
  const {navigate} = useNavigation<SetPinScreenProps>();
  const [pin1, setPin1] = useState<string>('');

  const handlePin = (pin: string) => {
    setPin1(pin);
    console.log(pin);
    if (pin.length === 4) {
      navigate(routes.SET_NEW_PIN, {pin: pin});
    }
  };

  return (
    <AppScreen containerStyle={{paddingTop: 10}}>
      <AppHeader />

      <AppText className="text-2xl text-white font-bold font-LEXEND_700 mt-12">
        Create your new
      </AppText>
      <AppText className="text-2xl text-white font-bold font-LEXEND_700 mb-2">
        App pin
      </AppText>

      <AppView className="mt-8">
        <OTPInput pinCount={4} handleCode={code => handlePin(code)} />
      </AppView>
    </AppScreen>
  );
};

export default CreatePIN;
