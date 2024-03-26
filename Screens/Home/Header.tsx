import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppImage, AppView, TouchableOpacity} from '@/components';
import Size from '@/Utils/useResponsiveSize';
import {HamBurger, ModalLogo, SearchIcon} from '@/assets/icons';
import {useNavigation} from '@react-navigation/native';
import {TabMainNavigation} from '@/types/typings';
import routes from '@/navigation/routes';
import {BlurView} from '@react-native-community/blur';

interface HeaderProps {
  scroll: number;
  isCast?: boolean;
}

const Header = ({scroll, isCast}: HeaderProps) => {
  const {navigate} = useNavigation<TabMainNavigation>();

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
      {scroll > 0 ? (
        // <View>

        // </View>
        <>
          <BlurView
            overlayColor="transparent"
            blurType="dark"
            blurAmount={32}
            style={[styles.container, isCast && styles.cast]}>
            {Platform.OS === 'ios' && Children()}
          </BlurView>
          {Platform.OS === 'android' && (
            <AppView
              style={{
                justifyContent: isCast ? 'center' : 'flex-end',
                height: Size.calcHeight(127),
              }}
              className="absolute w-full z-40">
              {Children()}
            </AppView>
          )}
        </>
      ) : (
        <View style={[styles.container, isCast && styles.cast]}>
          {Children()}
        </View>
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
