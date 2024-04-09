import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  AppButton,
  AppHeader,
  AppImage,
  AppScreen,
  AppText,
  AppView,
  TouchableOpacity,
} from '@/components';
import colors from '@/configs/colors';
import Size from '@/Utils/useResponsiveSize';

interface Props {
  setStage: React.Dispatch<React.SetStateAction<string>>;
}

const SelectVotesTab = ({setStage}: Props) => {
  const [voteCount, setVoteCount] = useState<number>(0);
  return (
    <AppScreen containerStyle={{paddingTop: 15}}>
      <AppHeader handleFunc={() => setStage('preview')} />

      <AppView className="items-center mt-24">
        <AppImage
          source={require('@/assets/images/bette.png')}
          className="w-[160px] h-[160px] rounded-[22px] overflow-hidden"
        />

        <AppText className="font-MANROPE_700 text-base text-white text-center mt-9 mb-1">
          AMY AKPONYOMA | Contestant 14
        </AppText>

        <AppText className="font-MANROPE_400 text-white text-base text-center mb-5">
          Good extensive background in performance of corporate banking credit
          and financial analysis· Experienced in a range of capital market and
          cash management procedures.
        </AppText>

        <AppView className="flex-row items-center justify-center mt-5 mb-4">
          <TouchableOpacity
            onPress={() =>
              setVoteCount(voteCount < 1 ? voteCount : voteCount - 1)
            }
            style={{backgroundColor: voteCount >= 1 ? colors.RED : '#626161CF'}}
            className="w-[26px] h-[26px] rounded-full items-center justify-center mr-[1px]">
            <AppView className="w-[7px] h-[1.5px] bg-white" />
          </TouchableOpacity>
          <AppView className="mx-1 w-[26px] items-center">
            <AppText className="font-MANROPE_700 text-base text-white">
              {voteCount < 10 ? `0${voteCount}` : `${voteCount}`}
            </AppText>
          </AppView>
          <TouchableOpacity
            onPress={() =>
              setVoteCount(voteCount >= 2 ? voteCount : voteCount + 1)
            }
            style={{backgroundColor: voteCount >= 2 ? '#626161CF' : colors.RED}}
            className="w-[26px] h-[26px] rounded-full items-center justify-center relative">
            <AppView className="w-[8px] h-[1.5px] bg-white" />
            <AppView className="w-[9px] h-[1.5px] rotate-90 absolute bg-white" />
          </TouchableOpacity>
        </AppView>

        <AppText className="mb-7 text-sm font-MANROPE_400 text-center text-grey_800">
          Free accounts cannot make more than 2 votes. Purchase a subscription
          plan to get up to 5 votes.
        </AppText>

        <AppButton
          title="Continue"
          bgColor={colors.RED}
          onPress={() => setStage('paymentSummary')}
          style={{
            width: '95%',
            borderRadius: 5,
            marginBottom: 20,
            paddingVertical: Size.calcHeight(14),
          }}
        />
      </AppView>
    </AppScreen>
  );
};

export default SelectVotesTab;
