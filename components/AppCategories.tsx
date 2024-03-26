import {
  FlatList,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import SectionHeader, {
  headerProps,
} from '@/Screens/Home/components/SectionHeader';
import {AppImage, AppText, AppView} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import {PlayVideoIcon} from '@/assets/icons';
import {useNavigation} from '@react-navigation/native';
import {TabMainNavigation} from '@/types/typings';
import routes from '@/navigation/routes';

interface CategoriesProsp extends headerProps {
  movieCategories: any[];
  imageStyle?: ImageStyle;
  style?: ViewStyle;
  tag?: boolean;
  video?: boolean;
  space?: number;
  onPressMovie: (item: any) => void;
}

const AppCategories = ({
  title,
  btnText,
  onPress,
  movieCategories,
  imageStyle,
  style,
  tag,
  video,
  space,
  headerStyle,
  onPressMovie,
}: CategoriesProsp) => {
  return (
    <View>
      <SectionHeader
        headerStyle={headerStyle}
        title={title}
        btnText={btnText}
        onPress={onPress}
      />

      <FlatList
        data={movieCategories}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{marginTop: space ? space : 15, marginRight: 10}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={[style, styles.container]}
              onPress={() => onPressMovie(item.image)}>
              <AppView
                style={imageStyle}
                className="w-full rounded-[5px] overflow-hidden">
                <AppImage
                  source={item.image}
                  style={[styles.images, imageStyle]}
                />
              </AppView>
              {tag && (
                <AppView className="absolute top-0 left-0 items-center justify-center w-5 h-5 bg-red rounded-tl-[3px] rounded-br-[8px]">
                  <AppText className="font-bold font-ROBOTO_700 text-[11px] text-white">{`${
                    index + 1 < 10 ? 0 : ''
                  }${index + 1}`}</AppText>
                </AppView>
              )}
              {video && (
                <View style={styles.playBtn}>
                  <PlayVideoIcon />
                </View>
              )}
              {video && (
                <AppView
                  style={{alignSelf: 'center'}}
                  className="absolute bottom-1.5">
                  <AppText className="font-normal font-MANROPE_400 text-[10px] text-white uppercase ml-1">
                    {item.title}
                  </AppText>
                  <AppText className="font-bold font-MANROPE_700 text-xs text-white">
                    {item.subtitle}
                  </AppText>
                </AppView>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default AppCategories;

const styles = StyleSheet.create({
  images: {
    width: Size.calcWidth(108),
    height: Size.calcHeight(161),
  },
  container: {
    borderRadius: 5,
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBtn: {
    position: 'absolute',
  },
});
