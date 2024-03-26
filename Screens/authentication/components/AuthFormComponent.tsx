import {
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppText, AppView, TouchableOpacity} from '@/components';
import colors from '@/configs/colors';
import Size from '@/Utils/useResponsiveSize';
import fonts from '@/configs/fonts';
import {CheckIcon, DropDwn, EyeIcon} from '@/assets/icons';
import useToggle from '@/Hooks/useToggle';
import {useNavigation} from '@react-navigation/native';
import {
  LoginScreenProps,
  MainLoginScreenProps,
  SignUpScreenProps,
} from '@/types/typings';
import routes from '@/navigation/routes';
import {CountryPicker} from 'react-native-country-codes-picker';
import {removeData, storeData} from '@/Utils/useAsyncStorage';

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const HAS_SKIPPED = 'SKIPPED';

interface Props {
  screen: string;
  trigger?: () => void;
}

const AuthFormComponent = ({screen, trigger}: Props) => {
  const navLogin = useNavigation<LoginScreenProps>();
  const navSignup = useNavigation<SignUpScreenProps>();
  const {reset} = useNavigation<MainLoginScreenProps>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [phoneNo, setPhoneNo] = useState<string>('');
  const [toogle, setToogle] = useToggle(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isCountryCode, setIsCountryCode] = useState<boolean>(false);
  const [isPromotion, setIsPromotion] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState({
    cc: '+1',
    cf: '🇺🇸',
  });

  async function resetState() {
    setEmail('');
    setPassword('');
    setFullname('');
    setPhoneNo('');
    setError('');
    await removeData(HAS_SKIPPED);
  }

  function handleLogin() {
    if (email === '' && password === '') {
      setError('Invalid Credentials');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else {
      if (regex.test(email)) {
        setLoading(true);
        //Auth endpoint
        setTimeout(() => {
          //navigate to home
          reset({
            index: 0,
            routes: [
              {
                name: routes.TAB_MAIN,
              },
            ],
          });
          setLoading(false);
          resetState();
        }, 2500);
      } else {
        setError('Invalid Email');
        setTimeout(() => {
          setError('');
        }, 2000);
      }
    }
  }

  function handleRest() {
    if (email === '') {
      setError('Invalid Credentials');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else {
      if (regex.test(email)) {
        setLoading(true);
        //Auth endpoint
        setTimeout(() => {
          if (trigger) trigger();
          setLoading(false);
          resetState();
        }, 2500);
      } else {
        setError('Invalid Email');
        setTimeout(() => {
          setError('');
        }, 2000);
      }
    }
  }

  async function handleSignUp() {
    if (email === '' && password === '' && phoneNo === '' && fullname === '') {
      setError('Invalid Credentials');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else {
      if (regex.test(email)) {
        setLoading(true);
        let userData = {
          email,
          password,
          fullname,
          phoneNo,
        };
        //TODO: RUN actual signup endpoint here

        setTimeout(() => {
          navSignup.navigate(routes.VEERIFY_PHONE, {
            userDetails: userData,
          });
          setLoading(false);
          resetState();
        }, 2500);
      } else {
        setError('Invalid Email');
        setTimeout(() => {
          setError('');
        }, 2000);
      }
    }
  }

  async function handleSkip() {
    await storeData(HAS_SKIPPED, 'true');
    //navigate to home
    reset({
      index: 0,
      routes: [
        {
          name: routes.TAB_MAIN,
        },
      ],
    });
  }

  return (
    <AppView className="w-full bg-[#141414] pt-7 pb-[18px] px-5 rounded-[15px] items-center">
      {screen === 'reset' && (
        <AppText className="text-lg text-white font-bold font-ROBOTO_700 text-center -mt-4 mb-4">
          Reset your Password
        </AppText>
      )}
      {error !== '' && (
        <AppText className="font-medium font-MANROPE_500 text-sm text-red mb-4 -mt-2">
          {error}
        </AppText>
      )}

      <CountryPicker
        lang="en"
        show={isCountryCode}
        pickerButtonOnPress={item => {
          setCountryCode({
            cc: item.dial_code,
            cf: item.flag,
          });
          setIsCountryCode(false);
        }}
        style={{
          modal: {
            height: 500,
          },
        }}
        onBackdropPress={() => setIsCountryCode(false)}
      />

      {screen === 'signUp' && (
        <>
          <TextInput
            placeholder="Full Names"
            value={fullname}
            onChangeText={setFullname}
            placeholderTextColor={colors.GREY_100}
            style={[
              styles.textInput,
              Platform.OS === 'android' && {
                fontSize: Size.calcHeight(14.5),
                paddingTop: Size.calcHeight(14),
                paddingBottom: Size.calcHeight(15),
              },
            ]}
          />
          <AppView
            style={[
              styles.textInput,
              Platform.OS === 'android' && {
                paddingTop: Size.calcHeight(2),
                paddingBottom: Size.calcHeight(3),
              },
            ]}
            className="flex-row items-center my-6 mb-5">
            <Pressable
              style={[styles.center, {columnGap: 4}]}
              onPress={() => setIsCountryCode(true)}>
              <AppText>{countryCode.cf}</AppText>
              <AppText style={styles.text}>{countryCode.cc}</AppText>
              <DropDwn />
            </Pressable>
            <TextInput
              value={phoneNo}
              onChangeText={setPhoneNo}
              keyboardType="number-pad"
              // maxLength={} TODO: regulate max base on country code
              style={[styles.text, {flex: 1, marginLeft: 10}]}
            />
          </AppView>
        </>
      )}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={colors.GREY_100}
        style={[
          styles.textInput,
          Platform.OS === 'android' && {
            fontSize: Size.calcHeight(14.5),
            paddingTop: Size.calcHeight(14),
            paddingBottom: Size.calcHeight(15),
          },
        ]}
      />

      {screen !== 'reset' && (
        <AppView
          style={[
            styles.textInput,
            Platform.OS === 'android' && [
              styles.adjust,
              {paddingTop: 2, paddingBottom: 3},
            ],
          ]}
          className="flex-row items-center my-6 mt-5 mb-5">
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={colors.GREY_100}
            secureTextEntry={toogle}
            style={[styles.text, {flex: 1}]}
          />
          <TouchableOpacity
            onPress={setToogle}
            className="mx-3"
            style={Platform.OS === 'android' && {marginRight: 15}}>
            <EyeIcon />
          </TouchableOpacity>
        </AppView>
      )}

      {screen === 'reset' && (
        <View>
          <AppButton
            title="Reset Password"
            isLoading={loading}
            bgColor={colors.RED}
            onPress={() => handleRest()}
            style={{
              marginTop: Size.calcHeight(25),
              marginBottom: Size.calcHeight(25),
              borderRadius: 30,
            }}
          />
        </View>
      )}

      {screen === 'login' && (
        <>
          <AppButton
            isLoading={loading}
            title="Login"
            bgColor={colors.RED}
            onPress={handleLogin}
            style={{marginTop: Size.calcHeight(20), borderRadius: 30}}
          />

          <AppButton
            title="Skip"
            bgColor={colors.GREY_700}
            onPress={handleSkip}
            style={{marginTop: Size.calcHeight(20), borderRadius: 30}}
          />
        </>
      )}

      {screen === 'signUp' && (
        <AppView style={{marginTop: Size.calcHeight(-10)}}>
          <AppView className="flex-row items-center justify-center my-2 mb-3">
            <Pressable
              onPress={() => setIsPromotion(!isPromotion)}
              style={[
                styles.checkbox,
                styles.center,
                isPromotion && {backgroundColor: colors.RED},
              ]}>
              {isPromotion && <CheckIcon width={14} height={20} />}
            </Pressable>
            <AppText className="text-center font-normal font-MANROPE_400 text-xs text-grey_white">
              Receive promotion and notification emails
            </AppText>
          </AppView>
          <AppButton
            isLoading={loading}
            title="Create a New Account"
            bgColor={colors.RED}
            onPress={handleSignUp}
            style={{borderRadius: 30}}
          />
        </AppView>
      )}

      {(screen === 'signUp' || screen === 'login') && (
        <Pressable
          onPress={() =>
            navLogin.navigate(
              screen === 'login' ? routes.SIGNUP_SCREEN : routes.LOGIN_SCREEN,
            )
          }
          style={{marginTop: Size.calcHeight(28)}}>
          <AppText className="font-normal font-MANROPE_400 text-base text-red">
            {screen === 'login' ? 'Create a New Account' : 'Login'}
          </AppText>
        </Pressable>
      )}

      {screen === 'signUp' && (
        <AppText style={styles.text} className="mt-2">
          If you already have a Reeplay Account
        </AppText>
      )}

      {screen === 'login' && (
        <>
          <AppText className="text-[13px] text-grey_100 font-normal font-MANROPE_400 text-center mt-5">
            Forgot your Password?
          </AppText>
          <Pressable
            onPress={() => navLogin.navigate(routes.RESET_PASSWORD_SCREEN)}
            style={{marginTop: Size.calcHeight(10)}}>
            <AppText
              style={Platform.OS === 'android' && {fontSize: 14}}
              className="font-bold font-MANROPE_700 text-[13px] text-red">
              Reset it
            </AppText>
          </Pressable>
        </>
      )}
    </AppView>
  );
};

export default AuthFormComponent;

const styles = StyleSheet.create({
  textInput: {
    width: '95%',
    borderColor: colors.RED,
    borderWidth: 3,
    fontWeight: '400',
    fontFamily: fonts.MANROPE_400,
    fontSize:
      Platform.OS === 'ios' ? Size.calcHeight(14) : Size.calcHeight(15.5),
    color: colors.GREY_100,
    paddingLeft:
      Platform.OS === 'ios' ? Size.calcHeight(20) : Size.calcHeight(26),
    paddingTop:
      Platform.OS === 'ios' ? Size.calcHeight(17) : Size.calcHeight(14),
    paddingBottom:
      Platform.OS === 'ios' ? Size.calcHeight(18) : Size.calcHeight(15),
    borderRadius: 30,
  },
  adjust: {
    paddingVertical: Size.calcHeight(3),
    paddingLeft: Size.calcHeight(18),
  },
  text: {
    fontWeight: '400',
    fontFamily: fonts.MANROPE_400,
    fontSize:
      Platform.OS === 'ios' ? Size.calcHeight(14) : Size.calcHeight(15.5),
    color: colors.GREY_100,
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 15,
    height: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.GREY_WHITE,
    marginRight: 5,
  },
});
