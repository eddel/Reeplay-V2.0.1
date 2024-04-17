import {Animated, Platform, ScrollView} from 'react-native';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {AppScreen, AppText, AppView} from '@/components';
import colors from '@/configs/colors';
import UpcomingView from './components/UpcomingView';
import upcomingData from '@/configs/upcomingData';
import Size from '@/Utils/useResponsiveSize';
import BlurView from 'react-native-blur-effect';
import {BlurView as Blur} from '@react-native-community/blur';
import Orientation from 'react-native-orientation-locker';

const UpcomingScreen = () => {
  const [playingIndexes, setPlayingIndexes] = useState<number[]>([]);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [orientation, setOrientation] = useState<string | null>(null);

  useEffect(() => {
    Orientation.lockToPortrait();
  });

  useLayoutEffect(() => {
    Orientation.getOrientation(orientation => {
      console.log('Current UI Orientation: ', orientation);
      setOrientation(orientation);
    });
  });

  return (
    <>
      <AppView
        style={{
          minHeight: Size.calcHeight(90),
          backgroundColor: 'rgba(0, 0, 0, 0.59)',
        }}
        className="absolute bottom-0 w-full z-20">
        {Platform.OS === 'ios' ? (
          <Blur
            blurType="dark"
            blurAmount={120}
            style={{
              minHeight: Size.calcHeight(90),
              width: '100%',
            }}
          />
        ) : (
          <BlurView backgroundColor="rgba(0, 0, 0, 0.4)" blurRadius={120} />
        )}
      </AppView>
      {orientation === 'PORTRAIT' ? (
        <>
          <AppScreen
            containerStyle={{
              backgroundColor: colors.DEEP_BLACK,
              paddingHorizontal: 0,
              paddingBottom: Platform.OS === 'ios' ? 120 : 80,
            }}>
            <AppText className="pl-5 font-LEXEND_700 text-[17px] text-grey_100 my-4">
              COMING SOON
            </AppText>
            <AppView>
              <ScrollView
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {y: scrollY}}}],
                  {useNativeDriver: false},
                )}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}>
                {upcomingData.map((item, i) => {
                  return (
                    <UpcomingView
                      key={i}
                      items={item}
                      index={i}
                      scrollY={scrollY}
                      playingIndexes={playingIndexes}
                      setPlayingIndexes={setPlayingIndexes}
                    />
                  );
                })}
              </ScrollView>
            </AppView>
          </AppScreen>
        </>
      ) : (
        <AppView className="w-full h-full bg-black" />
      )}
    </>
  );
};

export default UpcomingScreen;
