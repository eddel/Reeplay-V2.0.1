import {
  Alert,
  FlatList,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  AppButton,
  AppImage,
  AppScreen,
  AppText,
  AppView,
  TouchableOpacity,
} from '@/components';
import colors from '@/configs/colors';
import Size from '@/Utils/useResponsiveSize';
import {LibraryData, RecentSearch} from '@/configs/data';
import {CloseBtn_S, SearchIcon_S} from '@/assets/icons';
import fonts from '@/configs/fonts';
import BlurView from 'react-native-blur-effect';
import {BlurView as Blur} from '@react-native-community/blur';

const Search = () => {
  const [text, setText] = useState<string>('');

  const url = 'https://www.tecno-mobile.com/stores/';

  const handleLink = async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };
  return (
    <AppScreen
      containerStyle={{
        paddingTop: 10,
        paddingBottom: 0,
        paddingHorizontal: 0,
        position: 'relative',
      }}>
      <AppView className="px-5 mb-2 relative">
        <AppText className="font-bold font-ROBOTO_700 text-[15px] text-white text-center">
          Search
        </AppText>
        {text !== '' && (
          <TouchableOpacity
            onPress={() => setText('')}
            className="absolute right-5">
            <AppText className="font-normal font-ROBOTO_400 text-center text-[15px] text-white">
              Cancel
            </AppText>
          </TouchableOpacity>
        )}
      </AppView>
      {text === '' ? (
        <ScrollView style={[{height: Size.getHeight() - 300}]}>
          <AppView className="px-5 pb-20">
            <AppView className="mt-6 bg-red pt-3 px-1 rounded-[15px]">
              <AppView className="flex-row items-center justify-between px-3 pb-2">
                <AppView>
                  <AppText className="font-normal font-LEXEND_400 text-base text-white ">
                    REEPLAY
                  </AppText>
                  <AppText className="font-medium font-MANROPE_500 text-white text-xs">
                    Ads that meet your interest
                  </AppText>
                </AppView>
              </AppView>

              <AppView className="h-[191px] mb-1 rounded-b-[15px] overflow-hidden border-[2px] border-black">
                <AppImage
                  source={require('@/assets/images/Ads.png')}
                  className="h-full w-full object-contain rounded-b-[15px]"
                />
              </AppView>
            </AppView>

            <AppButton
              title="BUY NOW"
              bgColor={colors.RED}
              onPress={() => handleLink()}
              style={{
                borderRadius: 5,
                width: '100%',
                marginTop: 15,
                paddingVertical: Size.calcHeight(15),
              }}
              labelStyle={{
                fontFamily: fonts.MANROPE_500,
                fontSize: 14.5,
                fontWeight: '500',
                color: '#ffffff',
              }}
            />

            <AppView className="mt-6 rounded-[15px] overflow-hidden bg-[#1A1A1A]">
              <AppView className="bg-[#1A1A1A] rounded-t-[15px] pt-5 pb-4 px-[18px]">
                <AppText className="font-bold font-ROBOTO_700 text-white text-lg">
                  RECENT
                </AppText>
                <AppText className="font-normal font-MANROPE_400 text-white text-[13px]">
                  Your recent searches
                </AppText>
              </AppView>
              <AppView className="bg-black border-x-[3px] pl-[10px] pt-2 border-b-[3px] rounded-b-[15px] border-[#1A1A1A] w-full h-[150px]">
                <FlatList
                  data={RecentSearch}
                  keyExtractor={(_, index) => index.toString()}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity className="overflow-hidden w-[101px] h-[131px] mr-2 rounded-[10px]">
                        <AppImage
                          source={item.image}
                          className="w-full h-full object-contain"
                        />
                      </TouchableOpacity>
                    );
                  }}
                />
              </AppView>
            </AppView>

            <AppView className="mt-6 mb-3 rounded-[15px] overflow-hidden bg-[#1A1A1A]">
              <AppView className="bg-[#1A1A1A] rounded-t-[15px] pt-5 pb-4 px-[18px]">
                <AppText className="font-bold font-ROBOTO_700 text-white text-lg">
                  SUGGESTIONS
                </AppText>
              </AppView>
              <AppView className="bg-black border-x-[3px] pl-[10px] pt-2 border-b-[3px] rounded-b-[15px] border-[#1A1A1A] w-full h-[150px]">
                <FlatList
                  data={RecentSearch}
                  keyExtractor={(_, index) => index.toString()}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity className="overflow-hidden w-[101px] h-[131px] mr-2 rounded-[10px]">
                        <AppImage
                          source={item.image}
                          className="w-full h-full object-contain"
                        />
                      </TouchableOpacity>
                    );
                  }}
                />
              </AppView>
            </AppView>
          </AppView>
        </ScrollView>
      ) : (
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}>
          <AppView style={styles.centerContent} className="pb-40 w-full">
            {LibraryData.map((lib, index) => {
              return (
                <TouchableOpacity activeOpacity={0.6} key={index}>
                  <AppImage source={lib.image} style={styles.image} />
                </TouchableOpacity>
              );
            })}
          </AppView>
        </ScrollView>
      )}

      <AppView className="absolute bottom-0 z-30 w-full">
        <AppView className="relative w-full items-center">
          {Platform.OS === 'android' ? (
            <AppView style={styles.blur}>
              <BlurView backgroundColor="rgba(0, 0, 0, 0.4)" blurRadius={50} />
            </AppView>
          ) : (
            <Blur blurType="dark" blurAmount={50} style={styles.blur} />
          )}
          <AppView
            style={{paddingVertical: Platform.OS === 'android' ? 6 : 18}}
            className="absolute top-3 mx-auto w-[95%] px-6 rounded-[40px] bg-black flex-row items-center z-50">
            <TouchableOpacity className="mr-3">
              <SearchIcon_S />
            </TouchableOpacity>
            <TextInput
              placeholder="Search Movies, Shows, Anime"
              placeholderTextColor={colors.GREY_WHITE}
              style={styles.input}
              value={text}
              onChangeText={text => setText(text)}
            />
            <TouchableOpacity onPress={() => setText('')} className="ml-3">
              <CloseBtn_S />
            </TouchableOpacity>
          </AppView>
        </AppView>
      </AppView>
    </AppScreen>
  );
};

export default Search;

const styles = StyleSheet.create({
  blur: {
    width: '100%',
    height: 83,
  },
  input: {
    fontFamily: fonts.MANROPE_400,
    fontWeight: '400',
    fontSize: Size.calcHeight(15),
    color: colors.GREY_WHITE,
    textAlign: 'center',
    flex: 1,
  },
  image: {
    width: Size.getWidth() / 3 - 20,
    height: 133,
    borderRadius: 15,
  },
  centerContent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    columnGap: Size.calcHeight(10),
    rowGap: Size.calcHeight(10),
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
});
