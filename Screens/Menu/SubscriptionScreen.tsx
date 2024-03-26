import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppHeader, AppScreen} from '@/components';
import SubscriptionStage from './components/SubscriptionStage';
import {useRoute} from '@react-navigation/native';
import {SubscriptionRouteProps} from '@/types/typings';

const SubscriptionScreen = () => {
  const [stage, setStage] = useState<string>('plan');
  const route = useRoute<SubscriptionRouteProps>();
  const tab: string = route.params.tab;

  function handleBackBtn() {}

  return (
    <AppScreen containerStyle={{paddingTop: 10}}>
      {tab !== 'topup' && tab !== 'donate' && <AppHeader />}
      <SubscriptionStage stage={stage} setStage={setStage} tab={tab} />
    </AppScreen>
  );
};

export default SubscriptionScreen;

const styles = StyleSheet.create({});
