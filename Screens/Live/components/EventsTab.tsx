import {Animated, StyleSheet, View} from 'react-native';
import React from 'react';
import Swiper from './Swiper';
import {TrendingNow} from '@/configs/data';
import Size from '@/Utils/useResponsiveSize';
import {AppText, AppView} from '@/components';
import OthersView from './OthersView';

interface Props {
  scrollY: Animated.Value;
}

const EventsTab = ({scrollY}: Props) => {
  return (
    <View>
      {TrendingNow.length > 0 ? (
        <>
          <Swiper
            data={TrendingNow.slice(1)}
            title="Popular Events"
            containerStyle={{height: 171, width: Size.getWidth()}}
            mainStyle={{paddingLeft: 0}}
            spacing={8}
            scrollY={scrollY}
            headerStyle={{marginLeft: 20}}
          />

          <AppView className="px-5 mt-8 mb-20">
            <OthersView data={TrendingNow} title="Others in Events" />
          </AppView>
        </>
      ) : (
        <AppText
          style={{alignSelf: 'center'}}
          className="mt-16 text-center font-ROBOTO_400 font-normal text-sm text-dark_grey max-w-[170]">
          No content available now, kindly check back later
        </AppText>
      )}
    </View>
  );
};

export default EventsTab;

const styles = StyleSheet.create({});
