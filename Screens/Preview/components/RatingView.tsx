import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppText, AppView} from '@/components';
import {BigRateStart_F, BigRateStart_W, RateStar_F} from '@/assets/icons';
import colors from '@/configs/colors';
import Size from '@/Utils/useResponsiveSize';
import StarRating from 'react-native-star-rating-widget';

const RatingView = () => {
  const [rating, setRating] = useState<number>(0);

  return (
    <AppView className="mt-6 border-t border-grey_200/10">
      <AppView className="flex-row items-center justify-between gap-x-10">
        <AppView>
          <AppText className="font-MANROPE_600 text-white text-[40px]">
            3.8
          </AppText>
          <AppText className="font-MANROPE_400 text-base text-white -mt-1.5">
            out of 5
          </AppText>
        </AppView>

        {/* Rating */}
        <AppView className="flex-1">
          <AppView className="space-y-1 mt-[18px]">
            <AppView className="flex-row items-center justify-between gap-x-3">
              <StarIcon count={5} />
              <Bar transX={50} />
            </AppView>
            <AppView className="flex-row items-center justify-between gap-x-3">
              <StarIcon count={4} />
              <Bar transX={120} />
            </AppView>
            <AppView className="flex-row items-center justify-between gap-x-3">
              <StarIcon count={3} />
              <Bar transX={70} />
            </AppView>
            <AppView className="flex-row items-center justify-between gap-x-3">
              <StarIcon count={2} />
              <Bar transX={40} />
            </AppView>
            <AppView className="flex-row items-center justify-between gap-x-3">
              <StarIcon count={1} />
              <Bar transX={20} />
            </AppView>
          </AppView>
          <AppText className="text-right mt-[1px] font-MANROPE_400 text-base text-white">
            2706+ Ratings
          </AppText>
        </AppView>
      </AppView>

      <AppView className="mt-10 items-center">
        <StarRating
          rating={rating}
          onChange={setRating}
          style={{}}
          StarIconComponent={({type}) =>
            type === 'full' ? <BigRateStart_F /> : <BigRateStart_W />
          }
        />
        <AppText className="font-MANROPE_400 text-base text-white mt-[10px]">
          Tap stars to rate
        </AppText>
      </AppView>
    </AppView>
  );
};

export default RatingView;

const StarIcon = ({count}: {count: number}) => {
  return (
    <AppView className="flex-row items-center flex-1 mr-[15px] justify-end gap-x-[1px]">
      {[...Array(count)].map((_, i) => {
        return (
          <AppView key={i}>
            <RateStar_F />
          </AppView>
        );
      })}
    </AppView>
  );
};

const Bar = ({transX}: {transX: number}) => {
  return (
    <AppView
      style={{width: Size.calcWidth(164)}}
      className="h-1 rounded bg-dark_gold overflow-hidden">
      {/* ProgressBar */}
      <AppView
        style={{
          transform: [{translateX: -164 + transX}],
          width: 164,
          backgroundColor: colors.YELLOW_500,
        }}
        className="h-1"
      />
    </AppView>
  );
};
