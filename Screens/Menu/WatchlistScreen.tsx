import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AppImage,
  AppScreen,
  AppText,
  AppView,
  TouchableOpacity,
} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import {LibraryData} from '@/configs/data';
import AppModal from '@/components/AppModal';
import {CloseLogo} from '@/assets/icons';
import {useNavigation} from '@react-navigation/native';
import {WatchlistScreenNav} from '@/types/typings';
import routes from '@/navigation/routes';
import {previewContentType} from '@/navigation/AppNavigator';

const WatchlistScreen = () => {
  const {goBack, navigate} = useNavigation<WatchlistScreenNav>();
  return (
    <AppScreen containerStyle={{paddingTop: 10}}>
      {LibraryData.length === 0 ? (
        <AppModal
          isModalVisible={true}
          hideLoge
          replaceDefaultContent={
            <AppView className="mb-[74px] mt-14 items-center">
              <CloseLogo />
              <AppText className="mt-5 leading-5 font-normal font-ROBOTO_400 text-[14px] text-black text-center">
                Your watchlist is empty.{'\n'} You haven't added any content to
                your watchlist yet.
              </AppText>
            </AppView>
          }
          handleClose={goBack}
        />
      ) : (
        <>
          <AppText className="text-center font-bold font-LEXEND_700 text-grey_100 text-[17px]">
            My Watchlist
          </AppText>

          <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.centerContent}>
            {LibraryData.map((lib, index) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigate(routes.PREVIEW_SCREEN, {
                      content: previewContentType.film,
                    })
                  }
                  activeOpacity={0.6}
                  key={index}>
                  <AppImage source={lib.image} style={styles.image} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </>
      )}
    </AppScreen>
  );
};

export default WatchlistScreen;

const styles = StyleSheet.create({
  image: {
    width: Size.getWidth() / 3 - 20,
    height: 133,
    borderRadius: 15,
  },
  centerContent: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: Size.calcHeight(10),
    rowGap: Size.calcHeight(13),
    paddingBottom: 20,
    marginTop: 20,
  },
});
