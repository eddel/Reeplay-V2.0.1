import {Animated, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppView} from '@/components';
import AppCategories from '@/components/AppCategories';
import {
  KidsChannel,
  LiveChannel,
  SliderLiveChannel,
  SportChannel,
} from '@/configs/data';
import Size from '@/Utils/useResponsiveSize';
import Swiper from './Swiper';
import {TabMainNavigation} from '@/types/typings';
import {useNavigation} from '@react-navigation/native';
import routes from '@/navigation/routes';
import {fullVideoType} from '@/navigation/AppNavigator';

interface Props {
  scrollY: Animated.Value;
}

const ChannelsTabs = ({scrollY}: Props) => {
  const navigation = useNavigation<TabMainNavigation>();
  const videoURL =
    'https://res.cloudinary.com/dag4n1g6h/video/upload/v1708615629/video_rhsuqs.mp4';
  return (
    <AppView className="mb-20">
      <Swiper
        data={SliderLiveChannel}
        title="Popular Channels"
        channels
        containerStyle={{height: 171, width: 303, marginRight: 8}}
        spacing={8}
        scrollY={scrollY}
      />

      <AppView className="-mt-1.5 pl-5">
        <AppCategories
          title="New Channels"
          btnText=""
          movieCategories={LiveChannel}
          onPress={() => console.log('popular')}
          style={{marginRight: Size.calcHeight(8)}}
          imageStyle={{width: 171, height: 89}}
          headerStyle={{paddingRight: 20}}
          space={8}
          onPressMovie={item =>
            navigation.navigate(routes.FULL_SCREEN_VIDEO, {
              type: fullVideoType.live,
              videoURL,
              channelImage: item,
            })
          }
        />
      </AppView>
      <AppView className="mt-4 pl-5">
        <AppCategories
          title="Sport Channels"
          btnText=""
          movieCategories={SportChannel}
          onPress={() => console.log('popular')}
          style={{marginRight: Size.calcHeight(8)}}
          imageStyle={{width: 171, height: 89}}
          headerStyle={{paddingRight: 20}}
          space={8}
          onPressMovie={item =>
            navigation.navigate(routes.FULL_SCREEN_VIDEO, {
              type: fullVideoType.live,
              videoURL,
              channelImage: item,
            })
          }
        />
      </AppView>
      <AppView className="mt-4 pl-5 mb-3">
        <AppCategories
          title="Kids Channels"
          btnText=""
          movieCategories={KidsChannel}
          onPress={() => console.log('popular')}
          style={{marginRight: Size.calcHeight(8)}}
          imageStyle={{width: 171, height: 89}}
          headerStyle={{paddingRight: 20}}
          space={8}
          onPressMovie={item =>
            navigation.navigate(routes.FULL_SCREEN_VIDEO, {
              type: fullVideoType.live,
              videoURL:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              channelImage: item,
            })
          }
        />
      </AppView>
    </AppView>
  );
};

export default ChannelsTabs;

const styles = StyleSheet.create({});
