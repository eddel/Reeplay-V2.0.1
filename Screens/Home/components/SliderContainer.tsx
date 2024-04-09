import {
  Animated,
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import colors from '@/configs/colors';
import LinearGradient from 'react-native-linear-gradient';
import {AppImage, AppText, AppView} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import Caurosel from './Caurosel';
import {Rect, Svg} from 'react-native-svg';
import {HeroSliderDataProps, LiveSliderDataProps} from '@/types/data.types';
import Carousel from 'react-native-reanimated-carousel';

const SLIDER_HEIGHT =
  Platform.OS === 'ios' ? Size.getHeight() * 0.59 : Size.getHeight() * 0.62;
const ITEM_WIDTH = Size.getWidth() * 0.72;
const SPACER_SIZE = (Size.getWidth() - ITEM_WIDTH) / 3;
const WIDTH = Dimensions.get('window').width;

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

interface SliderProps {
  data: any; // HeroSliderDataProps[] | LiveSliderDataProps[];
  live?: boolean;
}

// Type definition for the FlatList component
type MyFlatList = FlatList<any>;

const Slider = ({data, live}: SliderProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [movieData, setMovieData] = useState([...data, ...data, ...data]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<MyFlatList>(null); // Reference to the FlatList component

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const secondToLastIndex = movieData.length - 2;
    const maxScroll = ITEM_WIDTH * secondToLastIndex - 120;

    if (contentOffsetX > maxScroll) {
      flatListRef.current?.scrollToOffset({offset: 0, animated: false});
    }

    if (contentOffsetX < 0) {
      flatListRef.current?.scrollToOffset({offset: maxScroll, animated: false});
    }
  };

  useEffect(() => {
    const listernerID = scrollX.addListener(({value}) => {
      if (value < 0) return;
    });

    return () => {
      scrollX.removeListener(listernerID);
    };
  }, [scrollX]);

  return (
    <AppView style={{height: SLIDER_HEIGHT}} className="relative w-full z-0">
      <LinearGradient
        colors={['rgb(0,0,0)', 'rgba(0,0,0,0.65)', 'transparent']}
        style={styles.gradientStyles}
      />
      <LinearGradient
        colors={
          Platform.OS === 'android'
            ? [
                'transparent',
                'transparent',
                'rgba(0,0,0,0.25)',
                'rgba(0,0,0,0.45)',
                'rgba(0,0,0,0.85)',
              ]
            : [
                'transparent',
                'transparent',
                'rgba(0,0,0,0.25)',
                'rgba(0,0,0,0.45)',
                'rgba(0,0,0,0.99)',
              ]
        }
        style={[
          styles.gradientStyles,
          {bottom: 0, zIndex: 0, height: SLIDER_HEIGHT},
        ]}
      />

      {!live && (
        <BackDrop data={[...data]} curIndex={currentIndex} scrollX={scrollX} />
      )}

      <View style={{flex: 1}}>
        <Carousel
          loop
          style={{
            marginTop: 122,
            alignItems: 'flex-end',
            alignSelf: 'flex-end',
            width: '100%',
            height: 385,
            justifyContent: 'center',
          }}
          width={Size.getWidth() * 0.912 - 6}
          height={410}
          pagingEnabled={true}
          mode="parallax"
          data={[...data]}
          scrollAnimationDuration={200}
          onSnapToItem={index => {
            console.log('current index:', index);
            setCurrentIndex(index);
          }}
          renderItem={({item, index}) => {
            return (
              <>
                <Caurosel
                  item={item}
                  currentIndex={index === currentIndex}
                  // translate={}
                  colors={live ? [] : item.colors2}
                  live={live}
                />
              </>
            );
          }}
        />
      </View>

      {/* Image caurosel */}
      {/* <Animated.FlatList
        ref={flatListRef}
        data={[...movieData]}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'flex-end',
          marginBottom: Size.calcHeight(40),
        }}
        keyExtractor={(_, index) => index.toString()}
        snapToInterval={Size.getWidth() - 98}
        onViewableItemsChanged={({viewableItems}) => {
          // Log the current index
          if (viewableItems.length > 0) {
            const currentIndex = viewableItems[0].index || 0;
            setCurrentIndex(currentIndex);
          }
        }}
        decelerationRate={0}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        onScrollEndDrag={event => {
          handleScroll(event);
        }}
        onMomentumScrollEnd={event => {
          handleScroll(event);
        }}
        renderItem={({item, index}) => {
          const last = index === movieData.length - 1;
          if (item.title === 'spacer')
            return (
              <AppView
                className={`relative z-10 ${
                  last ? 'rounded-l-md ml-1.5' : 'rounded-r-md mr-1.5'
                } overflow-hidden`}
                style={{
                  width: SPACER_SIZE + 10,
                  height: Size.calcHeight(382),
                }}>
                <AppImage
                  source={last ? data[0].image : data[data.length - 1].image}
                  style={{width: ITEM_WIDTH}}
                  className="absolute right-0 h-full z-10"
                />
              </AppView>
            );

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
            <>
              <Caurosel
                item={item}
                currentIndex={isCurrentIndex}
                translate={translateY}
                live={live}
              />
            </>
          );
        }}
      /> */}

      <Indicators items={[...data]} currentIndex={currentIndex} />
    </AppView>
  );
};

interface BackDropOptions {
  data: (
    | HeroSliderDataProps
    | LiveSliderDataProps
    | {
        title: string;
        colors: never[];
      }
  )[];
  scrollX: Animated.Value;
  curIndex: number;
}

const BackDrop = ({data, scrollX, curIndex}: BackDropOptions) => {
  const MainItem = data;

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

          return (
            <Animated.View
              style={{
                height: SLIDER_HEIGHT,
                width: '100%',
              }}>
              <LinearGradient
                //@ts-ignore
                colors={MainItem[curIndex].colors}
                style={{height: SLIDER_HEIGHT, width: '100%'}}
              />
            </Animated.View>
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
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex % 3 === 0) {
      setIndex(currentIndex);
    } else {
      const closestIndex = Math.floor(currentIndex / 3) * 3;
      setIndex(closestIndex);
    }
  }, [currentIndex]);

  return (
    <AppView className="flex-row items-center justify-center gap-x-[3px]">
      {items.map((item, i) => {
        if (item.title === 'spacer') return null;

        const activeArray = [index, index + 1, index + 2];

        const isNearActive = activeArray.includes(i);

        const color =
          currentIndex === i ? colors.RED : 'rgba(255, 19, 19, 0.4)';
        return (
          <View
            key={i}
            style={{
              width: isNearActive ? 23 : 6,
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
