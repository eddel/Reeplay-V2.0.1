import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from './routes';
import HomeScreen from '@/Screens/Home/HomeScreen';
import LiveScreen from '@/Screens/Live/LiveScreen';
import UpcomingScreen from '@/Screens/Upcoming/UpcomingScreen';
import LibraryScreen from '@/Screens/Library/LibraryScreen';
import MyTabBar from './components/TabView';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

export type BottomNavigator = {
  [routes.HOME_SCREEN]: undefined;
  [routes.LIVE_SCREEN]: undefined;
  [routes.UPCOMING_SCREEN]: undefined;
  [routes.LIBRARY_SCREEN]: undefined;
};

export type TabNavParams = NativeStackScreenProps<BottomNavigator>;

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.HOME_SCREEN}
      tabBar={props => (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'transparent',
          }}>
          <MyTabBar {...props} />
        </View>
      )}
      // sceneContainerStyle={{
      //   backgroundColor: 'transparent',
      // }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
      }}>
      <Tab.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={routes.LIVE_SCREEN} component={LiveScreen} />
      <Tab.Screen name={routes.UPCOMING_SCREEN} component={UpcomingScreen} />
      <Tab.Screen name={routes.LIBRARY_SCREEN} component={LibraryScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
