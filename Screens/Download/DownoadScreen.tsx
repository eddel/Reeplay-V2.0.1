import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AppHeader,
  AppImage,
  AppScreen,
  AppText,
  AppView,
  TouchableOpacity,
} from '@/components';
import {TrendingNow} from '@/configs/data';
import {DeleteIcon} from '@/assets/icons';
import {useNavigation} from '@react-navigation/native';
import {DownloadScreenNav} from '@/types/typings';
import routes from '@/navigation/routes';
import {previewContentType} from '@/navigation/AppNavigator';

const DownoadScreen = () => {
  const {navigate} = useNavigation<DownloadScreenNav>();
  return (
    <AppScreen containerStyle={{paddingTop: 15}}>
      <AppHeader />

      <AppView className="mt-6 bg-red pt-3 px-1 rounded-[15px]">
        <AppView className="flex-row items-center justify-between px-3 pb-2">
          <AppView>
            <AppText className="font-normal font-LEXEND_400 text-base text-white ">
              REEPLAY
            </AppText>
            <AppText className="font-medium font-MANROPE_500 text-white text-xs">
              Ads that meet your interest
            </AppText>
          </AppView>
          <TouchableOpacity className="bg-white py-2 px-3 rounded-[40px]">
            <AppText className="font-semibold font-MANROPE_600 text-red text-xs">
              VISIT STORE
            </AppText>
          </TouchableOpacity>
        </AppView>

        <AppView className="h-[191px] mb-1 rounded-b-[15px] overflow-hidden border-[2px] border-black">
          <AppImage
            source={require('@/assets/images/Ads.png')}
            className="h-full rounded-b-[15px]"
          />
        </AppView>
      </AppView>

      <AppView className="mt-6 mb-6 flex-row items-center justify-between">
        <AppView className="w-fit ml-4">
          <AppText className="font-ROBOTO_700 font-bold text-white text-[17px]">
            DOWNLOADS
          </AppText>
          <AppView className="w-[82px] mt-[3px] ml-[10px] h-[2px] bg-grey_100 rounded-[1px]" />
        </AppView>

        <AppText className="font-normal font-MANROPE_400 text-[13px] text-yellow">
          25 downloads
        </AppText>
      </AppView>

      <FlatList
        data={TrendingNow}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        // bounces={false}
        renderItem={({item}) => {
          return (
            <AppView className="pb-1 flex-row items-center mb-2 border-b border-grey_200/10">
              <TouchableOpacity
                onPress={() =>
                  navigate(routes.PREVIEW_SCREEN, {
                    content: previewContentType.film,
                  })
                }>
                <AppImage
                  source={item.image}
                  className="w-[203px] h-[106px] rounded"
                />
              </TouchableOpacity>

              <AppView className="justify-center items-center flex-1">
                <AppText className="font-bold font-LEXEND_700 text-base text-white text-center leading-[17px] max-w-[75px]">
                  {item.title}
                </AppText>

                <AppView className="flex-row items-center gap-x-2 mt-2">
                  <AppText className="font-normal font-MANROPE_400 text-xs text-yellow">
                    {item.viewersDiscretion}
                  </AppText>
                  <AppView className="w-[1px] h-[68%] bg-white" />
                  <AppText className="font-normal font-MANROPE_400 text-xs text-white">
                    98 MB
                  </AppText>
                  <AppView className="w-[1px] h-[68%] mr-[2px] bg-white" />
                  <TouchableOpacity>
                    <DeleteIcon />
                  </TouchableOpacity>
                </AppView>
              </AppView>
            </AppView>
          );
        }}
      />
    </AppScreen>
  );
};

export default DownoadScreen;

const styles = StyleSheet.create({});
