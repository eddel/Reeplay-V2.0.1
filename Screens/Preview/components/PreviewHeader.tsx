import {
  ActivityIndicator,
  Alert,
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Size from '@/Utils/useResponsiveSize';
import {
  AppImage,
  AppText,
  AppVideo,
  AppView,
  TouchableOpacity,
} from '@/components';
import {
  BigPlayIcon,
  MutedIcon,
  PreviewCastIcon,
  PreviewCloseIcon,
  VolumeIcon,
} from '@/assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import useToggle from '@/Hooks/useToggle';
import VideoRef, {
  OnLoadData,
  OnProgressData,
  OnSeekData,
} from 'react-native-video';
import {useNavigation, useRoute} from '@react-navigation/native';
import PreviewSeekBar from './PreviewSeekBar';
import colors from '@/configs/colors';
import {Easing} from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import {PreviewScreenRoute} from '@/types/typings';

const AnimatedLinear = Animated.createAnimatedComponent(LinearGradient);
const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);

const PreviewHeader = () => {
  const {goBack} = useNavigation();
  const opacityU = useRef(new Animated.Value(1));
  const [muteVideo, setMuteVideo] = useState(true);
  const videoRefs = useRef<VideoRef>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isBufferingLoad, setIsBufferingLoad] = useState(false);
  const [hide, setHide] = useState(false);
  const [timer, setTimer] = useState(10);
  const [verticalScrollState, setVerticalScrollState] = useState<number | null>(
    null,
  );
  const [fixed, setFixed] = useState({
    time: currentTime,
    set: false,
  });
  const route = useRoute<PreviewScreenRoute>();

  const videoURL = route.params.videoURL;

  const animatedTransform = (
    toValue: number,
    trans: React.MutableRefObject<Animated.Value>,
  ) => {
    Animated.timing(trans.current, {
      toValue,
      duration: 450,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  const onLoad = (data: OnLoadData) => {
    setDuration(Math.round(data.duration));
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

  const onEnd = () => {
    if (duration === currentTime) {
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  const onProgress = (data: OnProgressData) => {
    if (!isLoading) {
      if (fixed.set) {
        setCurrentTime(fixed.time);
      }
      if (data.currentTime === fixed.time && fixed.set) {
        setCurrentTime(data.currentTime);
        setFixed({
          time: data.currentTime,
          set: false,
        });
      }
      if (!fixed.set) {
        setCurrentTime(data.currentTime);
        setIsBufferingLoad(false);
      }
    }
  };

  const onSeek = (data: OnSeekData) => {
    setIsPlaying(false);
    setIsBufferingLoad(false);
  };

  const handleSeek = (time: number) => {
    setIsPlaying(true);
    setIsBufferingLoad(true);
    videoRefs.current?.seek(time);
  };

  useEffect(() => {
    let loadingTimeout: any;

    const startLoadingTimeout = () => {
      // Set a timeout for 5 seconds (you can adjust the duration)
      loadingTimeout = setTimeout(() => {
        // existFullscreen();
        Alert.alert('Info', 'Opps! Something went wrong, service timeout'),
          {text: 'OK'};
        setIsLoading(false);
      }, 10000);
    };

    const clearLoadingTimeout = () => {
      // Clear the timeout if content is successfully loaded
      clearTimeout(loadingTimeout);
    };

    if (isLoading) {
      startLoadingTimeout();
    } else {
      clearLoadingTimeout();
    }

    return () => {
      clearLoadingTimeout();
    };
  }, [isLoading]);

  useEffect(() => {
    let timeoutId: any;
    let intervalId: any;
    let timerX: number = 0;

    const decreaseTimer = () => {
      setTimer(prevTimer => Math.max(prevTimer - 1, 0)); // Ensure timer doesn't go below 0
      timerX -= 1;
    };

    const clearTimer = () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };

    if (hide) {
      animatedTransform(0, opacityU);
      timerX = 0;
      clearTimer(); // Clear existing timeout and interval
    }

    if (!hide) {
      animatedTransform(1, opacityU);
      timerX = 7;

      if (isPlaying) {
        clearTimer(); // Clear existing timeout and interval
        return;
      }

      intervalId = setInterval(decreaseTimer, 1000);

      // Set timeout to hide after 10 seconds
      timeoutId = setTimeout(() => {
        setHide(true);
        clearTimer(); // Clear the interval when timer reaches 0
      }, timerX * 1000);
    }

    if (isPlaying) setHide(false);

    if (isBufferingLoad) setHide(false);

    if (muteVideo || !muteVideo) timerX = 7;

    // Clear the timeout and interval when the hide variable changes
    return () => {
      clearTimer();
    };
  }, [isPlaying, hide, muteVideo, isBufferingLoad]);

  return (
    <Pressable style={styles.header} onPress={() => setHide(!hide)}>
      <AppView
        // style={containerStyle}
        className="relative overflow-hidden items-center justify-center">
        {/* {!isPlaying && ( */}
        {isBufferingLoad || isLoading ? (
          <AppView className="absolute z-20 pb-3">
            <LottieView
              source={require('@/assets/icons/RPlay.json')}
              style={{
                width: 200,
                height: 200,
              }}
              autoPlay
              loop
            />
          </AppView>
        ) : (
          <AnimatedTouchable
            onPress={() => setIsPlaying(!isPlaying)}
            style={{
              position: 'absolute',
              zIndex: 20,
              opacity: opacityU.current,
            }}>
            {isPlaying ? (
              <BigPlayIcon />
            ) : (
              <AppView className="flex-row items-center gap-x-[9px]">
                <AppView className="w-1.5 h-[25px] bg-white" />
                <AppView className="w-1.5 h-[25px] bg-white" />
              </AppView>
            )}
          </AnimatedTouchable>
        )}
        {/* )} */}

        <AnimatedLinear
          colors={['transparent', 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.9)']}
          style={{
            position: 'absolute',
            bottom: 0,
            height: 40,
            width: '100%',
            zIndex: 20,
          }}
        />
        {/* {isPlaying && ( */}
        <>
          <View style={[styles.top]}>
            <TouchableOpacity>
              <PreviewCastIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={goBack}>
              <PreviewCloseIcon />
            </TouchableOpacity>
          </View>

          <AnimatedTouchable
            style={[styles.bottom, {height: 17, marginBottom: 10}]}
            onPress={() => setMuteVideo(!muteVideo)}>
            {muteVideo ? (
              <AppView className="mt-[3px]">
                <MutedIcon />
              </AppView>
            ) : (
              <VolumeIcon />
            )}
          </AnimatedTouchable>

          <View style={[styles.bar, {width: Size.getWidth()}]}>
            <AppView className="h-[3px] w-full bg-grey_white_90 mt-1.5">
              <PreviewSeekBar
                duration={duration}
                currentTime={currentTime}
                setCurrentTime={setCurrentTime}
                handleSeek={handleSeek}
                setIsPlaying={setIsPlaying}
                setFixed={setFixed}
              />
            </AppView>
          </View>
        </>
        {/* )} */}

        {/* {!isPlaying && ( */}

        {/* )} */}
        <AppVideo
          source={{uri: videoURL}}
          videoRef={videoRefs}
          style={{
            width: '100%',
            height: '100%',
            alignSelf: 'center',
          }}
          resizeMode="cover"
          muted={muteVideo}
          paused={isPlaying}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          onBuffer={onBuffer}
          onProgress={onProgress}
          onEnd={onEnd}
          onSeek={onSeek}
          onReadyForDisplay={onReadyForDisplay}
        />
      </AppView>
    </Pressable>
  );
};

export default PreviewHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.DEEP_BLACK,
    width: '100%',
    height: 216,
  },
  containerStyle: {
    position: 'relative',
  },
  top: {
    position: 'absolute',
    top: 10,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
    zIndex: 30,
  },
  bottom: {
    position: 'absolute',
    width: 20,
    marginBottom: 4,
    bottom: 12,
    right: 16,
    zIndex: 30,
  },
  bar: {
    position: 'absolute',
    alignItems: 'center',
    height: 15,
    marginHorizontal: 12,
    bottom: 0,
    zIndex: 30,
    overflow: 'hidden',
  },
});
