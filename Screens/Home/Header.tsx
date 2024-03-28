import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppImage, AppView, TouchableOpacity} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import {HamBurger, ModalLogo, SearchIcon} from '@/assets/icons';
import {useNavigation} from '@react-navigation/native';
import {TabMainNavigation} from '@/types/typings';
import routes from '@/navigation/routes';
import BlurView from 'react-native-blur-effect';
import {BlurView as Blur} from '@react-native-community/blur';

interface HeaderProps {
  scroll: number;
  isCast?: boolean;
}

const Header = ({scroll, isCast}: HeaderProps) => {
  const {navigate} = useNavigation<TabMainNavigation>();

  console.log(scroll);

  const Children = () => (
    <AppView className="flex-row justify-between items-center px-6">
      <TouchableOpacity onPress={() => navigate(routes.MAIN)}>
        <HamBurger />
      </TouchableOpacity>

      {!isCast && (
        <>
          <AppImage source={require('@/assets/images/smallLogo.png')} />
          <TouchableOpacity
            onPress={() => navigate(routes.SEARCH_SCREEN)}
            style={{width: 30, height: 30, borderRadius: 99}}
            className="bg-red items-center justify-center">
            <SearchIcon />
          </TouchableOpacity>
        </>
      )}
    </AppView>
  );

  return (
    <>
      {Platform.OS === 'ios' ? (
        <>
          {scroll > 0 ? (
            // <View>

            // </View>
            <>
              <Blur
                overlayColor="transparent"
                blurType="dark"
                blurAmount={32}
                style={[styles.container, isCast && styles.cast]}>
                {Platform.OS === 'ios' && Children()}
              </Blur>
            </>
          ) : (
            <View style={[styles.container, isCast && styles.cast]}>
              {Children()}
            </View>
          )}
        </>
      ) : (
        <>
          <AppView style={[styles.container, isCast && styles.cast]}>
            {scroll > 0 && (
              <BlurView
                backgroundColor="rgba(255, 255, 255, 0.1)"
                blurRadius={scroll > 0 ? 20 : scroll}
              />
            )}

            <AppView
              style={[
                {
                  justifyContent: isCast ? 'center' : 'flex-end',
                  height: Size.calcHeight(127),
                },
                isCast && {paddingTop: 25},
              ]}
              className="absolute w-full z-40">
              {Children()}
            </AppView>
          </AppView>
        </>
      )}
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: Platform.OS === 'ios' ? Size.calcHeight(125) : Size.calcHeight(130),
    justifyContent: 'flex-end',
  },
  cast: {
    height: Platform.OS === 'ios' ? Size.calcHeight(110) : Size.calcHeight(115),
    justifyContent: 'center',
    paddingTop: 30,
  },
});
