import {
  Animated,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Header from './Header';

import Slider from './components/SliderContainer';
import colors from '@/configs/colors';
import ContinueWatchingComponent from './ContinueWatchingComponent';
import {ContinueWatching, HeroSliderData} from '@/configs/data';
import {AppText, AppView, TouchableOpacity} from '@/components';
import SwiperContainer from './components/SwiperContainer';
import SectionHeader from './components/SectionHeader';
import {useEffect, useRef, useState} from 'react';
import AppCategories from '@/components/AppCategories';
import Size from '@/Utils/useResponsiveSize';
import Sections from './components/Sections';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNav} from '@/types/typings';
import routes from '@/navigation/routes';
import {BlurView} from '@react-native-community/blur';

const HomeScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isScrolled, setIsScrolled] = useState(0);
  const {navigate} = useNavigation<HomeScreenNav>();

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

  return (
    <>
      {/* //Header */}
      <Header scroll={isScrolled} />
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
        </AppView>

        <AppView className="mt-8">
          <AppView className="pl-5">
            <SectionHeader
              title="Genres"
              btnText="SEE ALL"
              onPress={() => navigate(routes.LIBRARY_SCREEN)}
            />
          </AppView>
          <SwiperContainer />
        </AppView>

        <Sections />
      </Animated.ScrollView>
    </>
  );
};

export default HomeScreen;
