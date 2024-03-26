import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppText, AppView} from '@/components';
import {plans} from '@/configs/data';
import colors from '@/configs/colors';
import {SubscriptionNavProps} from '@/types/typings';
import {useNavigation} from '@react-navigation/native';
import routes from '@/navigation/routes';

interface Props {
  setStage: React.Dispatch<React.SetStateAction<string>>;
}

const PlanView = ({setStage}: Props) => {
  const [activeId, setActiveId] = useState<number>(1);
  const {navigate} = useNavigation<SubscriptionNavProps>();

  const handlePress = (id: number) => {
    setActiveId(id);
  };
  return (
    <AppView className="mt-10">
      <AppText
        style={{alignSelf: 'center'}}
        className="max-w-[80%] font-medium font-LEXEND_500 text-white text-[20px] text-center">
        Our monthly plan equals $1 only, converted to your local currency
      </AppText>

      <AppView className="mt-14 space-y-5">
        {plans.map(plan => {
          const showRed = plan._id === activeId;
          return (
            <AppView
              key={plan._id}
              style={{backgroundColor: showRed ? '#E2D6FF' : 'white'}}
              className="rounded-md px-4 py-5 flex-row items-center">
              <Pressable
                onPress={() => handlePress(plan._id)}
                style={{
                  borderColor: showRed ? colors.RED : '#565D6D',
                  borderWidth: 1,
                  borderRadius: 99,
                  width: 16,
                  height: 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {showRed && (
                  <AppView className="w-[9px] h-[9px] bg-red rounded-full" />
                )}
              </Pressable>

              <AppView className="ml-5">
                <AppText className="font-semibold font-LEXEND_600 text-base text-black mb-1">
                  {plan.price}
                </AppText>
                <AppText className="font-normal font-MANROPE_400 text-xs text-black">
                  {plan.desc}
                </AppText>
              </AppView>
              {plan._id === 3 && (
                <AppView className="ml-auto mb-auto py-1 px-2 rounded-[24px] bg-yellow ">
                  <AppText className="font-normal font-MANROPE_400 text-xs text-[#5E4C00]">
                    Popular
                  </AppText>
                </AppView>
              )}
            </AppView>
          );
        })}
      </AppView>

      <AppView className="mt-11">
        <AppButton
          bgColor={colors.RED}
          title="Continue"
          onPress={() => setStage('paymentSummary')}
          style={{width: '100%', borderRadius: 6}}
        />
        <AppButton
          bgColor="transparent"
          title="Cancel anytime"
          onPress={() => navigate(routes.ACCOUNT_SCREEN)}
          style={{width: '100%', marginTop: 5}}
          labelStyle={{color: '#9095A1'}}
        />
      </AppView>
    </AppView>
  );
};

export default PlanView;

const styles = StyleSheet.create({});
