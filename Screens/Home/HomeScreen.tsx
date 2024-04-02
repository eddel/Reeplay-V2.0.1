import {
  Animated,
  FlatList,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Header from './Header';

import Slider from './components/SliderContainer';
import colors from '@/configs/colors';
import ContinueWatchingComponent from './ContinueWatchingComponent';
import {ContinueWatching, HeroSliderData, TrendingNow} from '@/configs/data';
import {AppText, AppView, TouchableOpacity} from '@/components';
import SwiperContainer from './components/SwiperContainer';
import SectionHeader from './components/SectionHeader';
import {Fragment, useEffect, useLayoutEffect, useRef, useState} from 'react';
import AppCategories from '@/components/AppCategories';
import Size from '@/Utils/useResponsiveSize';
import Sections from './components/Sections';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNav, TabMainNavigation} from '@/types/typings';
import routes from '@/navigation/routes';
import BlurView from 'react-native-blur-effect';
import {BlurView as Blur} from '@react-native-community/blur';
import {HAS_SKIPPED} from '../authentication/components/AuthFormComponent';
import {getData} from '@/Utils/useAsyncStorage';
import {previewContentType} from '@/navigation/AppNavigator';

const HomeScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isScrolled, setIsScrolled] = useState(0);
  const {navigate} = useNavigation<HomeScreenNav>();
  const {navigate: nav} = useNavigation<TabMainNavigation>();

  const [isSkipped, setIsSkipped] = useState<boolean>(false);

  async function getSkippedState() {
    const hasSkipped = await getData(HAS_SKIPPED);
    if (hasSkipped) {
      setIsSkipped(true);
    }
  }

  useEffect(() => {
    const listernerID = scrollY.addListener(({value}) => {
      if (value < 0) return;
      setIsScrolled(value);
    });

    return () => {
      scrollY.removeListener(listernerID);
    };
  }, [scrollY]);
  // Update isScrolled state based on scroll position
  useEffect(() => {
    getSkippedState();
  }, []);

  return (
    <>
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
      {/* //Header */}
      <Header scroll={isScrolled} />

      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      {/* HOME SCROLL */}
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        style={{backgroundColor: colors.DEEP_BLACK, position: 'relative'}}>
        <Slider data={HeroSliderData} />

        <AppView className="mt-8 pl-5">
          {isSkipped ? (
            <>
              <AppText className="text-lg text-white font-bold font-MANROPE_700">
                Continue watching
              </AppText>
              <FlatList
                data={ContinueWatching}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({item, index}) => {
                  return <ContinueWatchingComponent item={item} key={index} />;
                }}
              />
            </>
          ) : (
            <>
              <AppCategories
                title="Popular on REEPLAY"
                movieCategories={TrendingNow}
                onPress={() => console.log('popular')}
                style={{marginRight: Size.calcHeight(12)}}
                onPressMovie={() =>
                  nav(routes.PREVIEW_SCREEN, {
                    content: previewContentType.film,
                  })
                }
              />
              <AppView className="flex-row items-center justify-center gap-x-1.5 -mb-4 mt-5">
                {[...Array(5)].map((item, i) => {
                  const active = i === 1 || i === 2 || i === 3;
                  const color = active ? colors.RED : 'rgba(255, 19, 19, 0.4)';
                  return (
                    <View
                      key={i}
                      style={{
                        width: active ? 10 : 7,
                        height: active ? 10 : 7,
                        borderRadius: 10,
                        backgroundColor: color,
                      }}
                    />
                  );
                })}
              </AppView>
            </>
          )}
        </AppView>

        <AppView className="mt-8">
          <AppView className="pl-5">
            <SectionHeader
              title="Genres"
              btnText="SEE ALL"
              headerStyle={{marginRight: 5}}
              onPress={() => navigate(routes.LIBRARY_SCREEN)}
            />
          </AppView>
          <SwiperContainer />
        </AppView>

        <Sections isSkipped={isSkipped} />
      </Animated.ScrollView>
    </>
  );
};

export default HomeScreen;
