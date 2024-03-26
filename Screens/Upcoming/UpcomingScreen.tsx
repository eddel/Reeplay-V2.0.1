import {Animated, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';
import {AppScreen, AppText, AppView} from '@/components';
import colors from '@/configs/colors';
import UpcomingView from './components/UpcomingView';
import upcomingData from '@/configs/upcomingData';
import {BlurView} from '@react-native-community/blur';
import Size from '@/Utils/useResponsiveSize';

const UpcomingScreen = () => {
  const [playingIndexes, setPlayingIndexes] = useState<number[]>([]);
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <>
      <AppView
        style={{minHeight: Size.calcHeight(90)}}
        className="absolute bottom-0 w-full z-20">
        <BlurView
          blurType="dark"
          blurAmount={20}
          style={{
            minHeight: Size.calcHeight(90),
            width: '100%',
          }}
        />
      </AppView>
      <AppScreen
        containerStyle={{
          backgroundColor: colors.DEEP_BLACK,
          paddingHorizontal: 0,
          paddingBottom: 80,
        }}>
        <AppText className="pl-5 font-bold font-LEXEND_700 text-[17px] text-grey_100 my-4">
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
  );
};

export default UpcomingScreen;
