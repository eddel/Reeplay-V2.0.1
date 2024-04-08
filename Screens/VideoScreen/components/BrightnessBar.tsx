import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import colors from '@/configs/colors';
import DeviceBrightness from '@adrianso/react-native-device-brightness';

const BrightnessBar = () => {
  const translateY = useSharedValue(0);

  const setBrightness = async (value: number) => {
    const invertedValue = 185 - value; // Invert the value
    const platformBrightnessValue =
      Platform.OS === 'ios' ? invertedValue : invertedValue / 185; // Adjust brightness value based on platform
    console.log(invertedValue);
    await DeviceBrightness.setBrightnessLevel(platformBrightnessValue);
  };

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
    const getBrightness = async () => {
      const brightness = await DeviceBrightness.getBrightnessLevel();
      console.log(brightness, 'yes');
      translateY.value =
        Platform.OS === 'ios'
          ? brightness * 185
          : Math.max(0, brightness * 185); // Clamp the brightness value to a minimum of 0
    };
    getBrightness();
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, rBottomSheetStyle]}>
        <View style={styles.bar} />
      </Animated.View>
    </GestureDetector>
  );
};

export default BrightnessBar;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    position: 'absolute',
    top: 0,
  },
  bar: {
    height: '100%',
    width: 6,
    flex: 1,
    backgroundColor: colors.WHITE,
    borderRadius: 5,
    marginLeft: 'auto',
  },
});
