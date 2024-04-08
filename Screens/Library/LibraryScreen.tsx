import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  AppImage,
  AppScreen,
  AppText,
  AppView,
  TouchableOpacity,
} from '@/components';
import {Dropdown} from '@/assets/icons';
import {AllCateegories, LibraryData, movieGenre} from '@/configs/data';
import Size from '@/Utils/useResponsiveSize';
import useToggle from '@/Hooks/useToggle';
import {previewContentType} from '@/navigation/AppNavigator';
import routes from '@/navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {TabMainNavigation} from '@/types/typings';
import BlurView from 'react-native-blur-effect';
import {BlurView as Blur} from '@react-native-community/blur';
import {MovieVideo} from '../Home/HomeScreen';

const LibraryScreen = () => {
  const {navigate} = useNavigation<TabMainNavigation>();
  const [genre, setGenre] = useState<string | null>(null);
  const [categoriesTxt, setCategoriesTxt] = useState<string>('All Categories');
  const [genreTxt, setGenreTxt] = useState<string>('Movies');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  function resetState() {
    setGenre(null);
  }

  function handleSelect(value: string) {
    if (genre === 'movies') setGenreTxt(value);
    if (genre === 'categories') setCategoriesTxt(value);
    resetState();
  }

  return (
    <>
      <AppView
        style={{
          minHeight: Size.calcHeight(90),
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
      <AppScreen containerStyle={{position: 'relative', paddingTop: 5}}>
        {genre !== null && (
          <Pressable style={styles.overlay} onPress={resetState} />
        )}
        <AppView className="relative z-10 flex-row items-center my-3 mb-4 gap-x-4">
          <TouchableOpacity
            className="flex-row items-center gap-x-1.5"
            onPress={() => [setGenre('movies'), setSelectedItems(movieGenre)]}>
            <AppText className="font-normal font-ROBOTO_400 text-white text-[15px]">
              {genreTxt}
            </AppText>
            <Dropdown />
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row items-center gap-x-1.5"
            onPress={() => [
              setGenre('categories'),
              setSelectedItems(AllCateegories),
            ]}>
            <AppText className="font-normal font-ROBOTO_400 text-white text-[15px]">
              {categoriesTxt}
            </AppText>
            <Dropdown />
          </TouchableOpacity>

          {genre !== null && (
            <AppView
              style={genre === 'categories' && {left: 60}}
              className="absolute top-6 w-[174px] space-y-4 pb-5 pt-2 bg-black/70">
              {selectedItems.map((txt, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleSelect(txt)}>
                    <AppText className="text-center text-white text-[15px] font-normal font-ROBOTO_400">
                      {txt}
                    </AppText>
                  </TouchableOpacity>
                );
              })}
            </AppView>
          )}
        </AppView>
        <AppView className="mb-[92px]">
          <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.centerContent}>
            {LibraryData.map((lib, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  key={index}
                  onPress={() =>
                    navigate(routes.PREVIEW_SCREEN, {
                      content: previewContentType.film,
                      videoURL: MovieVideo,
                    })
                  }>
                  <AppImage source={lib.image} style={styles.image} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </AppView>
      </AppScreen>
    </>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  image: {
    width: Size.getWidth() / 3 - 20,
    height: 133,
    borderRadius: 15,
  },
  centerContent: {
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    columnGap: Size.calcHeight(10),
    rowGap: Size.calcHeight(15),
    paddingBottom: 20,
  },
  overlay: {
    width: '100%',
    height: '200%',
    position: 'absolute',
    zIndex: 10,
  },
});
