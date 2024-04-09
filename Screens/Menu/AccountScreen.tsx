import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  AppButton,
  AppImage,
  AppScreen,
  AppText,
  AppView,
  TouchableOpacity,
} from '@/components';
import {useNavigation} from '@react-navigation/native';
import {
  AccountDashboard,
  ArrowRight,
  CardDots,
  EditIcon,
  Green_SubscripeIcon,
  PasswordDashboard,
  PhoneDashboard,
  PinDashboard,
  SubscribeIcon,
  VisaCard,
} from '@/assets/icons';
import colors from '@/configs/colors';
import Size from '@/Utils/useResponsiveSize';
import {AccountdNavProps} from '@/types/typings';
import routes from '@/navigation/routes';
import {CameraOptions, launchImageLibrary} from 'react-native-image-picker';
import AppModal from '@/components/AppModal';
import fonts from '@/configs/fonts';
import {MenuNavigationProps} from './MenuScreen';

const AccountScreen = () => {
  const {navigate} = useNavigation<AccountdNavProps>();
  const nav = useNavigation<MenuNavigationProps>();
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const billingService = false;

  let options: CameraOptions = {
    saveToPhotos: true,
    mediaType: 'photo',
    // includeBase64: true
    // includeExtra: true,
  };

  const openGallery = async () => {
    const result: any = await launchImageLibrary(options);
    setProfilePic(result.assets[0].uri);

    //Run upload endpoint here...to save image to database
  };

  function handleLogout() {
    nav.navigate(routes.AUTH);
    setShowModal(false);
  }

  return (
    <>
      <AppScreen scrollable containerStyle={{paddingTop: 20}}>
        <TouchableOpacity onPress={() => navigate(routes.MENU_SCREEN)}>
          <AppText className="font-ROBOTO_400 text-white text-[15px]">
            Back
          </AppText>
        </TouchableOpacity>

        <AppView className="flex-row items-center justify-between mt-3">
          <AppView className="flex-row items-center gap-x-[14px]">
            {profilePic === null ? (
              <AppImage
                source={require('@/assets/images/bbn.png')}
                className="w-[64px] h-[64px] rounded-full"
              />
            ) : (
              <AppImage
                source={{uri: profilePic}}
                className="w-[64px] h-[64px] rounded-full"
              />
            )}

            <AppView>
              <AppText className="font-MANROPE_700 text-white text-lg">
                Edward Bette
              </AppText>
              <AppText className="font-MANROPE_400 text-grey_100 text-[14px]">
                Joined Dec 06, 2023
              </AppText>
            </AppView>
          </AppView>

          <TouchableOpacity onPress={openGallery}>
            <EditIcon />
          </TouchableOpacity>
        </AppView>

        {/* Body */}
        <AppView className="mt-11">
          <AppText className="font-MANROPE_500 text-[16px] text-white uppercase">
            ACCOUNT
          </AppText>
          <AppView className="mt-3 pt-5 pb-7 pl-4 pr-5 space-y-9 border border-[#C4C4C445] rounded-md bg-[#1A1A1AD9]">
            <TouchableOpacity
              onPress={() => navigate(routes.CHANGE_EMAIL)}
              className="flex-row items-center justify-between">
              <AppView className="flex-row items-center">
                <AccountDashboard />
                <AppText className="ml-2 font-MANROPE_400 text-base text-white">
                  Reeplay@gmail.com
                </AppText>
              </AppView>
              {/* Arroa */}
              <ArrowRight />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigate(routes.CHANGE_PASSWORD)}
              className="flex-row items-center justify-between">
              <AppView className="flex-row items-center">
                <PasswordDashboard />
                <AppText className="ml-2 font-MANROPE_400 text-base text-white">
                  Change Password
                </AppText>
              </AppView>
              {/* Arroa */}
              <ArrowRight />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigate(routes.CHANGE_PIN)}
              className="flex-row items-center justify-between">
              <AppView className="flex-row items-center">
                <PinDashboard />
                <AppText className="ml-2 font-MANROPE_400 text-base text-white">
                  Change Pin
                </AppText>
              </AppView>
              {/* Arroa */}
              <ArrowRight />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigate(routes.CHANGE_PHONE)}
              className="flex-row items-center justify-between">
              <AppView className="flex-row items-center">
                <PhoneDashboard />
                <AppText className="ml-2 font-MANROPE_400 text-base text-white">
                  +2347057456832
                </AppText>
              </AppView>
              {/* Arroa */}
              <ArrowRight />
            </TouchableOpacity>
          </AppView>
        </AppView>

        <AppView className="mt-10">
          <AppText className=" font-MANROPE_500 text-[16px] text-white uppercase">
            BILLING
          </AppText>
          <AppView className="mt-3 pt-5 pb-7 pl-4 pr-5 border border-[#C4C4C445] rounded-md bg-[#1A1A1AD9]">
            {billingService ? (
              <AppView className="flex-row items-center justify-between mb-9">
                <AppView className="flex-row items-center">
                  <VisaCard />
                  <AppView className="flex-row items-center ml-3">
                    <CardDots />
                    <AppText className="font-MANROPE_500 text-[15px] text-white ml-1.5">
                      5071
                    </AppText>
                  </AppView>
                </AppView>

                <TouchableOpacity className="flex-row items-center mr-1.5">
                  <Green_SubscripeIcon />
                  <AppText className="font-MANROPE_400 text-[13px] text-green ml-1">
                    Active Plan
                  </AppText>
                </TouchableOpacity>
              </AppView>
            ) : (
              <TouchableOpacity
                onPress={() =>
                  navigate(routes.SUBSCRIPTION_SCREEN, {tab: 'getSubscription'})
                }
                className="flex-row items-center gap-x-2 mb-7">
                <SubscribeIcon />
                <AppText className=" font-MANROPE_400 text-yellow text-base">
                  Get Subscription
                </AppText>
              </TouchableOpacity>
            )}

            <TouchableOpacity className="flex-row items-center justify-between ml-1 mb-8">
              <AppText className=" font-MANROPE_400 text-[16px] text-white">
                {billingService
                  ? 'Your next billing date is Jan 14, 2024'
                  : 'Your next billing date is not available'}
              </AppText>
              <ArrowRight />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigate(routes.ADD_PAYMENT_METHOD)}
              className="flex-row items-center justify-between">
              <AppText className="ml-2 font-MANROPE_400 text-[16px] text-white">
                {billingService
                  ? 'Change Payment Method '
                  : 'Add Payment Method / Billing Details'}
              </AppText>
              {/* Arroa */}
              <ArrowRight />
            </TouchableOpacity>

            <AppView className="mt-10">
              {billingService ? (
                <AppView className="flex-row items-center justify-between px-5">
                  <AppView className="ml-2">
                    <AppText className=" font-ROBOTO_700 text-base text-red">
                      ₦300.00
                    </AppText>
                    <AppText className=" font-MANROPE_400 text-white text-[14px] text-center">
                      Balance
                    </AppText>
                  </AppView>

                  <AppButton
                    bgColor={colors.RED}
                    title="Top up"
                    onPress={() =>
                      navigate(routes.SUBSCRIPTION_SCREEN, {
                        tab: 'topup',
                      })
                    }
                    style={{
                      width: '37%',
                      borderRadius: 5,
                      paddingVertical: Size.calcHeight(13),
                    }}
                  />
                </AppView>
              ) : (
                <AppButton
                  bgColor={colors.RED}
                  title="Top up"
                  onPress={() =>
                    navigate(routes.SUBSCRIPTION_SCREEN, {tab: 'topup'})
                  }
                  style={{
                    width: '100%',
                    borderRadius: 5,
                    paddingVertical: Size.calcHeight(15),
                  }}
                />
              )}
            </AppView>
          </AppView>
        </AppView>

        <AppView className="mt-6 ml-6 mb-10">
          <Pressable
            onPress={() =>
              billingService
                ? navigate(routes.CANCEL_SUBSCRIPTION_SCREEN)
                : setShowModal(true)
            }>
            <AppText className=" font-MANROPE_400 text-sm text-[#DE3B40]">
              {billingService ? 'Cancel Subscription' : 'Log out'}
            </AppText>
          </Pressable>
          <Pressable onPress={() => navigate(routes.DELETE_ACCOUNT_SCREEN)}>
            <AppText className="mt-3 font-MANROPE_400 text-sm text-light_blue">
              Delete account
            </AppText>
          </Pressable>
        </AppView>
      </AppScreen>

      <AppModal
        isModalVisible={showModal}
        replaceDefaultContent={
          <AppView className="">
            <AppText className="mt-4 font-ROBOTO_400 text-sm text-black text-center leading-5">
              Are you sure you want to {'\n'}Logout?
            </AppText>

            <AppView className="mt-7" />
            <AppButton
              bgColor={colors.DARK_GREY}
              title="No"
              onPress={() => setShowModal(false)}
              style={styles.btn}
              labelStyle={styles.btnLabel}
            />
            <AppButton
              bgColor={colors.RED}
              title="Yes"
              onPress={() => handleLogout()}
              style={styles.btn}
              labelStyle={styles.btnLabel}
            />
          </AppView>
        }
        handleClose={() => setShowModal(false)}
      />
    </>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  btnLabel: {
    fontFamily: fonts.ROBOTO_700,
    fontSize: 16,
    color: colors.GREY_100,
    marginLeft: 8,
    marginTop: 1,
  },
  btn: {
    width: Size.getWidth() * 0.4,
    paddingTop: Size.calcHeight(9),
    paddingBottom: Size.calcHeight(8),
    borderRadius: 4,
    marginVertical: 5,
  },
});
