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

const HAS_SET_NEWPIN = 'new_pin';

const ChangePin = () => {
  const [code, setCode] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const handlePin = async () => {
    if (code.length !== 4) {
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
        //remove set timeout and navigate
      }, 3000);
    }
  };

  return (
    <AppScreen containerStyle={{paddingTop: 10, position: 'relative'}}>
      <AppHeader />

      <AppText className="text-2xl text-white font-bold font-LEXEND_700 mt-14">
        Confirm your new
      </AppText>
      <AppText className="text-2xl text-white font-bold font-LEXEND_700 mb-2">
        App pin
      </AppText>

      <AppView className="mt-8">
        <OTPInput pinCount={4} handleCode={code => setCode(code)} />
      </AppView>

      <AppView className="w-full items-center absolute bottom-10">
        <AppButton
          isLoading={loading}
          bgColor={colors.RED}
          title="Create Pin"
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
            message="App pin created successfully"
            messageStyle={{maxWidth: 200, lineHeight: 18, marginTop: -9}}
          />
        }
        handleClose={() => setIsShowModal(false)}
      />
    </AppScreen>
  );
};

export default ChangePin;

const styles = StyleSheet.create({});
