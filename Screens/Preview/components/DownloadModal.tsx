import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppImage, AppText, AppView, TouchableOpacity} from '@/components';

interface Props {
  setIsDownload: () => void;
  handleDelete: () => void;
}

const DownloadModal = ({setIsDownload, handleDelete}: Props) => {
  return (
    <AppView className="w-full items-center">
      <AppImage
        source={require('@/assets/images/Download.png')}
        className="w-[165px] h-[123px] rounded-lg overflow-hidden"
      />
      <AppText className="max-w-[149px] mt-4 text-center font-ROBOTO_400 text-[13px] text-black">
        Are you sure you want to delete this content from downloads?
      </AppText>

      <AppView className="flex-row items-center gap-x-4 -mb-12 mt-7">
        <TouchableOpacity onPress={setIsDownload}>
          <AppText className="font-ROBOTO_500 text-[14px] text-black">
            No
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => [handleDelete(), setIsDownload()]}>
          <AppText className="font-ROBOTO_500 text-[14px] text-black">
            Yes
          </AppText>
        </TouchableOpacity>
      </AppView>
    </AppView>
  );
};

export default DownloadModal;

const styles = StyleSheet.create({});
