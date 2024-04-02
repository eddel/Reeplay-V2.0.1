import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppImage, AppText, AppView, TouchableOpacity} from '@/components';
import {LikeBtn, LikeBtn_F, ReplyIcon} from '@/assets/icons';
import useToggle from '@/Hooks/useToggle';

const CommentCard = () => {
  return (
    <AppView className="border-t border-grey_200/10 mt-4 pt-4 px-3">
      <SingleCommentCard />
      <AppView className="ml-[50px] mt-3">
        <SingleCommentCard />
      </AppView>
    </AppView>
  );
};

export default CommentCard;

const SingleCommentCard = () => {
  const [isLike, setIsLike] = useToggle(false);
  return (
    <AppView className="flex-row">
      <AppImage
        className="w-[39px] h-[39px] rounded-full mr-4"
        source={require('@/assets/images/bette.png')}
      />
      <AppView>
        {/* Content */}
        <AppText className="font-normal font-ROBOTO_400 text-[11.8px] tracking-wide max-w-[93%] text-white">
          2 Sisters set out to Impress the World in a thrilling show of Bravery
          and Comedic Trickery.
        </AppText>

        {/* Name */}
        <AppView className="flex-row items-center gap-x-1 mt-[3px]">
          <AppText className="font-bold font-ROBOTO_700 text-[11.8px] text-yellow">
            RMD
          </AppText>
          <AppText className="font-normal font-ROBOTO_400 text-[11.8px] text-grey_200">
            1 hour ago
          </AppText>
        </AppView>

        {/* Buttons */}
        <AppView className="flex-row items-center gap-x-4 mt-[10px]">
          <AppView className="flex-row items-center gap-x-1.5">
            <TouchableOpacity onPress={setIsLike}>
              {isLike ? <LikeBtn_F /> : <LikeBtn />}
            </TouchableOpacity>
            <AppText className="font-ROBOTO_400 font-normal text-white text-[11.8px]">
              29
            </AppText>
          </AppView>
          <TouchableOpacity className="flex-row items-center gap-x-1.5">
            <ReplyIcon />
            <AppText className="text-[11.8px] text-yellow font-normal font-ROBOTO_400">
              Reply
            </AppText>
          </TouchableOpacity>
        </AppView>
      </AppView>
    </AppView>
  );
};

const styles = StyleSheet.create({});
