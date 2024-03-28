import {
  Alert,
  Animated,
  Linking,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  AppButton,
  AppImage,
  AppScreen,
  AppText,
  AppView,
  TouchableOpacity,
} from '@/components';
import Header from '../Home/Header';
import colors from '@/configs/colors';
import LinearGradient from 'react-native-linear-gradient';
import Size from '@/Utils/useResponsiveSize';
import fonts from '@/configs/fonts';
import {LibraryData} from '@/configs/data';
import {useNavigation} from '@react-navigation/native';
import Share from 'react-native-share';
import {previewContentType} from '@/navigation/AppNavigator';
import routes from '@/navigation/routes';
import {PreviewScreenNav} from '@/types/typings';
import BlurView from 'react-native-blur-effect';
import {BlurView as Blur} from '@react-native-community/blur';

const CastScreeen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isScrolled, setIsScrolled] = useState(0);
  const {goBack, navigate} = useNavigation<PreviewScreenNav>();
  const url = 'https://www.instagram.com/reeplayapp';

  const handleLink = async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  const handleShare = () => {
    Share.open({message: 'share movie'})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  useEffect(() => {
    const listernerID = scrollY.addListener(({value}) => {
      if (value < 0) return;
      setIsScrolled(value);
    });

    return () => {
      scrollY.removeListener(listernerID);
    };
  }, [scrollY]);

  return (
    <>
      <Header scroll={isScrolled} isCast />

      <Animated.ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingHorizontal: 0,
          position: 'relative',
          width: '100%',
          // height: '100%',
          backgroundColor: colors.DEEP_BLACK,
        }}>
        <AppView className="relative">
          <LinearGradient
            colors={['rgba(0,0,0,0.85)', 'transparent']}
            style={styles.gradientStyles}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.55)', 'rgba(0,0,0,0.95)']}
            style={[
              styles.gradientStyles,
              {bottom: 0, height: Size.calcHeight(160)},
            ]}
          />

          <AppImage
            source={require('@/assets/images/castImage.png')}
            className="w-full h-[500px]"
          />

          <AppView className="absolute bottom-0 z-30 items-center w-full">
            <AppText className="teext-center uppercase font-bold font-ROBOTO_700 text-[15px] text-white">
              Actor
            </AppText>
            <AppText className="mt-1 font-bold font-ROBOTO_700 text-[30px] text-white text-center">
              Richard Mofe
            </AppText>
            <AppButton
              bgColor={colors.RED}
              title="FAN PAGE"
              onPress={handleLink}
              style={styles.btn}
              labelStyle={styles.btnText}
            />
          </AppView>
        </AppView>

        <AppView className="w-full items-center pt-4">
          <AppText className="max-w-[83%] mt-2 font-normal tracking-wide font-ROBOTO_400 text-white text-[14px] text-center">
            #2skidBette #enterpreneur #upcomingartist Editor | Developer |
            Talent | Music Artiste | Business Ready to Pick the Dreams that
            chosed Me.
          </AppText>

          <AppText className="mt-6 font-bold font-ROBOTO_700 text-[15px] text-white text-center">
            OTHER MOVIES FEATURED ON
          </AppText>

          <AppView className="w-full mt-5 px-1 flex-row flex-wrap items-center justify-evenly mb-32">
            {LibraryData.map((lib, index) => {
              return (
                <TouchableOpacity
                  className="mb-4"
                  activeOpacity={0.6}
                  key={index}
                  onPress={() =>
                    navigate(routes.PREVIEW_SCREEN, {
                      content: previewContentType.film,
                    })
                  }>
                  <AppImage source={lib.image} style={styles.image} />
                </TouchableOpacity>
              );
            })}
          </AppView>
        </AppView>
      </Animated.ScrollView>
      <AppView className="absolute bottom-0 w-full h-[123px]">
        <AppView className="relative">
          {Platform.OS === 'android' ? (
            <AppView style={styles.blur}>
              <BlurView
                backgroundColor="rgba(255, 255, 255, 0.1)"
                blurRadius={20}
              />
            </AppView>
          ) : (
            <Blur blurType="dark" blurAmount={30} style={styles.blur} />
          )}

          <AppView className="absolute w-full h-full px-2 pt-1">
            <TouchableOpacity
              className="py-5 border-b border-grey_200/10 pb-[21px]"
              onPress={handleShare}>
              <AppText className="text-center font-normal font-ROBOTO_400 text-[13px] text-grey_100">
                Share
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity className="py-5" onPress={goBack}>
              <AppText className="text-center font-normal font-ROBOTO_400 text-[13px] text-grey_100">
                Close
              </AppText>
            </TouchableOpacity>
          </AppView>
        </AppView>
      </AppView>
    </>
  );
};

export default CastScreeen;

const styles = StyleSheet.create({
  gradientStyles: {
    width: '100%',
    height: Size.calcHeight(130),
    zIndex: 1,
    position: 'absolute',
  },
  btn: {
    width: Size.calcWidth(186),
    borderRadius: 15,
    paddingVertical: Size.calcHeight(14.5),
    marginTop: Size.calcHeight(12),
  },
  btnText: {
    fontFamily: fonts.ROBOTO_700,
    fontWeight: '700',
    fontSize: 15,
    color: colors.WHITE,
  },
  blur: {
    width: '100%',
    height: 123,
  },
  image: {
    width: Size.getWidth() / 3 - 20,
    height: 133,
    borderRadius: 15,
  },
});
