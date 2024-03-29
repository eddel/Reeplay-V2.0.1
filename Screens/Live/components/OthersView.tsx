import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SectionHeader, {
  headerProps,
} from '@/Screens/Home/components/SectionHeader';
import {AppImage, AppText, AppView, TouchableOpacity} from '@/components';
import LinearGradient from 'react-native-linear-gradient';
import Size from '@/Utils/useResponsiveSize';
import {BlurView as Blur} from '@react-native-community/blur';
import BlurView from 'react-native-blur-effect';
import fonts from '@/configs/fonts';
import colors from '@/configs/colors';
import routes from '@/navigation/routes';
import {fullVideoType} from '@/navigation/AppNavigator';
import {useNavigation} from '@react-navigation/native';
import {TabMainNavigation} from '@/types/typings';

interface OthersProps extends headerProps {
  data: any[];
}

const OthersView = ({data, title}: OthersProps) => {
  const navigation = useNavigation<TabMainNavigation>();
  return (
    <>
      <SectionHeader
        title={title}
        btnText=""
        onPress={() => console.log('first')}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          columnGap: 10,
          rowGap: 12,
          marginTop: 10,
          paddingBottom: 10,
        }}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate(routes.FULL_SCREEN_VIDEO, {
                  type: fullVideoType.live,
                  videoURL: item.video,
                  donate: true,
                })
              }
              className="w-[171px] h-[89px] rounded-t-[5px] overflow-hidden relative">
              <AppImage
                className="absolute top-0 bottom-0 z-10"
                style={{height: 89, width: 171}}
                source={item.image}
              />
              <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 0.9)']}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  height: 70,
                  width: '100%',
                  zIndex: 20,
                }}
              />

              <AppView className="w-full px-2 absolute bottom-1.5 flex-row items-end justify-between z-30">
                <AppView>
                  <AppText
                    style={[
                      styles.title,
                      {
                        fontSize: Size.calcHeight(7),
                        fontWeight: '400',
                      },
                    ]}>
                    {item.title}
                  </AppText>
                  <AppText style={styles.title}>
                    {item.author.length > 14
                      ? `${item.author.substring(0, 14)}...`
                      : item.author}
                  </AppText>
                </AppView>
                <AppView className="flex-row items-center gap-x-2">
                  <AppText className="mt-[2px] font-medium font-ROBOTO_500 text-[9px] text-white -mr-[4px]">
                    {item.viewersDiscretion}
                  </AppText>
                  {Platform.OS === 'ios' ? (
                    <Blur
                      blurType="light"
                      blurAmount={10}
                      style={styles.dateContainer}>
                      <AppText className="font-ROBOTO_500 font-medium text-[9px] text-white">
                        01:20:01
                      </AppText>
                    </Blur>
                  ) : (
                    <AppView style={styles.dateContainer} className="relative">
                      <BlurView
                        backgroundColor="rgba(255, 255, 255, 0.1)"
                        blurRadius={10}
                        borderRadius={4}
                      />
                      <AppText className="relative font-ROBOTO_500 font-medium text-[9px] text-white">
                        01:20:01
                      </AppText>
                    </AppView>
                  )}
                </AppView>
              </AppView>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};

export default OthersView;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.MANROPE_700,
    fontWeight: '700',
    fontSize: Size.calcHeight(10),
    color: colors.WHITE,
    maxWidth: 130,
  },
  dateContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
    paddingVertical: 2,
    // paddingHorizontal:
  },
});
