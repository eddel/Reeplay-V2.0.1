import {
  Animated,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  AppImage,
  AppText,
  AppVideo,
  AppView,
  TouchableOpacity,
} from '@/components';
import SectionHeader, {
  headerProps,
} from '@/Screens/Home/components/SectionHeader';
import SwiperFlatList from 'react-native-swiper-flatlist';
import colors from '@/configs/colors';
import Size from '@/Utils/useResponsiveSize';
import {LiveChannel} from '@/configs/data';
import VideoRef, {OnLoadData} from 'react-native-video';
import useToggle from '@/Hooks/useToggle';
import {
  BigPlayIcon,
  Exclusive,
  FreeIcon,
  FullscreenIcon,
  MutedIcon,
  PremiumIcon,
  VolumeIcon,
} from '@/assets/icons';
import Dots from 'react-native-dots-pagination';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '@/configs/fonts';
import {BlurView as Blur} from '@react-native-community/blur';
import BlurView from 'react-native-blur-effect';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import {fullVideoType} from '@/navigation/AppNavigator';
import routes from '@/navigation/routes';
import {TabMainNavigation} from '@/types/typings';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

interface SwiperPros extends headerProps {
  channels?: boolean;
  containerStyle?: ViewStyle;
  mainStyle?: ViewStyle;
  data: any[];
  spacing?: number;
  scrollY: Animated.Value;
}

