import {
  Alert,
  Keyboard,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  AppButton,
  AppHeader,
  AppImage,
  AppScreen,
  AppText,
  AppView,
  TouchableOpacity,
} from '@/components';
import useToggle from '@/Hooks/useToggle';
import fonts from '@/configs/fonts';
import colors from '@/configs/colors';
import InAppBrowser from 'react-native-inappbrowser-reborn';

const SuggestionScreen = () => {
  const [typed, setTyped] = useToggle();
  const [keyboardStatus, setKeyboardStatus] = useState<boolean>(false);

  const url = 'https://www.tecno-mobile.com/stores/';

  const handleLink = async () => {
    await InAppBrowser.open(url);
  };

  useEffect(() => {
    const showKeyboard = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, [Keyboard]);

  return (
    <AppScreen
      scrollable
      containerStyle={{
        paddingTop: 10,
        paddingBottom: Platform.OS === 'ios' && keyboardStatus ? 250 : 0,
      }}>
      <AppHeader />

      <AppView className="mt-6 bg-red pt-3 px-1 rounded-[15px]">
        <AppView className="flex-row items-center justify-between px-3 pb-2">
          <AppView>
            <AppText className="font-LEXEND_400 text-base text-white ">
              REEPLAY
            </AppText>
            <AppText className="font-MANROPE_500 text-white text-xs">
              Ads that meet your interest
            </AppText>
          </AppView>
          <TouchableOpacity
            onPress={handleLink}
            className="bg-white py-2 px-3 rounded-[40px]">
            <AppText className="font-MANROPE_600 text-red text-xs">
              BUY NOW
            </AppText>
          </TouchableOpacity>
        </AppView>

        <AppView className="h-[191px] mb-1 rounded-b-[15px] overflow-hidden border-[2px] border-black">
          <AppImage
            source={require('@/assets/images/Ads.png')}
            className="h-full w-full rounded-b-[15px] object-contain"
          />
        </AppView>
      </AppView>

      <AppView className="-mt-[32px] w-full items-center">
        <AppImage source={require('@/assets/images/Logo_L.png')} className="" />
      </AppView>

      <AppView className="rounded-[15px] overflow-hidden bg-[#1A1A1A]">
        <AppView className="bg-[#1A1A1A] rounded-t-[15px] py-3 px-[14px]">
          <AppText className="font-ROBOTO_700 text-white text-lg">
            SUGGESTION
          </AppText>
          <AppText className="font-MANROPE_400 text-white text-[11px]">
            We appreciate your Ideas and Suggestions. We want to make REEPLAY
            better, for you . write us your suggestions.
          </AppText>
        </AppView>
        <AppView className="bg-black border-x-[3px] border-b-[3px] rounded-b-[15px] border-[#1A1A1A] w-full h-[150px]">
          {!typed ? (
            <TouchableOpacity
              onPress={setTyped}
              className="items-center justify-center">
              <AppText className="font-MANROPE_400 text-base mt-12 text-center text-grey_200">
                Write your message here...
              </AppText>
            </TouchableOpacity>
          ) : (
            <TextInput style={styles.input} autoFocus multiline />
          )}
        </AppView>
      </AppView>

      <AppButton
        title="Submit"
        bgColor={colors.RED}
        onPress={() => console.log('first')}
        style={{borderRadius: 6, alignSelf: 'center', marginTop: 40}}
      />
    </AppScreen>
  );
};

export default SuggestionScreen;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 12,
    marginTop: 6,
    fontFamily: fonts.ROBOTO_400,
    fontSize: 16,
    color: '#C4C4C4A6',
  },
});
