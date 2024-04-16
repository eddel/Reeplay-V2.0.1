import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  AppButton,
  AppHeader,
  AppScreen,
  AppText,
  AppView,
  OTPInput,
  TouchableOpacity,
} from '@/components';
import {storeData} from '@/Utils/useAsyncStorage';
import colors from '@/configs/colors';
import Size from '@/Utils/useResponsiveSize';
import AppModal from '@/components/AppModal';
import VerificationModal from '../authentication/components/VerificationModal';
import SetChangePin from './SetChangePin';
import {useNavigation} from '@react-navigation/native';
import ComfirmPin from './ComfirmPin';

const HAS_SET_NEWPIN = 'new_pin';

const ChangePin = () => {
  const {goBack} = useNavigation();
  const [code, setCode] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [step, setStep] = useState<string>('confirm');
  const [firstPin, setFirstPin] = useState<string>('');

  const handlePin = async () => {
    if (code !== firstPin) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    } else {
      setLoading(true);
      await storeData(HAS_SET_NEWPIN, 'true');
      //Probably save PIN to user's database
      //Run update pin endpoint
      setIsShowModal(true); //if successful run this
      setTimeout(() => {
        setIsShowModal(false);
        setLoading(false);
        goBack();
        //remove set timeout and navigate
      }, 3000);
    }
  };

  switch (step) {
    case 'confirm':
      return <ComfirmPin setStep={setStep} />;

    case 'main':
      return <SetChangePin setStep={setStep} setPin={setFirstPin} />;

    case 'second':
      return (
        <AppScreen containerStyle={{paddingTop: 20, position: 'relative'}}>
          <AppHeader handleFunc={() => setStep('main')} />

          <AppView className="mt-56">
            <OTPInput pinCount={4} handleCode={code => setCode(code)} />
            {error ? (
              <AppText
                style={{alignSelf: 'center'}}
                className="max-w-[120px] text-red text-[16px] text-center font-MANROPE_500 mt-3">
                Incorrect PIN. Please try again
              </AppText>
            ) : (
              <AppText
                style={{alignSelf: 'center'}}
                className="font-MANROPE_400 text-base text-white mt-3">
                Confirm pin to continue
              </AppText>
            )}
          </AppView>

          <AppView className="w-full items-center absolute bottom-10">
            <AppButton
              isLoading={loading}
              bgColor={colors.RED}
              title="Change PIN"
              onPress={() => handlePin()}
              style={{borderRadius: 8, width: Size.getWidth() * 0.9}}
            />
          </AppView>

          <AppModal
            isModalVisible={isShowModal}
            hideLoge
            hideCloseBtn
            replaceDefaultContent={
              <VerificationModal
                message="App pin changed successfully"
                messageStyle={{maxWidth: 200, lineHeight: 18, marginTop: -9}}
              />
            }
            handleClose={() => setIsShowModal(false)}
          />
        </AppScreen>
      );
  }
};

export default ChangePin;

const styles = StyleSheet.create({});
