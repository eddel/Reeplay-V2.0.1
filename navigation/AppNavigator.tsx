import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import AppStack from './AppStack';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import routes from '@/navigation/routes';
import Splashscreen from '@/Screens/Splashscreen/Splashscreen';
import OnboardingScreen from '@/Screens/authentication/OnboardingScreen';
import AuthNavigation from './AuthNavigation';
import TabNavigation from './TabNavigation';
import FullScreenModal from '@/Screens/VideoScreen/FullScreenModal';
import PreviewScreen from '@/Screens/Preview/PreviewScreen';
import CastScreeen from '@/Screens/Preview/CastScreeen';
import DownoadScreen from '@/Screens/Download/DownoadScreen';
import WatchlistScreen from '@/Screens/Menu/WatchlistScreen';
import InterestScreen from '@/Screens/authentication/InterestScreen';
import SettingScreen from '@/Screens/Settings/SettingScreen';
import PrivacyScreen from '@/Screens/support/PrivacyScreen';
import AboutUs from '@/Screens/support/AboutUs';
import TermScreen from '@/Screens/support/TermScreen';
import NotificatoinScreen_S from '@/Screens/Settings/NotificatoinScreen_S';
import Search from '@/Screens/Search/Search';
import GetStartedScreen from '@/Screens/authentication/GetStartedScreen';
import {useNavigation} from '@react-navigation/native';

const RootStack = createNativeStackNavigator();

export enum fullVideoType {
  'live',
  'series',
  'default',
}

export enum previewContentType {
  'tv series',
  'music video',
  'film',
}

export type RootStackParamList = {
  [routes.SPLASH_SCREEN]: undefined;
  [routes.ONBOARDING_SCREEN]: undefined;
  [routes.AUTH]: any;
  [routes.MAIN]: any;
  [routes.TAB_MAIN]: any;
  [routes.PREVIEW_SCREEN]: {
    content: previewContentType;
    contentType?: string;
    contentPrice?: string;
  };
  [routes.WATCHLIST_SCREEN]: undefined;
  [routes.CAST_SCREEN]: undefined;
  [routes.DOWNLOAD_SCREEN]: undefined;
  [routes.SETTINGS_SCREEN]: undefined;
  [routes.PRIVACY_SCREEN]: undefined;
  [routes.ABOUT_SCREEN]: undefined;
  [routes.TERMS_SCREEN]: undefined;
  [routes.SEARCH_SCREEN]: undefined;
  [routes.NOTIFICATION_SCREEN_S]: undefined;
  [routes.INTEREST_SCREEN]: {
    isSettings: boolean;
  };
  [routes.FULL_SCREEN_VIDEO]: {
    videoURL: string;
    type: fullVideoType;
    channelImage?: any;
    vote?: boolean;
    donate?: boolean;
  };
};

export type RootNav = NativeStackNavigationProp<RootStackParamList>;

const AppNavigator = ({lockApp}: {lockApp: boolean}): JSX.Element => {
  //Run logic to show onboarding screen
  const navigation = useNavigation<RootNav>();
  useEffect(() => {
    console.log('first');
    if (lockApp) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: routes.AUTH,
          },
        ],
      });
    }
  });

  return (
    <RootStack.Navigator
      initialRouteName={routes.SPLASH_SCREEN}
      screenOptions={{
        header: () => null,
      }}>
      <RootStack.Group>
        <RootStack.Screen
          name={routes.SPLASH_SCREEN}
          component={Splashscreen}
        />

        <RootStack.Screen
          name={routes.ONBOARDING_SCREEN}
          component={OnboardingScreen}
        />

        <RootStack.Screen name={routes.AUTH} component={AuthNavigation} />

        <RootStack.Screen name={routes.TAB_MAIN} component={TabNavigation} />

        <RootStack.Screen name={routes.MAIN} component={AppStack} />

        <RootStack.Screen
          name={routes.FULL_SCREEN_VIDEO}
          component={FullScreenModal}
        />

        <RootStack.Screen
          name={routes.PREVIEW_SCREEN}
          component={PreviewScreen}
        />

        <RootStack.Screen name={routes.CAST_SCREEN} component={CastScreeen} />

        <RootStack.Screen
          name={routes.DOWNLOAD_SCREEN}
          component={DownoadScreen}
        />

        <RootStack.Screen
          name={routes.WATCHLIST_SCREEN}
          component={WatchlistScreen}
        />

        <RootStack.Screen
          name={routes.INTEREST_SCREEN}
          component={InterestScreen}
        />

        <RootStack.Screen
          name={routes.SETTINGS_SCREEN}
          component={SettingScreen}
        />

        <RootStack.Screen
          name={routes.NOTIFICATION_SCREEN_S}
          component={NotificatoinScreen_S}
        />

        <RootStack.Screen
          name={routes.PRIVACY_SCREEN}
          component={PrivacyScreen}
        />

        <RootStack.Screen name={routes.TERMS_SCREEN} component={TermScreen} />

        <RootStack.Screen name={routes.ABOUT_SCREEN} component={AboutUs} />

        <RootStack.Screen name={routes.SEARCH_SCREEN} component={Search} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default AppNavigator;
