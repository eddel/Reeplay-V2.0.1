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
  PremiumIcon,
  SmInfoIcon,
} from '@/assets/icons';
import {fullVideoType} from '@/navigation/AppNavigator';
import routes from '@/navigation/routes';
import {TabMainNavigation} from '@/types/typings';
import {useNavigation} from '@react-navigation/native';

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
          className="w-full rounded-[5px] overflow-hidden">
          <AppImage
            source={item.image}
            style={imageStyle}
            className="w-full h-[112px]"
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
          <AppView className="flex-row">
            {'subscription' in item && item.subscription === 'premium' ? (
              <PremiumIcon style={{marginRight: 4}} />
            ) : 'subscription' in item && item.subscription === 'exclusive' ? (
              <Exclusive style={{marginRight: 4}} />
            ) : (
              <FreeIcon style={{marginRight: 4}} />
            )}
            {'viewersDiscretion' in item && (
              <AppText className="mt-[2px] font-medium font-ROBOTO_500 text-[11px] text-white mr-1.5">
                {item.viewersDiscretion}
              </AppText>
            )}
          </AppView>
          <AppButton
            bgColor={colors.RED}
            onPress={() => console.log('first')}
            replaceDefaultContent={
              <AppView className="flex-row items-center justify-center mb-[2px]">
                <SmInfoIcon />
                <AppText className="font-bold font-ROBOTO_700 text-white text-[10px] ml-1">
                  Info
                </AppText>
              </AppView>
            }
            style={{
              width: Size.calcWidth(45),
              height: Size.calcWidth(20),
              borderRadius: 0,
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
