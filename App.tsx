/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from '@/navigation/AppNavigator';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from '@/store/app.store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  AppState,
  BackHandler,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getData, storeData} from './Utils/useAsyncStorage';
import {addEventListener} from '@react-native-community/netinfo';
import NetInfo from '@react-native-community/netinfo';
import AppModal from './components/AppModal';
import {AppText, AppView, TouchableOpacity} from './components';
import {CloseLogo} from './assets/icons';
import colors from './configs/colors';
import fonts from './configs/fonts';
import Size from './Utils/useResponsiveSize';
import routes from './navigation/routes';

const LEFT_APP_TIME = 'LEFT_APP_TIME';

function App(): React.JSX.Element {
  const [lockApp, setLockApp] = useState<boolean>(false);
  const appState = useRef(AppState.currentState);
  const [network, setNetwork] = useState<boolean | null>(true);
  const [showNetworkModal, setShowNetworkModal] = useState<boolean>(false);
  const navigationRef = useRef<any>(null);
  const date = new Date(1711214160358);

  const handleBackButtonPress = () => {
    console.log('checking...');
    if (
      navigationRef.current &&
      navigationRef.current.getCurrentRoute().index === 0
    ) {
      console.log('User pressed back button at index 0');
      return true;
    }
    // return false;
  };

  function refreshNetwork() {
    NetInfo.refresh().then(state => {
      if (state.isConnected) setNetwork(state.isConnected);
    });
  }

  async function checkLockAppLogic() {
    const date = new Date();
    const lastLeftTime = await getData(LEFT_APP_TIME);
    if (lastLeftTime) {
      if (date.getTime() >= Number(lastLeftTime)) {
        console.log(
          'The difference between the timestamps is greater than or equal to 10 minutes.',
        );
        setLockApp(true);
        navigationRef.current.reset({
          index: 0,
          routes: [{name: routes.AUTH}],
        });
      } else {
        console.log(
          'The difference between the timestamps is less than 10 minutes.',
        );
      }
    }
  }

  async function setLeftAppTime() {
    const date = new Date();

    await storeData(
      LEFT_APP_TIME,
      date.setTime(date.getTime() + 10 * 60 * 1000).toString(),
    );
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        checkLockAppLogic();
      }

      appState.current = nextAppState;
      if (appState.current === 'background') {
        console.log('first background');
        setLeftAppTime();
      }
    });

    let backHandler: any = null;
    if (Platform.OS === 'android') {
      backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackButtonPress,
      );
    }

    return () => {
      subscription.remove();
      if (backHandler) {
        backHandler.remove();
      }
    };
  }, []);

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      setNetwork(state.isConnected);
      if (state.isConnected) {
        setShowNetworkModal(false);
      } else {
        setShowNetworkModal(true);
      }
    });

    return () => {
      unsubscribe();
    };
  });
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar backgroundColor="#000" />
        <NavigationContainer ref={navigationRef}>
          <AppNavigator lockApp={lockApp} />
          {!network && (
            <AppModal
              isModalVisible={showNetworkModal}
              hideLoge
              hideCloseBtn
              style={{paddingBottom: 0}}
              replaceDefaultContent={
                <AppView className="h-full relative">
                  <AppView className="mb-[74px] mt-[60px] items-center">
                    <CloseLogo />
                    <AppText className="mt-5 leading-5 font-ROBOTO_400 text-[14px] text-black text-center">
                      Your internet connection is lost.{'\n'} Fix connection and
                      retry.
                    </AppText>
                  </AppView>
                  <TouchableOpacity
                    onPress={refreshNetwork}
                    style={{alignSelf: 'center'}}
                    className="absolute bottom-6 z-30">
                    <AppText style={styles.secondaryModalButtonText}>
                      Retry
                    </AppText>
                  </TouchableOpacity>
                </AppView>
              }
              handleClose={() => console.log('first')}
            />
          )}
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  secondaryModalButtonText: {
    color: colors.DEEP_BLACK,
    fontFamily: fonts.ROBOTO_400,
    fontSize: Size.calcWidth(16),
  },
});
