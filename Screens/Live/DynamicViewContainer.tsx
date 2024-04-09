import {
  Animated,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppText, AppView} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import fonts from '@/configs/fonts';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import colors from '@/configs/colors';
import {LiveTabs} from '@/configs/data';
import SelectTabs from './SelectTabs';
import AllTabs from './components/AllTabs';
import ChannelsTabs from './components/ChannelsTabs';
import EventsTab from './components/EventsTab';
import TvShowsTab from './components/TvShowsTab';
import SportsTab from './components/SportsTab';
import PodcastTab from './components/PodcastTab';

interface Props {
  scrollY: Animated.Value;
}

const DynamicViewContainer = ({scrollY}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabTitle, setTabTitle] = useState('All');

  function handleTab(title: string, index: number) {
    setActiveIndex(index);
    setTabTitle(title);
  }

  return (
    <AppView className="mt-5">
      <AppView
        style={{width: Size.getWidth(), overflow: 'hidden'}}
        className="px-5">
        <FlatList
          data={LiveTabs}
          keyExtractor={(_, i) => i.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 15,
          }}
          renderItem={({item, index}) => {
            const show = activeIndex === index;
            return (
              <Pressable
                style={{marginHorizontal: 4}}
                onPress={() => handleTab(item, index)}>
                <AppText
                  style={
                    show && {fontFamily: fonts.MANROPE_700}
                  }
                  className="mx-1.5 font-MANROPE_400 text-[13px] text-white">
                  {item}
                </AppText>
                <MotiView
                  style={styles.bar}
                  from={{transform: [{scaleX: 0}]}}
                  animate={{transform: [{scaleX: show ? 1 : 0}]}}
                  transition={{
                    type: 'timing',
                    duration: 300,
                    easing: Easing.out(Easing.ease),
                  }}
                />
              </Pressable>
            );
          }}
        />
      </AppView>

      <SelectTabs
        tabs={[
          {
            tab: 'All',
            element: <AllTabs />,
          },
          {
            tab: 'Channels',
            element: <ChannelsTabs scrollY={scrollY} />,
          },
          {
            tab: 'Events',
            element: <EventsTab scrollY={scrollY} />,
          },
          {
            tab: 'TV Shows',
            element: <TvShowsTab scrollY={scrollY} />,
          },
          {
            tab: 'Sports',
            element: <SportsTab scrollY={scrollY} />,
          },
          {
            tab: 'Podcast',
            element: <PodcastTab scrollY={scrollY} />,
          },
        ]}
        selectedTab={tabTitle}
      />
    </AppView>
  );
};

export default DynamicViewContainer;

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    backgroundColor: colors.RED,
    height: 1.5,
    marginTop: 4,
    transformOrigin: 'center',
  },
});
