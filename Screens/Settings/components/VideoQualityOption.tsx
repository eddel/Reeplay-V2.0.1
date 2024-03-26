import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppText} from '@/components';
import {QualityCheck} from '@/assets/icons';
import fonts from '@/configs/fonts';

const options = ['Automatic', '4K', '2K', '1080 P', '720 P', '480 P'];

const VideoQualityOption = () => {
  const [activeIndx, setActiveIndx] = useState<number>(0);
  return (
    <View>
      {options.map((item, i) => {
        const show = activeIndx === i;
        return (
          <Pressable style={[styles.center]} onPress={() => setActiveIndx(i)}>
            <AppText
              style={show && {fontWeight: '700', fontFamily: fonts.ROBOTO_700}}
              className="font-normal mr-1 font-ROBOTO_400 text-[13px] text-black">
              {item}
            </AppText>
            {show && <QualityCheck />}
          </Pressable>
        );
      })}
    </View>
  );
};

export default VideoQualityOption;

const styles = StyleSheet.create({
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
});
