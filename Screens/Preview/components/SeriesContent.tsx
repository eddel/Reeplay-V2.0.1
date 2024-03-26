import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppImage, AppText, AppView, TouchableOpacity} from '@/components';
import {
  MiniPlayBtn,
  OpenDropDwn,
  PreviewDownloadIcon,
  SmPlayIcon,
} from '@/assets/icons';
import {SeriesEpisodesData} from '@/configs/data';
import {useNavigation} from '@react-navigation/native';
import {PreviewScreenNav} from '@/types/typings';
import routes from '@/navigation/routes';
import {fullVideoType} from '@/navigation/AppNavigator';

const SeriesContent = () => {
  return (
    <AppView className="mt-3 pt-[10px] border-t border-grey_200/10">
      <AppView className="w-[82px]">
        <AppText className="font-ROBOTO_700 font-bold text-white text-[13px]">
          EPISODES
        </AppText>
        <AppView className="w-[47px] mt-[3px] ml-1.5 h-[2px] bg-grey_100 rounded-[1px]" />
      </AppView>

      <AppView className="mt-5">
        <TouchableOpacity className="ml-1 mb-2 flex-row items-center">
          <AppText className="mr-2 font-normal font-ROBOTO_400 text-white text-[13px]">
            Season 1
          </AppText>
          <OpenDropDwn />
        </TouchableOpacity>

        {SeriesEpisodesData.map((series, index) => {
          return (
            <SeriesView
              key={index}
              index={index + 1}
              title={series.title}
              image={series.image}
              description={series.description}
              videoURL={series.videoURL}
              duration={series.duration}
              durationWatched={series.durationWatched}
            />
          );
        })}
      </AppView>
    </AppView>
  );
};

export default SeriesContent;

interface SeriesViewProps {
  image: any;
  index: number;
  description: string;
  videoURL: string;
  title: string;
  duration: number;
  durationWatched: number;
}

const SeriesView = ({
  image,
  description,
  index,
  title,
  videoURL,
  duration,
  durationWatched,
}: SeriesViewProps) => {
  const {navigate} = useNavigation<PreviewScreenNav>();
  const progressRatio = durationWatched / duration;
  const progressBarWidth = 153 * progressRatio;

  return (
    <AppView className="mb-6 flex-row w-full">
      {/* Player */}
      <AppView className="w-[153px] h-[95px] items-center justify-center overflow-hidden rounded-[8px] relative">
        <AppImage
          className="w-full h-full absolute object-contain"
          source={image}
        />

        <TouchableOpacity
          onPress={() =>
            navigate(routes.FULL_SCREEN_VIDEO, {
              type: fullVideoType.series,
              videoURL: videoURL,
            })
          }
          className="absolute z-30 w-7 h-7 items-center justify-center rounded-full bg-black/60">
          <MiniPlayBtn />
        </TouchableOpacity>

        <AppView className="absolute bottom-0 w-full h-1 bg-grey_100">
          {/* ProgressBar */}
          <AppView
            style={{
              transform: [{translateX: -153 + progressBarWidth}],
              width: 153,
            }}
            className="h-1 bg-red"
          />
        </AppView>
      </AppView>
      {/* details */}
      <AppView className="ml-3 flex-row flex-1">
        <AppView className="mt-2 ">
          <AppView className="flex-row items-center">
            <AppText className="mr-1 font-normal font-ROBOTO_400 text-[13px] text-white">
              {index}.
            </AppText>
            <AppText className="font-normal font-ROBOTO_400 text-[13px] text-white">
              {title}
            </AppText>
          </AppView>

          <AppText className="max-w-[90%] mt-[7px] font-normal font-ROBOTO_400 text-[11px] text-white">
            {description}
          </AppText>
        </AppView>

        {/* Button */}
        <TouchableOpacity
          style={{alignContent: 'center', alignSelf: 'center'}}
          className="ml-1.5">
          <PreviewDownloadIcon />
        </TouchableOpacity>
      </AppView>
    </AppView>
  );
};

const styles = StyleSheet.create({});
