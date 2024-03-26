import {View, Text, ImageSourcePropType, Animated} from 'react-native';
import React, {Fragment} from 'react';
import FastImage from 'react-native-fast-image';
import {AppButton, AppImage, AppText, AppView} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import colors from '@/configs/colors';
import {
  Exclusive,
  FreeIcon,
  InfoIcon,
  PremiumIcon,
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
import {fullVideoType} from '@/navigation/AppNavigator';

const ITEM_WIDTH = Size.getWidth() * 0.72;
const SPACING = 6;

interface Props {
  item: HomeSlideProps | LiveSlideProps;
  translate: Animated.AnimatedInterpolation<string | number>;
  currentIndex: boolean;
  live?: boolean;
}

const Caurosel = ({item, translate, currentIndex, live}: Props) => {
  const {navigate} = useNavigation<TabMainNavigation>();

  return (
    <Animated.View
      style={{
        width: ITEM_WIDTH,
        height: Size.calcHeight(382),
        marginHorizontal: SPACING,
        position: 'relative',
        borderRadius: 6,
        alignItems: 'center',
        overflow: 'hidden',
        transform: [{translateY: translate}],
      }}>
      <AppImage
        source={item.image}
        style={{width: ITEM_WIDTH}}
        className="absolute h-full"
      />
      <AppView className="absolute bottom-3 items-center">
        <AppText className="text-white text-xs font-normal uppercase font-MANROPE_400 mb-2">
          {item.type}
        </AppText>
        <AppText
          style={{maxWidth: item.title.length > 13 ? 200 : 168}}
          className="text-[30px] leading-[30px] text-white font-bold font-LEXEND_700 mb-1 text-center">
          {item.title}
        </AppText>
        <AppView className="flex-row items-center justify-center">
          {'tags' in item &&
            item.tags &&
            item.tags.map((tag, i) => {
              return (
                <Fragment key={i}>
                  <AppText className="font-noraml font-ROBOTO_400 text-xs text-grey_200">
                    {tag}
                  </AppText>
                  {item.tags && i !== item.tags.length - 1 && (
                    <AppView className="w-1.5 h-1.5 rounded-full bg-white mx-1" />
                  )}
                </Fragment>
              );
            })}
        </AppView>

        <AppView className="flex-row items-center justify-center mt-1.5">
          <AppButton
            bgColor={live ? colors.GREY_600 : colors.RED}
            onPress={() => console.log('first')}
            replaceDefaultContent={
              live ? (
                'subscription' in item && item.subscription === 'premium' ? (
                  <PremiumIcon />
                ) : 'subscription' in item &&
                  item.subscription === 'exclusive' ? (
                  <Exclusive />
                ) : (
                  <FreeIcon />
                )
              ) : (
                <InfoIcon />
              )
            }
            style={{
              width: Size.calcHeight(65),
              borderRadius: 4,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              marginRight: 2,
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
              width: Size.calcHeight(132),
              borderRadius: 4,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
            replaceDefaultContent={
              <AppView className="flex-row items-center justify-center">
                <SmPlayIcon />
                <AppText className="text-xs text-white font-semibold font-ROBOTO_700 ml-2">
                  Play
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
