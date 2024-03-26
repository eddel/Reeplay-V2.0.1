import {View, Text, StyleProp, ViewStyle, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import Video, {VideoProperties} from 'react-native-video';
import VideoRef from 'react-native-video';

interface VideoProps extends VideoProperties {
  containerStyle?: ViewStyle;
  source: any;
  videoRef?:
    | ((instance: VideoRef | null) => void)
    | React.RefObject<VideoRef>
    | null;
}

const AppVideo = ({
  containerStyle,
  source,
  videoRef,
  ...otherProps
}: VideoProps) => {
  return (
    <View style={[styles.videoContainer, containerStyle]}>
      <Video ref={videoRef} source={source} {...otherProps} />
    </View>
  );
};

export default AppVideo;

const styles = StyleSheet.create({
  videoContainer: {
    height: '100%',
    width: '100%',
  },
});
