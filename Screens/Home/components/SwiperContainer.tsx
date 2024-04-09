import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppImage, AppText, AppView, TouchableOpacity} from '@/components';
import {GenreTabs} from '@/configs/data';
import SwiperFlatList from 'react-native-swiper-flatlist';
import fonts from '@/configs/fonts';
import {MotiView} from 'moti';
import colors from '@/configs/colors';
import {Easing} from 'react-native-reanimated';
import Size from '@/Utils/useResponsiveSize';
import routes from '@/navigation/routes';
import {previewContentType} from '@/navigation/AppNavigator';
import {useNavigation} from '@react-navigation/native';
import {TabMainNavigation} from '@/types/typings';
import {MovieVideo} from '../HomeScreen';

interface GenreList {
  title: string;
  images: any[];
}

const SwiperContainer = () => {
  const {navigate} = useNavigation<TabMainNavigation>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevImages, setPrevImages] = useState<any[]>(GenreTabs[0].images);

  function handleTab(lists: GenreList, index: number) {
    setActiveIndex(index);
    setPrevImages(lists.images);
  }

  return (
    <AppView>
      <AppView
        style={{width: Size.getWidth(), overflow: 'hidden'}}
        className="pl-5">
        {/* HeaderTabs */}
        <FlatList
          data={GenreTabs}
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
                style={{marginHorizontal: 6}}
                onPress={() => handleTab(item, index)}>
                <AppText
                  style={show && {fontFamily: fonts.MANROPE_700}}
                  className="mx-1.5 font-MANROPE_400 text-[13px] text-white">
                  {item.title}
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

      {/* Main images */}
      <AppView>
        <SwiperFlatList
          showPagination={true}
          paginationActiveColor={colors.RED}
          paginationDefaultColor="rgba(255, 19, 19, 0.4)"
          paginationStyleItem={styles.pagination}
          data={prevImages}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigate(routes.PREVIEW_SCREEN, {
                  content: previewContentType.film,
                  videoURL: MovieVideo,
                })
              }>
              <AppImage key={index} style={styles.image} source={item} />
            </TouchableOpacity>
          )}
        />
      </AppView>
    </AppView>
  );
};

export default SwiperContainer;

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    backgroundColor: colors.RED,
    height: 1.5,
    marginTop: 4,
    transformOrigin: 'center',
  },
  pagination: {
    width: Size.calcAverage(23),
    height: Size.calcAverage(3),
    marginHorizontal: Size.calcWidth(3),
    marginTop: Size.calcHeight(52),
  },
  image: {
    width: Size.getWidth() - 32,
    height: Size.calcHeight(240),
    marginTop: Size.calcHeight(20),
    borderRadius: 15,
    marginHorizontal: 16,
  },
});
