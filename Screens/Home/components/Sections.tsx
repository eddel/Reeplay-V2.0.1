import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ComingSoon,
  ContinueWatching,
  LiveChannel,
  Top10,
  TrendingNow,
  newMusicData,
  newSkitsData,
} from '@/configs/data';
import {AppView} from '@/components';
import AppCategories from '@/components/AppCategories';
import Size from '@/Utils/useResponsiveSize';
import {useNavigation} from '@react-navigation/native';
import {TabMainNavigation} from '@/types/typings';
import routes from '@/navigation/routes';
import {fullVideoType, previewContentType} from '@/navigation/AppNavigator';
import {MovieVideo, MusicVideo, SeriesVideo} from '../HomeScreen';

interface Props {
  isSkipped: boolean;
}

const Sections = ({isSkipped}: Props) => {
  const {navigate} = useNavigation<TabMainNavigation>();

  return (
    <>
      {isSkipped && (
        <AppView className="mt-10 pl-5">
          <AppCategories
            title="Popular on REEPLAY"
            movieCategories={TrendingNow}
            onPress={() => console.log('popular')}
            style={{marginRight: Size.calcHeight(12)}}
            onPressMovie={() =>
              navigate(routes.PREVIEW_SCREEN, {
                content: previewContentType['tv series'],
                videoURL: SeriesVideo,
              })
            }
          />
        </AppView>
      )}
      <AppView style={{marginTop: isSkipped ? 24 : 40}} className="pl-5">
        <AppCategories
          title="Trending Now"
          movieCategories={TrendingNow}
          onPress={() => console.log('popular')}
          style={{marginRight: Size.calcHeight(12)}}
          onPressMovie={() =>
            navigate(routes.PREVIEW_SCREEN, {
              content: previewContentType.film,
              contentPrice: '₦300.00',
              contentType: 'Exclusive',
              videoURL: MovieVideo,
            })
          }
        />
      </AppView>
      <AppView className="mt-6 pl-5">
        <AppCategories
          title="Top 10 in NIGERIA"
          movieCategories={Top10}
          onPress={() => console.log('popular')}
          style={{marginRight: Size.calcHeight(12)}}
          tag
          onPressMovie={() =>
            navigate(routes.PREVIEW_SCREEN, {
              content: previewContentType['tv series'],
              contentPrice: '₦300.00',
              contentType: 'Exclusive',
              videoURL: SeriesVideo,
            })
          }
        />
      </AppView>
      <AppView className="mt-6 pl-5">
        <AppCategories
          title="New Music Videos"
          movieCategories={newMusicData}
          video
          onPress={() => console.log('popular')}
          style={{marginRight: Size.calcHeight(8)}}
          imageStyle={styles.videoBackdrop}
          linearGradient
          onPressMovie={() =>
            navigate(routes.PREVIEW_SCREEN, {
              content: previewContentType['music video'],
              contentPrice: '₦300.00',
              contentType: 'Exclusive',
              videoURL: MusicVideo,
            })
          }
        />
      </AppView>
      <AppView className="mt-6 pl-5">
        <AppCategories
          title="New Skits"
          movieCategories={newSkitsData}
          video
          onPress={() => console.log('popular')}
          style={{marginRight: Size.calcHeight(8)}}
          imageStyle={styles.videoBackdrop}
          linearGradient
          onPressMovie={() =>
            navigate(routes.PREVIEW_SCREEN, {
              content: previewContentType.film,
              videoURL: MovieVideo,
            })
          }
        />
      </AppView>
      <AppView className="mt-6 pl-5">
        <AppCategories
          title="Live Channel"
          movieCategories={LiveChannel}
          onPress={() => console.log('popular')}
          style={{marginRight: Size.calcHeight(8)}}
          imageStyle={styles.videoBackdrop}
          onPressMovie={item =>
            navigate(routes.FULL_SCREEN_VIDEO, {
              channelImage: item,
              type: fullVideoType.live,
              videoURL: SeriesVideo,
            })
          }
        />
      </AppView>
      <AppView className="mt-6 pl-5 mb-[40px]">
        <AppCategories
          title="Coming Soon"
          movieCategories={ComingSoon}
          onPress={() => console.log('popular')}
          style={{marginRight: Size.calcHeight(12)}}
          onPressMovie={() =>
            navigate(routes.PREVIEW_SCREEN, {
              content: previewContentType.film,
              contentType: 'Premium',
              videoURL: MovieVideo,
            })
          }
        />
      </AppView>
    </>
  );
};

export default Sections;

const styles = StyleSheet.create({
  videoBackdrop: {
    width: Size.calcWidth(182),
    height: Size.calcHeight(146),
  },
});
