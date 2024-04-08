import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {AppImage, AppVideo, AppView} from '@/components';
import VideoRef from 'react-native-video';
import colors from '@/configs/colors';
import {MotiImage, MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import {getData, storeData} from '@/Utils/useAsyncStorage';
import {useNavigation} from '@react-navigation/native';
import {SplashScreenProps} from '@/types/typings';
import routes from '@/navigation/routes';
import {useAppDispatch} from '@/Hooks/reduxHook';
import {setCredentials} from '@/store/slices/userSlice';

const HAS_ONBOARD = 'isOnboard';
export const hasUserDetails = 'user';
const HAS_LOCK_APP = 'HAS_LOCK_APP';

const Splashscreen = () => {
  const navigation = useNavigation<SplashScreenProps>();
  const dispatch = useAppDispatch();
  const videoRef = useRef<VideoRef>(null);
  const [showSplash, setShowSplash] = useState<boolean>(false);

  async function handleNav() {
    const hasOnboard = await getData(HAS_ONBOARD);
    if (hasOnboard) {
      //navigate to login
      navigation.replace(routes.AUTH);
    } else {
      await storeData(HAS_ONBOARD, 'true');
      // navigate to onboarding screen
      navigation.replace(routes.ONBOARDING_SCREEN);
    }
  }

  async function setDefaultLockState() {
    const lockState = await getData(HAS_LOCK_APP);
    if (!lockState) {
      await storeData(HAS_LOCK_APP, 'true');
    }
  }

  useEffect(() => {
    if (showSplash) {
      setTimeout(() => {
        handleNav();
      }, 2000);
    }
  }, [showSplash]);

  useEffect(() => {
    const getUser = async () => {
      const user = await getData(hasUserDetails);
      if (user) {
        const userDetails = JSON.parse(user);
        dispatch(setCredentials(userDetails));
      }
      console.log(user);
    };

    getUser();
    setDefaultLockState();
  }, []);

  return (
    <SafeAreaView style={[styles.center, styles.container]}>
      <StatusBar hidden />
      <AppVideo
        source={require('@/assets/videos/splash.mp4')}
        videoRef={videoRef}
        resizeMode="contain"
        paused={false}
        onEnd={() => setShowSplash(true)}
        style={{width: '100%', height: '100%'}}
      />

      {showSplash && (
        <>
          <AppView className="absolute w-full h-full justify-center items-center">
            <MotiImage
              from={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{
                type: 'timing',
                duration: 1000,
                easing: Easing.out(Easing.ease),
              }}
              source={require('@/assets/images/LogoReply.png')}
              style={{width: 200, height: 100, objectFit: 'contain'}}
            />
          </AppView>
          <MotiView
            from={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              type: 'timing',
              duration: 1200,
              easing: Easing.out(Easing.ease),
            }}
            style={{position: 'absolute', bottom: 32}}>
            <ActivityIndicator size={'large'} color={colors.RED} />
          </MotiView>
        </>
      )}
    </SafeAreaView>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.DEEP_BLACK,
    position: 'relative',
  },
});
