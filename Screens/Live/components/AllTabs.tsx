import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppView} from '@/components';
import SectionHeader from '@/Screens/Home/components/SectionHeader';
import AppCategories from '@/components/AppCategories';
import {LiveChannel, TrendingNow} from '@/configs/data';
import Size from '@/Utils/useResponsiveSize';
import ContinueWatchingComponent from '@/Screens/Home/ContinueWatchingComponent';
import colors from '@/configs/colors';
import routes from '@/navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {LiveScreenNav, TabMainNavigation} from '@/types/typings';
import {fullVideoType} from '@/navigation/AppNavigator';

const AllTabs = () => {
  const {navigate} = useNavigation<LiveScreenNav>();
  const navigation = useNavigation<TabMainNavigation>();
  const videoURL =
    'https://res.cloudinary.com/dag4n1g6h/video/upload/v1708615629/video_rhsuqs.mp4';

  return (
    <AppView className="mb-20">
      <AppView className="mt-3 pl-5">
        <AppCategories
          title="Channels"
          btnText="SEE ALL"
          movieCategories={LiveChannel}
          onPress={() => navigate(routes.LIBRARY_SCREEN)}
          style={{marginRight: Size.calcHeight(9)}}
          imageStyle={{width: 182, height: 102}}
          headerStyle={{paddingRight: 20}}
          space={6}
          onPressMovie={() =>
            navigation.navigate(routes.FULL_SCREEN_VIDEO, {
              type: fullVideoType.live,
              videoURL,
              donate: true,
            })
          }
        />
      </AppView>
      <AppView className="mt-[21px] pl-5">
        <SectionHeader
          title="Events"
          btnText=""
          onPress={() => console.log('first')}
        />
        <FlatList
          data={TrendingNow}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{marginTop: -5, height: 190, marginBottom: 20}}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item, index}) => {
            return (
              <ContinueWatchingComponent
                item={item}
                key={index}
                removeCloseBtn
                live
                imageStyle={styles.image}
                vote
              />
            );
          }}
        />
      </AppView>

      <AppView className="-mt-4 pl-5">
        <SectionHeader
          title="Tv Shows"
          btnText=""
          onPress={() => console.log('first')}
        />
        <FlatList
          data={TrendingNow}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{marginTop: -5, height: 190, marginBottom: 20}}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item, index}) => {
            return (
              <ContinueWatchingComponent
                item={item}
                key={index}
                removeCloseBtn
                live
                imageStyle={styles.image}
                vote
              />
            );
          }}
        />
      </AppView>

      <AppView className="-mt-[17px] pl-5">
        <SectionHeader
          title="Podcasts"
          btnText=""
          onPress={() => console.log('first')}
        />
        <FlatList
          data={TrendingNow}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{marginTop: -5, height: 190}}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item, index}) => {
            return (
              <ContinueWatchingComponent
                item={item}
                key={index}
                removeCloseBtn
                live
                imageStyle={styles.image}
                donate
              />
            );
          }}
        />
      </AppView>
    </AppView>
  );
};

export default AllTabs;

const styles = StyleSheet.create({
  image: {
    width: 234,
    height: 126,
    borderRadius: 5,
  },
});