const Swiper = ({
  channels,
  containerStyle,
  headerStyle,
  title,
  btnText,
  onPress,
  data,
  scrollY,
  mainStyle,
}: SwiperPros) => {
  const navigation = useNavigation<TabMainNavigation>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [playingIndexes, setPlayingIndexes] = useState<number[]>([]);
  const [muteVideo, setMuteVideo] = useToggle(false);
  const videoRefs = useRef<Record<number, VideoRef | null>>({});
  const [verticalScrollState, setVerticalScrollState] = useState<number | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isBufferingLoad, setIsBufferingLoad] = useState(false);

  const onLoad = (data: OnLoadData) => {
    setIsLoading(false);
  };

  const onLoadStart = () => setIsLoading(true);

  const onBuffer = ({isBuffering}: {isBuffering: boolean}) => {
    setIsBuffering(isBuffering);
    if (isBuffering) {
      setIsBufferingLoad(true);
    }
  };

  const onReadyForDisplay = () => {
    setIsBufferingLoad(false);
  };

  function handlePlayVideo(query: number) {
    if (playingIndexes.includes(query)) {
      // Pause the video
      setPlayingIndexes(prevIndexes => prevIndexes.filter(i => i !== query));
      setVerticalScrollState(null);
    } else {
      // Play the video
      setPlayingIndexes([query]);
      setVerticalScrollState(Number(scrollY));
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (playingIndexes.length === 0) return;
      if (
        verticalScrollState !== null &&
        verticalScrollState !== Number(scrollY)
      ) {
        setPlayingIndexes([]);
        setVerticalScrollState(null);
      }
    };

    scrollY.addListener(handleScroll);

    return () => {
      // Remove the listener when the component unmounts
      scrollY.removeAllListeners();
    };
  }, [scrollY, playingIndexes, verticalScrollState]);

  return (
    <AppView style={mainStyle} className="mt-3 pl-5">
      <SectionHeader
        headerStyle={headerStyle}
        title={title}
        btnText={btnText}
        onPress={onPress}
      />

      {!channels && (
        <SwiperFlatList
          showPagination={true}
          onMomentumScrollBegin={() => setPlayingIndexes([])}
          paginationActiveColor={colors.RED}
          paginationDefaultColor="rgba(255, 19, 19, 0.4)"
          paginationStyleItemActive={styles.activePag}
          paginationStyleItem={styles.pagination}
          paginationStyle={styles.center}
          contentContainerStyle={{marginTop: 13}}
          data={data}
          renderItem={({item, index}) => {
            const isPlaying = playingIndexes.includes(index);
            return (
              <AppView
                style={containerStyle}
                key={index}
                className="relative rounded-[5px] overflow-hidden items-center mb-3 justify-center">
                {!isPlaying && (
                  <TouchableOpacity
                    onPress={() => handlePlayVideo(index)}
                    className="absolute z-20">
                    <BigPlayIcon />
                  </TouchableOpacity>
                )}

                <LinearGradient
                  colors={['transparent', 'rgba(0, 0, 0, 0.7)']}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    height: 70,
                    width: '100%',
                    zIndex: 20,
                  }}
                />
                {isPlaying && (
                  <>
                    <AppView className="absolute w-[303px] bottom-[14px] mb-1 px-2 flex-row items-center justify-between z-30">
                      <AppView className="flex-row items-center gap-x-4">
                        <AppView className="flex-row items-center gap-x-1">
                          <MotiView
                            from={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{
                              type: 'timing',
                              duration: 1500,
                              easing: Easing.out(Easing.ease),
                              delay: index * 300,
                              loop: true,
                            }}>
                            <AppView className="w-[7px] h-[7px] rounded-full bg-red" />
                          </MotiView>
                          <AppText className="font-medium font-ROBOTO_500 text-[10px] text-white">
                            LIVE
                          </AppText>
                        </AppView>

                        <TouchableOpacity
                          style={{height: 17}}
                          onPress={setMuteVideo}>
                          {muteVideo ? <MutedIcon /> : <VolumeIcon />}
                        </TouchableOpacity>
                      </AppView>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate(routes.FULL_SCREEN_VIDEO, {
                            type: fullVideoType.live,
                            videoURL: item.video,
                            donate: true,
                          })
                        }>
                        <FullscreenIcon />
                      </TouchableOpacity>
                    </AppView>
                  </>
                )}

                {!isPlaying && (
                  <>
                    <AppImage
                      className="absolute top-0 bottom-0 z-10"
                      style={[styles.image, {height: 171}]}
                      source={item.image}
                    />
                    <AppView className="w-[303px] px-2 absolute bottom-1.5 flex-row items-center justify-between z-30">
                      <AppView>
                        <AppText
                          style={[
                            styles.title,
                            {
                              fontSize: Size.calcHeight(10.5),
                              fontWeight: '400',
                            },
                          ]}>
                          {item.title}
                        </AppText>
                        <AppText style={styles.title}>{item.author}</AppText>
                      </AppView>
                      <AppView className="flex-row items-center gap-x-1">
                        <AppText className="font-medium font-ROBOTO_500 text-[11px] text-white mr-[2px]">
                          {item.viewersDiscretion}
                        </AppText>
                        <AppView className="bg-[#626161] rounded-sm pl-1.5 pr-1 pt-[1px] pb-[2.5px]">
                          <AppText className="font-ROBOTO_500 font-medium text-[10px] text-white">
                            start in{' '}
                            <AppText className="font-ROBOTO_700 font-bold text-[10px] text-red">
                              01:20:01
                            </AppText>
                          </AppText>
                        </AppView>
                      </AppView>
                    </AppView>

                    <AppView className="w-[303px] absolute top-0 z-30">
                      <AppView className="mt-2 ml-3">
                        {item.subscription === 'premium' ? (
                          <PremiumIcon width={20} height={20} />
                        ) : item.subscription === 'exclusive' ? (
                          <Exclusive width={20} height={20} />
                        ) : (
                          <FreeIcon width={20} height={20} />
                        )}
                      </AppView>
                    </AppView>
                  </>
                )}
                <AppVideo
                  source={{uri: item.video}}
                  videoRef={(ref: VideoRef | null) => {
                    videoRefs.current[index] = ref;
                  }}
                  style={{
                    width: 303,
                    height: 161,
                    borderRadius: 5,
                    alignSelf: 'center',
                  }}
                  resizeMode="cover"
                  muted={muteVideo}
                  repeat
                  paused={!isPlaying}
                  onLoad={onLoad}
                  onLoadStart={onLoadStart}
                  onBuffer={onBuffer}
                  onReadyForDisplay={onReadyForDisplay}
                />
              </AppView>
            );
          }}
        />
      )}

      {channels && (
        <AppView className="mt-[10px]">
          <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            bounces={false}
            snapToInterval={303 + 8}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            onScroll={event => {
              const offsetX = event.nativeEvent.contentOffset.x;
              const index = Math.floor(offsetX / (303 - 14));
              setCurrentPage(index);
            }}
            onMomentumScrollBegin={() => setPlayingIndexes([])}
            renderItem={({item, index}) => {
              const isPlaying = playingIndexes.includes(index);
              return (
                <AppView
                  style={containerStyle}
                  key={index}
                  className="relative rounded-[5px] overflow-hidden items-center justify-center">
                  {!isPlaying ? (
                    <TouchableOpacity
                      onPress={() => handlePlayVideo(index)}
                      className="absolute z-20">
                      <BigPlayIcon />
                    </TouchableOpacity>
                  ) : (
                    <>
                      {isBufferingLoad ||
                        (isLoading && (
                          <AppView className="absolute z-20 pb-3">
                            <LottieView
                              source={require('@/assets/icons/RPlay.json')}
                              style={{
                                width: 300,
                                height: 300,
                              }}
                              autoPlay
                              loop
                            />
                          </AppView>
                        ))}
                    </>
                  )}

                  {isPlaying && (
                    <>
                      <LinearGradient
                        colors={['transparent', '#000000']}
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          height: 70,
                          width: '100%',
                          zIndex: 20,
                        }}
                      />
                      <AppView className="absolute w-full bottom-[14px] mb-1 px-2 flex-row items-center justify-between z-30">
                        <AppView className="flex-row items-center gap-x-4">
                          <AppView className="flex-row items-center gap-x-1">
                            <MotiView
                              from={{opacity: 0}}
                              animate={{opacity: 1}}
                              transition={{
                                type: 'timing',
                                duration: 1500,
                                easing: Easing.out(Easing.ease),
                                delay: index * 300,
                                loop: true,
                              }}>
                              <AppView className="w-[7px] h-[7px] rounded-full bg-red" />
                            </MotiView>
                            <AppText className="font-medium font-ROBOTO_500 text-[10px] text-white">
                              LIVE
                            </AppText>
                          </AppView>

                          <TouchableOpacity
                            style={{height: 17}}
                            onPress={setMuteVideo}>
                            {muteVideo ? <MutedIcon /> : <VolumeIcon />}
                          </TouchableOpacity>
                        </AppView>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate(routes.FULL_SCREEN_VIDEO, {
                              type: fullVideoType.live,
                              videoURL: item.video,
                              donate: true,
                              channelImage: item.image,
                            })
                          }>
                          <FullscreenIcon />
                        </TouchableOpacity>
                      </AppView>
                    </>
                  )}

                  {!isPlaying && (
                    <AppImage
                      className="absolute rounded-[5px] top-0 bottom-0 z-10"
                      style={styles.image}
                      source={item.image}
                    />
                  )}

                  <AppVideo
                    source={{uri: item.video}}
                    videoRef={(ref: VideoRef | null) => {
                      videoRefs.current[index] = ref;
                    }}
                    style={{width: 303, height: 161, borderRadius: 5}}
                    resizeMode="cover"
                    muted={muteVideo}
                    repeat
                    paused={!isPlaying}
                    onLoad={onLoad}
                    onLoadStart={onLoadStart}
                    onBuffer={onBuffer}
                    onReadyForDisplay={onReadyForDisplay}
                  />
                </AppView>
              );
            }}
          />
          <Dots
            length={data.length}
            active={currentPage}
            passiveColor={'rgba(255, 19, 19, 0.4)'}
            activeColor={colors.RED}
            passiveDotHeight={Size.calcAverage(7)}
            passiveDotWidth={Size.calcAverage(7)}
            activeDotHeight={Size.calcAverage(10)}
            activeDotWidth={Size.calcAverage(10)}
            marginHorizontal={3}
          />
        </AppView>
      )}
    </AppView>
  );
};

export default Swiper;

const styles = StyleSheet.create({
  pagination: {
    width: Size.calcAverage(7),
    height: Size.calcAverage(7),
    borderRadius: 99,
    marginHorizontal: Size.calcWidth(3),
    marginTop: Size.calcHeight(64),
  },
  activePag: {
    width: Size.calcAverage(10),
    height: Size.calcAverage(10),
  },
  center: {
    alignItems: 'center',
  },
  image: {
    width: 303,
    height: 161,
    borderRadius: 5,
  },
  title: {
    fontFamily: fonts.MANROPE_700,
    fontWeight: '700',
    fontSize: Size.calcHeight(15),
    color: colors.WHITE,
    maxWidth: 130,
  },
  dateContainer: {
    borderRadius: 5,
    padding: 6,
    // paddingHorizontal:
  },
});
