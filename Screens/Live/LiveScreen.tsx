import {
  Animated,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Header from '@/Screens/Home/Header';
import colors from '@/configs/colors';
import Slider from '@/Screens/Home/components/SliderContainer';
import {LiveSliderData} from '@/configs/data';
import {AppText, AppView} from '@/components';
import SwiperContainer from '@/Screens/Home/components/SwiperContainer';
import DynamicViewContainer from './DynamicViewContainer';
import Size from '@/Utils/useResponsiveSize';
import BlurView from 'react-native-blur-effect';
import {BlurView as Blur} from '@react-native-community/blur';
import Orientation from 'react-native-orientation-locker';

const LiveScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollY2 = useRef(new Animated.Value(0)).current;
  const [isScrolled, setIsScrolled] = useState(0);
  const [orientation, setOrientation] = useState<string | null>(null);

  useEffect(() => {
    Orientation.getOrientation(orientation => {
      console.log('Current UI Orientation: ', orientation);
      setOrientation(orientation);
    });
  });

  useEffect(() => {
    const listernerID = scrollY.addListener(({value}) => {
      setIsScrolled(value);
      scrollY2.setValue(value);
    });

    return () => {
      scrollY.removeListener(listernerID);
    };
  }, [scrollY]);

  useEffect(() => {
    Orientation.lockToPortrait();
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
          <Header scroll={isScrolled} />
          <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor="transparent"
          />

          <ScrollView
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: false},
            )}
            scrollEventThrottle={16}
            decelerationRate="normal"
            bounces={false}
            showsVerticalScrollIndicator={false}
            style={{
              backgroundColor: colors.DEEP_BLACK,
              position: 'relative',
            }}>
            <Slider data={LiveSliderData} live />

            <DynamicViewContainer scrollY={scrollY2} />
          </ScrollView>
        </>
      ) : (
        <AppView className="w-full h-full bg-black" />
      )}
    </>
  );
};

export default LiveScreen;

const styles = StyleSheet.create({});
