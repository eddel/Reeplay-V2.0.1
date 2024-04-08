import React from 'react';
import {ImageStyle, StyleSheet} from 'react-native';
import {
  AppButton,
  AppImage,
  AppText,
  AppView,
  TouchableOpacity,
} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import colors from '@/configs/colors';
import fonts from '@/configs/fonts';
import {
  CloseIcon,
  Exclusive,
  FreeIcon,
  InfoBtn,
  InfoLiveBtn,
  PremiumIcon,
  SmInfoIcon,
} from '@/assets/icons';
import {fullVideoType, previewContentType} from '@/navigation/AppNavigator';
import routes from '@/navigation/routes';
import {TabMainNavigation} from '@/types/typings';
import {useNavigation} from '@react-navigation/native';
import {MovieVideo} from './HomeScreen';

const ITEM_WIDTH: number = Size.calcWidth(232);

interface ContinueProps {
  item:
    | {
        title: string;
        genre: string;
        image: any;
        author: string;
        duration: number;
        durationWatched: number;
      }
    | {
        title: string;
        author: string;
        image: any;
        viewersDiscretion?: string;
        subscription?: string;
      };
  removeCloseBtn?: boolean;
  live?: boolean;
  donate?: boolean;
  vote?: boolean;
  imageStyle?: ImageStyle;
}

const ContinueWatchingComponent = ({
  item,
  removeCloseBtn,
  imageStyle,
  live,
  donate,
  vote,
}: ContinueProps) => {
  const {navigate} = useNavigation<TabMainNavigation>();
  const isDuration = 'durationWatched' in item;
  const progressRatio = isDuration ? item.durationWatched / item.duration : 0;
  const progressBarWidth = ITEM_WIDTH * progressRatio;
  const videoURL =
    'https://res.cloudinary.com/dag4n1g6h/video/upload/v1708615629/video_rhsuqs.mp4';

  return (
    <AppView style={{width: ITEM_WIDTH}} className="mt-4 mr-3">
      <AppView className="relative overflow-hidden">
        {!removeCloseBtn && (
          <TouchableOpacity className="absolute z-10 top-1 right-1">
            <CloseIcon />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() =>
            navigate(routes.FULL_SCREEN_VIDEO, {
              type: live ? fullVideoType.live : fullVideoType.default,
              videoURL,
              donate,
              vote,
            })
          }
          style={{
            borderRadius: live ? 5 : 0,
          }}
          className="w-full overflow-hidden">
          <AppImage
            source={item.image}
            style={[imageStyle, {height: live ? 112 : 102}]}
            className="w-full"
          />
        </TouchableOpacity>
        <AppView className="absolute bottom-0 w-full">
          {/* ProgressBar */}
          <AppView
            style={{
              transform: [{translateX: -ITEM_WIDTH + progressBarWidth}],
              width: ITEM_WIDTH,
            }}
            className="h-[2px] bg-red"
          />
        </AppView>
      </AppView>
      <AppView className="flex-row justify-between mt-3">
        <AppView>
          <AppText
            style={
              item.author === ''
                ? styles.title
                : [
                    styles.title,
                    {fontSize: Size.calcHeight(10), fontWeight: '400'},
                  ]
            }>
            {item.title}
          </AppText>
          {item.author !== '' && (
            <AppText style={styles.title}>{item.author}</AppText>
          )}
          <AppText style={[styles.title, {fontSize: Size.calcHeight(10.5)}]}>
            {'genre' in item && item.genre}
          </AppText>
        </AppView>

        <AppView className="flex-row">
          {live && (
            <AppView className="flex-row">
              {'subscription' in item && item.subscription === 'premium' ? (
                <PremiumIcon style={{marginRight: 4}} />
              ) : 'subscription' in item &&
                item.subscription === 'exclusive' ? (
                <Exclusive style={{marginRight: 4}} />
              ) : (
                <FreeIcon style={{marginRight: 4}} />
              )}
              {'viewersDiscretion' in item && (
                <AppText className=" font-medium font-ROBOTO_500 text-[11px] text-white mr-1.5">
                  {item.viewersDiscretion}
                </AppText>
              )}
            </AppView>
          )}
          <AppButton
            bgColor={colors.RED}
            onPress={() =>
              !live &&
              navigate(routes.PREVIEW_SCREEN, {
                content: previewContentType.film,
                videoURL: MovieVideo,
              })
            }
            replaceDefaultContent={live ? <InfoLiveBtn /> : <InfoBtn />}
            style={{
              width: Size.calcWidth(45),
              height: live ? Size.calcWidth(18.5) : Size.calcWidth(20),
              borderRadius: 2,
              paddingVertical: 0,
              paddingHorizontal: 2,
            }}
          />
        </AppView>
      </AppView>
    </AppView>
  );
};

export default ContinueWatchingComponent;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.MANROPE_700,
    fontWeight: '700',
    fontSize: Size.calcHeight(13.5),
    color: colors.WHITE,
    maxWidth: 130,
  },
});
