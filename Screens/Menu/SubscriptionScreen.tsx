import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppHeader, AppScreen, AppView} from '@/components';
import SubscriptionStage from './components/SubscriptionStage';
import {useRoute} from '@react-navigation/native';
import {SubscriptionRouteProps} from '@/types/typings';
import Orientation from 'react-native-orientation-locker';

const SubscriptionScreen = () => {
  const [stage, setStage] = useState<string>('plan');
  const route = useRoute<SubscriptionRouteProps>();
  const tab: string = route.params.tab;
  const [orientation, setOrientation] = useState<string | null>(null);

  useEffect(() => {
    Orientation.getOrientation(orientation => {
      console.log('Current UI Orientation: ', orientation);
      setOrientation(orientation);
      // dispatch(set(orientation))
    });
  }, []);

  function handleBackBtn() {}

  return (
    <AppScreen containerStyle={{paddingTop: 10}}>
      {orientation === 'PORTRAIT' ? (
        <>
          {tab !== 'topup' && tab !== 'donate' && <AppHeader />}
          <SubscriptionStage stage={stage} setStage={setStage} tab={tab} />
        </>
      ) : (
        <AppView className="w-full h-full bg-black" />
      )}
    </AppScreen>
  );
};

export default SubscriptionScreen;

const styles = StyleSheet.create({});
