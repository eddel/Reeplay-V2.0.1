import {
  FlatList,
  ImageStyle,
  Platform,
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
import LinearGradient from 'react-native-linear-gradient';

interface CategoriesProsp extends headerProps {
  movieCategories: any[];
  imageStyle?: ImageStyle;
  style?: ViewStyle;
  tag?: boolean;
  video?: boolean;
  space?: number;
  onPressMovie: (item: any) => void;
  linearGradient?: boolean;
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
  linearGradient,
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
                <AppView className="absolute top-0 left-0 items-center justify-center w-[18px] h-[22px] bg-red rounded-tl-[5px] rounded-br-[8px]">
                  <AppText className="font-ROBOTO_700 text-[9px] text-white">{`${
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
                  className="absolute z-30 bottom-1.5">
                  <AppText className="font-MANROPE_400 text-[10px] text-white uppercase ml-1">
                    {item.title}
                  </AppText>
                  <AppText className="font-MANROPE_700 text-xs text-white">
                    {item.subtitle}
                  </AppText>
                </AppView>
              )}
              {linearGradient && (
                <LinearGradient
                  colors={['transparent', 'rgba(0, 0, 0, 0.9)']}
                  style={{
                    position: 'absolute',
                    bottom: -5,
                    width: '100%',
                    height: '60%',
                  }}
                />
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
    width: Size.calcWidth(117),
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
