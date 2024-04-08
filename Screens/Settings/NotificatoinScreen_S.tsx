import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppHeader, AppScreen, AppText, AppView} from '@/components';
import ToggleButton from '@/components/ToggleButton';

const NotificatoinScreen_S = () => {
  const [allowNoti, setAllowNoti] = useState(false);
  const [upcoming, setUpcoming] = useState(false);
  const [arrivals, setArrivals] = useState(false);
  const [liveChannel, setLiveChannel] = useState(false);
  const [subscription, setSubscription] = useState(false);
  const [newService, setNewService] = useState(false);
  return (
    <AppScreen containerStyle={{paddingTop: 20, paddingHorizontal: 0}}>
      <AppView className="px-5">
        <AppHeader />
      </AppView>

      <AppView className="mt-6">
        <AppView style={styles.center} className="py-5 px-5">
          <AppText className="font-medium font-MANROPE_500 text-sm text-white">
            Allow Notifications
          </AppText>
          <ToggleButton isOn={allowNoti} setIsOn={setAllowNoti} />
        </AppView>
        <AppView style={styles.center} className="py-5 bg-[#3E3D3D59] px-5">
          <AppView>
            <AppText className="font-medium font-MANROPE_500 text-sm text-white">
              New Service Available
            </AppText>
            <AppText className="max-w-[90%] mt-1 font-normal font-MANROPE_400 text-[13px] text-grey_200">
              Allow ReePlay send you notifications every time we add or announce
              a new service.
            </AppText>
          </AppView>
          <ToggleButton isOn={newService} setIsOn={setNewService} />
        </AppView>

        <AppView style={styles.center} className="py-5 px-5">
          <AppText className="font-medium font-MANROPE_500 text-sm text-white">
            Upcoming Contents
          </AppText>
          <ToggleButton isOn={upcoming} setIsOn={setUpcoming} />
        </AppView>

        <AppView style={styles.center} className="py-5 px-5 bg-[#3E3D3D59]">
          <AppText className="font-medium font-MANROPE_500 text-sm text-white">
            New Arrivals
          </AppText>
          <ToggleButton isOn={arrivals} setIsOn={setArrivals} />
        </AppView>

        <AppView style={styles.center} className="py-5 px-5">
          <AppText className="font-medium font-MANROPE_500 text-sm text-white">
            Live Channels
          </AppText>
          <ToggleButton isOn={liveChannel} setIsOn={setLiveChannel} />
        </AppView>
      </AppView>
    </AppScreen>
  );
};

export default NotificatoinScreen_S;

const styles = StyleSheet.create({
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
