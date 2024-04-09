import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppHeader, AppImage, AppScreen, AppText, AppView} from '@/components';

const NotificationScreen = () => {
  return (
    <AppScreen containerStyle={{paddingTop: 10, position: 'relative'}}>
      <AppHeader />
      <AppView className="absolute -z-[10px] -top-[70px] w-full items-center">
        <AppImage source={require('@/assets/images/Logo_L.png')} className="" />
      </AppView>
      <AppText className="font-MANROPE_700 text-white text-lg mt-12 mb-5">
        Notifications
      </AppText>

      <AppView>
        {[...Array(5)].map((_, i) => {
          return (
            <AppView key={i} className="mb-[13px] flex-row items-start">
              <Pressable>
                <AppImage
                  source={require('@/assets/images/bbn.png')}
                  className="w-[145px] h-[83px] rounded"
                />
              </Pressable>

              <AppView className="ml-5 flex-1">
                <AppText className="text-grey_100 font-LEXEND_700 text-xs">
                  NEW ARRIVALE
                </AppText>
                <AppText className="font-MANROPE_400 text-xs text-white">
                  NEW ARRIVAL Comedy I Horror I Adventure I Thriller I Romance I
                  Crime I Epic
                </AppText>
                <AppText className="font-MANROPE_500 text-[13px] text-yellow mt-[2px]">
                  1 hour ago
                </AppText>
              </AppView>
            </AppView>
          );
        })}
      </AppView>
    </AppScreen>
  );
};

export default NotificationScreen;
