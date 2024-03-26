import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import colors from '@/configs/colors';
import ScreenBrightness from 'react-native-screen-brightness';

const BrightnessBar = () => {
  const translateY = useSharedValue(0);

  function setBrightness(value: number) {
    const brightness = (1 - value / 185).toFixed(1);
    ScreenBrightness.setBrightness(brightness);
  }

  const context = useSharedValue({y: 0});
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(0, Math.min(translateY.value, 185));

      runOnJS(setBrightness)(translateY.value);
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  useEffect(() => {
    ScreenBrightness.getBrightness().then((brightness: number) => {
      translateY.value = brightness * 185;
    });
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[styles.container, rBottomSheetStyle]}></Animated.View>
    </GestureDetector>
  );
};

export default BrightnessBar;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: 6,
    flex: 1,
    backgroundColor: colors.WHITE,
    position: 'absolute',
    top: 0,
    borderRadius: 5,
  },
});
