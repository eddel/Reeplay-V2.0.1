import {
  View,
  Text,
  ImageSourcePropType,
  Animated,
  Platform,
  Dimensions,
} from 'react-native';
import React, {Fragment} from 'react';
import FastImage from 'react-native-fast-image';
import {AppButton, AppImage, AppText, AppView} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import colors from '@/configs/colors';
import {
  Exclusive,
  Exclusive_B,
  FreeIcon,
  FreeIcon_B,
  InfoIcon,
  PremiumIcon,
  PremiumIcon_B,
  SmPlayIcon,
} from '@/assets/icons';
import {
  HomeSlideProps,
  LiveSlideProps,
  LiveSliderDataProps,
} from '@/types/data.types';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNav, TabMainNavigation} from '@/types/typings';
import routes from '@/navigation/routes';
import {fullVideoType, previewContentType} from '@/navigation/AppNavigator';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '@/configs/fonts';
import {MovieVideo} from '../HomeScreen';

const ITEM_WIDTH = Size.getWidth() * 0.88;
const WIDTH = Dimensions.get('window').width;

const SPACING = 6;

interface Props {
  item: HomeSlideProps | LiveSlideProps;
  translate?: Animated.AnimatedInterpolation<string | number>;
  currentIndex: boolean;
  live?: boolean;
  colors: string[];
}

const Caurosel = ({
  item,
  colors: colorsArr,
  translate,
  currentIndex,
  live,
}: Props) => {
  const {navigate} = useNavigation<TabMainNavigation>();

  return (
    <Animated.View
      style={{
        width: WIDTH,
        // paddingHorizontal: SPACING,
        position: 'relative',
        alignItems: 'center',
        overflow: 'hidden',
        flex: 1,
        flexGrow: 2,
      }}>
      {!live && (
        <LinearGradient
          colors={colorsArr}
          style={[
            {
              bottom: -1,
              zIndex: 1,
              width: ITEM_WIDTH,
              position: 'absolute',
              height: '100%',
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            },
          ]}
        />
      )}

      {live && currentIndex && (
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.91)']}
          style={[
            {
              bottom: -1,
              zIndex: 1,
              width: ITEM_WIDTH,
              position: 'absolute',
              height: '60%',
            },
          ]}
        />
      )}
      <AppImage
        source={item.image}
        style={{width: ITEM_WIDTH}}
        className="absolute h-full rounded-md"
      />
      <AppView className="absolute bottom-4 z-10 items-center">
        <AppText className="text-white text-sm uppercase font-MANROPE_400 mb-3">
          {item.type}
        </AppText>
        <AppText
          style={{
            maxWidth: item.title.length > 13 ? 270 : 248,
          }}
          className="text-[40px] leading-[39px] font-LEXEND_700 text-white mb-1 text-center">
          {item.title}
        </AppText>
        <AppView className="flex-row items-center justify-center">
          {'tags' in item &&
            item.tags &&
            item.tags.map((tag, i) => {
              return (
                <Fragment key={i}>
                  <AppText className="font-ROBOTO_400 text-sm text-grey_200">
                    {tag}
                  </AppText>
                  {item.tags && i !== item.tags.length - 1 && (
                    <AppView className="w-1.5 h-1.5 rounded-full bg-white mt-[2.5px] mx-1.5" />
                  )}
                </Fragment>
              );
            })}
        </AppView>

        <AppView className="flex-row items-center justify-center mt-1.5">
          <AppButton
            bgColor={live ? colors.GREY_600 : colors.RED}
            onPress={() =>
              !live
                ? navigate(routes.PREVIEW_SCREEN, {
                    content: previewContentType.film,
                    videoURL: MovieVideo,
                  })
                : console.log('first')
            }
            replaceDefaultContent={
              live ? (
                'subscription' in item && item.subscription === 'premium' ? (
                  <PremiumIcon_B />
                ) : 'subscription' in item &&
                  item.subscription === 'exclusive' ? (
                  <Exclusive_B />
                ) : (
                  <FreeIcon_B />
                )
              ) : (
                <InfoIcon />
              )
            }
            style={{
              width: Size.calcHeight(85),
              borderRadius: 4,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              marginRight: 2,
              paddingVertical: 17,
            }}
          />
          <AppButton
            bgColor={colors.RED}
            onPress={() =>
              navigate(routes.FULL_SCREEN_VIDEO, {
                type: live ? fullVideoType.live : fullVideoType.default,
                videoURL: item.videoURL ? item.videoURL : '',
                donate: true,
              })
            }
            style={{
              width: Size.calcHeight(152),
              borderRadius: 4,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              paddingVertical: 17,
            }}
            replaceDefaultContent={
              <AppView className="flex-row items-center justify-center">
                <SmPlayIcon />
                <AppText className="text-[15px] text-white font-ROBOTO_700 ml-[10px]">
                  {live ? 'Watch' : 'Play'}
                </AppText>
              </AppView>
            }
          />
        </AppView>
      </AppView>
    </Animated.View>
  );
};

export default Caurosel;
