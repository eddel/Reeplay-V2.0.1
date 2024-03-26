import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppImage, AppText, AppView, TouchableOpacity} from '@/components';

interface Props {
  setIsDownload: () => void;
}

const DownloadModal = ({setIsDownload}: Props) => {
  return (
    <AppView className="w-full items-center">
      <AppImage
        source={require('@/assets/images/Download.png')}
        className="w-[165px] h-[123px] rounded-lg overflow-hidden"
      />
      <AppText className="max-w-[149px] mt-4 text-center font-normal font-ROBOTO_400 text-[13px] text-black">
        Are you sure you want to delete this content from downloads?
      </AppText>

      <AppView className="flex-row items-center gap-x-1.5 -mb-12 mt-7">
        <TouchableOpacity onPress={setIsDownload}>
          <AppText className="font-medium font-ROBOTO_500 text-[14px] text-black">
            No
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity>
          <AppText className="font-medium font-ROBOTO_500 text-[14px] text-black">
            Yes
          </AppText>
        </TouchableOpacity>
      </AppView>
    </AppView>
  );
};

export default DownloadModal;

const styles = StyleSheet.create({});
