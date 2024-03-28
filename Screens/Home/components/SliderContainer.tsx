import {
  Animated,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import colors from '@/configs/colors';
import LinearGradient from 'react-native-linear-gradient';
import {AppText, AppView} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import Caurosel from './Caurosel';
import MaskedView from '@react-native-masked-view/masked-view';
import {Rect, Svg} from 'react-native-svg';
import {HeroSliderDataProps, LiveSliderDataProps} from '@/types/data.types';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNav} from '@/types/typings';

const SLIDER_HEIGHT = Size.getHeight() * 0.62;
const ITEM_WIDTH = Size.getWidth() * 0.72;
const SPACER_SIZE = (Size.getWidth() - ITEM_WIDTH) / 3;

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

interface SliderProps {
  data: HeroSliderDataProps[] | LiveSliderDataProps[];
  live?: boolean;
}

const Slider = ({data, live}: SliderProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const movieData = [{title: 'spacer'}, ...data, {title: 'spacer'}];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <AppView style={{height: SLIDER_HEIGHT}} className="relative z-0">
      <LinearGradient
        colors={['rgb(0,0,0)', 'rgba(0,0,0,0.65)', 'transparent']}
        style={styles.gradientStyles}
      />
      <LinearGradient
        colors={[
          'transparent',
          'transparent',
          'rgba(0,0,0,0.25)',
          'rgba(0,0,0,0.45)',
          'rgba(0,0,0,0.99)',
        ]}
        style={[
          styles.gradientStyles,
          {bottom: 0, zIndex: 0, height: SLIDER_HEIGHT},
        ]}
      />

      {!live && (
        <BackDrop data={data} curIndex={currentIndex} scrollX={scrollX} />
      )}

      {/* Image caurosel */}
      <Animated.FlatList
        data={movieData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'flex-end',
          marginBottom: Size.calcHeight(40),
        }}
        keyExtractor={(_, index) => index.toString()}
        snapToInterval={ITEM_WIDTH + 2}
        onViewableItemsChanged={({viewableItems}) => {
          // Log the current index
          if (viewableItems.length > 0) {
            const currentIndex = viewableItems[0].index || 0;
            setCurrentIndex(currentIndex);
          }
        }}
        decelerationRate={0}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          if (item.title === 'spacer')
            return <View style={{width: SPACER_SIZE}} />;

          const isCurrentIndex = index === currentIndex + 1;

          const inputRange = [
            (index - 2) * ITEM_WIDTH,
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
          ];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -30, 0],
          });

          return (
            <Caurosel
              item={item}
              currentIndex={isCurrentIndex}
              translate={translateY}
              live={live}
            />
          );
        }}
      />

      <Indicators items={movieData} currentIndex={currentIndex} />
    </AppView>
  );
};

interface BackDropOptions extends SliderProps {
  scrollX: Animated.Value;
  curIndex: number;
}

const BackDrop = ({data, scrollX, curIndex}: BackDropOptions) => {
  const MainItem = [
    {title: 'spacer', colors: []},
    ...data,
    {title: 'spacer', colors: []},
  ];
  return (
    <AppView
      style={{
        zIndex: -1,
      }}
      className="w-full absolute h-full">
      <FlatList
        data={MainItem}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          if ('colors' in item && item.colors.length === 0) return null;
          const inputRange = [
            (index - 2) * ITEM_WIDTH,
            (index - 1) * ITEM_WIDTH,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-Size.getWidth(), 0],
          });
          return (
            <>
              {Platform.OS === 'android' ? (
                <Animated.View
                  style={{
                    height: SLIDER_HEIGHT,
                    width: '100%',
                  }}>
                  <LinearGradient
                    //@ts-ignore
                    colors={MainItem[curIndex + 1].colors}
                    style={{height: SLIDER_HEIGHT, width: '100%'}}
                  />
                </Animated.View>
              ) : (
                <MaskedView
                  style={{
                    position: 'absolute',
                    height: SLIDER_HEIGHT,
                    width: '100%',
                  }}
                  maskElement={
                    <AnimatedSvg
                      width={Size.getWidth()}
                      height={SLIDER_HEIGHT}
                      viewBox={`0, 0, ${Size.getWidth()} ${SLIDER_HEIGHT}`}
                      style={{transform: [{translateX}]}}>
                      <Rect
                        x="0"
                        y="0"
                        width={Size.getWidth()}
                        height={SLIDER_HEIGHT}
                        fill="black"
                      />
                    </AnimatedSvg>
                  }>
                  {'colors' in item && (
                    <LinearGradient
                      colors={item.colors}
                      style={{height: SLIDER_HEIGHT, width: '100%'}}
                    />
                  )}
                </MaskedView>
              )}
            </>
          );
        }}
      />
    </AppView>
  );
};

interface indicatorData {
  items: any[];
  currentIndex: number;
}

const Indicators = ({items, currentIndex}: indicatorData) => {
  return (
    <AppView className="flex-row items-center justify-center gap-x-1.5 -mt-9">
      {items.map((item, i) => {
        if (item.title === 'spacer') return null;

        const color =
          currentIndex + 1 === i ? colors.RED : 'rgba(255, 19, 19, 0.4)';
        return (
          <View
            key={i}
            style={{
              width: 23,
              height: 3,
              borderRadius: 10,
              backgroundColor: color,
            }}
          />
        );
      })}
    </AppView>
  );
};

export default Slider;

const styles = StyleSheet.create({
  gradientStyles: {
    width: '100%',
    height: Size.calcHeight(130),
    zIndex: 1,
    position: 'absolute',
  },
});
