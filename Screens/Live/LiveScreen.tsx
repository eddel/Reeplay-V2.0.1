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

const LiveScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollY2 = useRef(new Animated.Value(0)).current;
  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    const listernerID = scrollY.addListener(({value}) => {
      setIsScrolled(value);
      scrollY2.setValue(value);
    });

    return () => {
      scrollY.removeListener(listernerID);
    };
  }, [scrollY]);
  return (
    <>
      <Header scroll={isScrolled} />
      <AppView
        style={{
          minHeight: Size.calcHeight(90),
        }}
        className="absolute bottom-0 w-full z-20">
        {Platform.OS === 'ios' ? (
          <Blur
            blurType="dark"
            blurAmount={20}
            style={{
              minHeight: Size.calcHeight(90),
              width: '100%',
            }}
          />
        ) : (
          <BlurView
            backgroundColor="rgba(255, 255, 255, 0.1)"
            blurRadius={20}
          />
        )}
      </AppView>
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
        bounces={false}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: colors.DEEP_BLACK,
          position: 'relative',
        }}>
        <Slider data={LiveSliderData} live />

        <DynamicViewContainer scrollY={scrollY2} />
      </ScrollView>
    </>
  );
};

export default LiveScreen;

const styles = StyleSheet.create({});
