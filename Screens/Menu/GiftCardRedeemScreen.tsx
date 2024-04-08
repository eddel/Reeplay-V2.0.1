import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppHeader, AppScreen, AppText, AppView} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import fonts from '@/configs/fonts';
import colors from '@/configs/colors';
import AppModal from '@/components/AppModal';
import VerificationModal from '@/Screens/authentication/components/VerificationModal';

const GiftCardRedeemScreen = () => {
  const [giftCard, setGiftCard] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  function handleRedeem() {
    if (giftCard !== '') {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setGiftCard('');
      }, 3000);
    }
  }

  return (
    <AppScreen containerStyle={{paddingTop: 10, position: 'relative'}}>
      <AppHeader />
      <AppText className="font-LEXEND_700 font-bold text-2xl text-white mt-[70%]">
        Redeem Giftcard
      </AppText>
      <TextInput
        value={giftCard}
        onChangeText={setGiftCard}
        placeholder="Enter Giftcard Code"
        placeholderTextColor="#171A1F"
        style={styles.input}
      />

      <AppView className="absolute bottom-4 w-full">
        <AppButton
          bgColor={colors.RED}
          title="Redeem"
          onPress={() => handleRedeem()}
          style={{borderRadius: 8, width: '100%'}}
        />
      </AppView>

      <AppModal
        isModalVisible={isSuccess}
        hideLoge
        hideCloseBtn
        replaceDefaultContent={
          <VerificationModal
            message={`Giftcard redeemed ${'\n'}successfully`}
          />
        }
        handleClose={() => setIsSuccess(false)}
      />
    </AppScreen>
  );
};

export default GiftCardRedeemScreen;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: Size.calcHeight(18),
    paddingVertical: Size.calcHeight(15),
    fontFamily: fonts.MANROPE_400,
    fontWeight: '400',
    fontSize: 16,
    color: '#171A1F',
    textAlign: 'center',
    marginTop: 13,
  },
});
