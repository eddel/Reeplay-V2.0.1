import {
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import {
  AppButton,
  AppImage,
  AppScreen,
  AppText,
  AppView,
  TouchableOpacity,
} from '@/components';
import colors from '@/configs/colors';
import PreviewHeader from './components/PreviewHeader';
import {
  BigClose,
  CommentSendBtn,
  DownloadIcon,
  PreviewDownloadIcon,
  PreviewPlayIcon,
  RateStar_F,
  RateStar_W,
  SM_Rate_E,
  SM_Rate_F,
  SM_Rate_H,
  ShareIcon,
  SmPlayIcon,
  VideoLogIcon,
  VideoLog_F,
} from '@/assets/icons';
import StarRating, {StarRatingDisplay} from 'react-native-star-rating-widget';
import fonts from '@/configs/fonts';
import RelatedContent from './components/RelatedContent';
import FilmContent from './components/FilmContent';
import SeriesContent from './components/SeriesContent';
import useToggle from '@/Hooks/useToggle';
import RatingView from './components/RatingView';
import Share from 'react-native-share';
import AppModal from '@/components/AppModal';
import DownloadModal from './components/DownloadModal';
import Size from '@/Utils/useResponsiveSize';
import PreviewComments from './PreviewComments';
import {useNavigation, useRoute} from '@react-navigation/native';
import {PreviewScreenNav, PreviewScreenRoute} from '@/types/typings';
import {fullVideoType, previewContentType} from '@/navigation/AppNavigator';
import routes from '@/navigation/routes';
import BlurView from 'react-native-blur-effect';
import {BlurView as Blur} from '@react-native-community/blur';

const PreviewScreen = () => {
  const [addWatchList, setAddWatchList] = useToggle(false);
  const [addRatting, setAddRating] = useToggle(false);
  const [watchModal, setWatchModal] = useToggle(false);
  const [isComment, setIsComment] = useState(false);
  const route = useRoute<PreviewScreenRoute>();
  const {navigate} = useNavigation<PreviewScreenNav>();

  const content = route.params.content;

  const contentType: string = route.params.contentType
    ? route.params.contentType
    : 'Free';
  const contentPrice: string = route.params.contentPrice
    ? route.params.contentPrice
    : 'Watch';

  const handleShare = () => {
    Share.open({message: 'share movie'})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <AppScreen
      style={{position: 'relative', paddingBottom: 100}}
      containerStyle={{
        paddingHorizontal: 0,
        paddingBottom: 0,
      }}>
      <StatusBar hidden={false} backgroundColor={colors.DEEP_BLACK} />
      <PreviewHeader />

      <AppView className="h-full">
        <AppView className="px-5 flex-row items-center justify-between mt-[13px]">
          <Pressable style={{marginLeft: 6}} onPress={setAddWatchList}>
            {addWatchList ? <VideoLog_F /> : <VideoLogIcon />}
          </Pressable>
          <AppView>
            <AppText className="text-[21px] text-grey_100 font-ROBOTO_700 text-center">
              NKOYO
            </AppText>
            <AppView className="mt-2 flex-row items-center">
              {['Comedy', 'Exciting', 'Drama'].map((tag, i) => {
                return (
                  <Fragment key={i}>
                    <AppText className="font-ROBOTO_700 text-xs text-grey_white">
                      {tag}
                    </AppText>
                    {i !== ['Comedy', 'Exciting', 'Drama'].length - 1 && (
                      <AppView className="w-1.5 h-1.5 rounded-full bg-white mt-[2.8px] mx-1.5" />
                    )}
                  </Fragment>
                );
              })}
            </AppView>
          </AppView>
          <AppView
            className={`${
              contentType === 'Premium'
                ? 'border-green px-1.5'
                : contentType === 'Free'
                ? 'border-yellow px-3'
                : 'border-red px-1.5'
            } pt-1.5 pb-1.5 border rounded-[3px]`}>
            <AppText
              className={`text-[9px] uppercase font-ROBOTO_400 ${
                contentType === 'Premium'
                  ? 'text-green'
                  : contentType === 'Free'
                  ? 'text-yellow'
                  : 'text-red'
              }`}>
              {contentType}
            </AppText>
          </AppView>
        </AppView>

        {!addRatting && (
          <AppView className="px-5">
            <AppView className="border-y border-grey_200/10 py-[7px] mt-4 flex-row items-center justify-between">
              <AppView>
                <AppText className="text-center font-ROBOTO_400 text-grey_200 text-[11px]">
                  375K+ VIEWS
                </AppText>
                <AppText className="text-center my-1 font-ROBOTO_700 text-grey_200 text-[15px]">
                  4.6
                </AppText>
                {/* star */}
                <StarRatingDisplay
                  rating={4.6}
                  style={{
                    columnGap: -6,
                  }}
                  StarIconComponent={({type}) =>
                    type === 'full' ? (
                      <SM_Rate_F />
                    ) : type === 'half' ? (
                      <SM_Rate_H />
                    ) : (
                      <SM_Rate_E />
                    )
                  }
                />
              </AppView>
              <AppView className="h-[30px] w-[1px] border-l border-grey_200/10" />
              <AppView>
                <AppText className="text-center font-ROBOTO_400 text-grey_200 text-[11px]">
                  PG
                </AppText>
                <AppText className="text-center my-1 font-ROBOTO_700 text-grey_200 text-[15px]">
                  12+
                </AppText>
                <AppText className="text-center font-ROBOTO_400 text-grey_200 text-[10px]">
                  Years Old
                </AppText>
              </AppView>
              <AppView className="h-[30px] w-[1px] border-l border-grey_200/10" />

              <TouchableOpacity onPress={() => setIsComment(true)}>
                <AppText className="text-center font-ROBOTO_400 text-grey_200 text-[11px]">
                  COMMENTS
                </AppText>
                <AppText className="text-center my-1 font-ROBOTO_700 text-grey_200 text-[15px]">
                  98+
                </AppText>
                <AppText className="text-center font-ROBOTO_400 text-grey_200 text-[10px]">
                  Tap to Add
                </AppText>
              </TouchableOpacity>
              <AppView className="h-[30px] w-[1px] border-l border-grey_200/10" />

              <AppView>
                <AppText className="text-center font-ROBOTO_400 text-grey_200 text-[11px]">
                  DURATION
                </AppText>
                <AppText className="text-center my-1 font-ROBOTO_700 text-grey_200 text-[15px]">
                  1h : 7m
                </AppText>
                <AppText className="text-center font-ROBOTO_400 text-grey_200 text-[10px]">
                  2021
                </AppText>
              </AppView>
            </AppView>
          </AppView>
        )}

        <AppView
          style={
            isComment
              ? {
                  height:
                    Platform.OS === 'ios'
                      ? Size.getHeight() - 100
                      : Size.getHeight() - 375,
                  // flex: 1,
                  // marginBottom: 50,
                }
              : {flex: 1}
          }
          className="relative mt-1">
          {isComment && (
            <AppView className="absolute z-30 w-full h-full">
              <AppView className="relative">
                {Platform.OS === 'android' ? (
                  <AppView style={styles.blur}>
                    <BlurView
                      backgroundColor="rgba(0, 0, 0, 0.4)"
                      blurRadius={70}
                    />
                  </AppView>
                ) : (
                  <Blur blurType="dark" blurAmount={70} style={styles.blur} />
                )}

                <AppView className="absolute w-full h-full pt-[18px]">
                  <AppView className="px-5">
                    <AppText className="ml-3 font-ROBOTO_500 text-grey_200 text-[14px]">
                      68 Comments
                    </AppText>

                    <AppView className="relative mt-4 flex-row w-full p-[4px] rounded-[30px] bg-grey_900">
                      <AppImage
                        className="w-[39px] h-[39px] rounded-full mr-3"
                        source={require('@/assets/images/bette.png')}
                      />
                      <TextInput
                        placeholder="Write a comment..."
                        placeholderTextColor="#C4C4C4C7"
                        cursorColor={colors.RED}
                        style={[
                          styles.input,
                          Platform.OS === 'android' && {padding: 0},
                          {flex: 1},
                        ]}
                      />
                      {/* Send button */}
                      <TouchableOpacity
                        style={{alignSelf: 'center'}}
                        className="z-10 mr-4">
                        <CommentSendBtn />
                      </TouchableOpacity>
                    </AppView>
                  </AppView>

                  <PreviewComments />
                </AppView>
                <TouchableOpacity
                  onPress={() => setIsComment(false)}
                  className="absolute bottom-0 z-40 w-full py-5 bg-[#1A1A1A]">
                  <AppText className="text-center text-grey_200 font-ROBOTO_400">
                    Close
                  </AppText>
                </TouchableOpacity>
              </AppView>
            </AppView>
          )}

          {/* From here */}
          <ScrollView
            contentContainerStyle={{paddingBottom: 100, paddingTop: 2}}
            showsVerticalScrollIndicator={false}>
            {!addRatting ? (
              <AppView className="px-5">
                {/* desc */}

                <AppView className="items-center mt-5 px-4">
                  <AppText className="font-ROBOTO_400 uppercase text-white text-[11px]">
                    {previewContentType[content]}
                  </AppText>
                  <AppText className="text-center mt-2 font-ROBOTO_400 text-white text-xs">
                    2 Sisters set out to Impress the World in a thrilling show
                    of Bravery and Comedic Trickery, the World in a thrilling 2
                    Sisters set out to Impress the World.
                  </AppText>

                  <AppView className="mt-3 mb-2 w-full px-1 flex-row items-center justify-between">
                    <TouchableOpacity onPress={handleShare}>
                      <ShareIcon />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={setAddRating}>
                      <AppView className="flex-row items-center gap-x-2">
                        {[...Array(5)].map((star, i) => {
                          return (
                            <AppView key={i}>
                              <RateStar_W />
                            </AppView>
                          );
                        })}
                      </AppView>
                      <AppText className="text-center mt-1.5 ml-1 font-ROBOTO_400 text-[13px] text-white">
                        Tap to Rate
                      </AppText>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        console.log('downnloading content' + true)
                      }>
                      <PreviewDownloadIcon />
                    </TouchableOpacity>
                  </AppView>

                  <AppButton
                    title={contentPrice}
                    style={{marginTop: 10, width: '100%'}}
                    bgColor={colors.RED}
                    labelStyle={styles.btnLabel_}
                    onPress={() =>
                      contentPrice === 'Watch' && contentType === 'Free'
                        ? navigate(routes.FULL_SCREEN_VIDEO, {
                            videoURL:
                              content === previewContentType.film
                                ? 'https://res.cloudinary.com/dag4n1g6h/video/upload/v1708615629/video_rhsuqs.mp4'
                                : content === previewContentType['music video']
                                ? 'https://res.cloudinary.com/dag4n1g6h/video/upload/v1708615779/evideo_erolpo.mp4'
                                : 'https://res.cloudinary.com/dag4n1g6h/video/upload/v1708615123/bgvideo_wxpja1.mp4',
                            type: previewContentType['tv series']
                              ? fullVideoType.series
                              : fullVideoType.default,
                          })
                        : setWatchModal()
                    }
                    iconRight={
                      contentPrice === 'Watch' ? <PreviewPlayIcon /> : <></>
                    }
                  />
                </AppView>

                {/* Dynamic View */}
                {!isComment && (
                  <>
                    {content === previewContentType['music video'] ? (
                      <RelatedContent title="Related Videos" />
                    ) : content === previewContentType['tv series'] ? (
                      <SeriesContent />
                    ) : (
                      <FilmContent />
                    )}
                  </>
                )}
              </AppView>
            ) : (
              <AppView
                style={{height: Size.getHeight() - 400}}
                className="relative">
                <AppView className="px-5 w-full">
                  <RatingView />
                </AppView>

                <AppButton
                  bgColor={colors.RED}
                  title="Submit"
                  onPress={() => console.log('first')}
                  style={{width: '90%', alignSelf: 'center', marginTop: 45}}
                />

                <Pressable
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    alignSelf: 'center',
                  }}
                  onPress={setAddRating}>
                  <BigClose />
                </Pressable>
              </AppView>
            )}
          </ScrollView>
        </AppView>
      </AppView>

      <AppModal
        isModalVisible={watchModal}
        style={{
          height: 390,
        }}
        replaceDefaultContent={
          <AppView
            style={
              contentType === 'Premium' && {marginTop: 8, marginBottom: -2}
            }
            className="items-center mt-3 mb-2">
            <AppText className="text-center font-ROBOTO_500 text-[15px] text-black">
              {contentType === 'Exclusive' && 'Sorry this Content is not free.'}
              {contentType === 'Premium' &&
                `You don’t have an active 
subscription`}
            </AppText>
            {contentType === 'Premium' && (
              <AppText className="mt-4 mb-1 font-ROBOTO_700 text-[14px] text-black">
                TO WATCH PREMIUM
              </AppText>
            )}
            <AppText
              style={contentType === 'Premium' && {marginBottom: 18}}
              className="text-center max-w-[80%] font-ROBOTO_400 text-[14px] text-black my-3 mb-4">
              {contentType === 'Exclusive' &&
                'This is an Exclusive content, you must purchase to watch.'}
              {contentType === 'Premium' &&
                'This is a Premium content, you must subscribe to watch.'}
            </AppText>

            {contentType === 'Premium' && (
              <>
                <AppButton
                  bgColor={colors.RED}
                  title="Subscribe"
                  onPress={() =>
                    navigate(routes.MAIN, {
                      screen: routes.SUBSCRIPTION_SCREEN,
                      params: {tab: 'getSubscription'},
                    })
                  }
                  style={styles.btn}
                  labelStyle={styles.btnLabel}
                />
              </>
            )}

            {contentType === 'Exclusive' && (
              <>
                <AppButton
                  bgColor={colors.RED}
                  title="₦300"
                  onPress={() => navigate(routes.PAYMENT_SCREEN)}
                  style={styles.btn}
                  labelStyle={styles.btnLabel}
                />
                <AppButton
                  bgColor={colors.DARK_GREY}
                  title="Watch trailer"
                  onPress={() => [
                    navigate(routes.FULL_SCREEN_VIDEO, {
                      videoURL:
                        content === previewContentType.film
                          ? 'https://res.cloudinary.com/dag4n1g6h/video/upload/v1708615629/video_rhsuqs.mp4'
                          : content === previewContentType['music video']
                          ? 'https://res.cloudinary.com/dag4n1g6h/video/upload/v1708615779/evideo_erolpo.mp4'
                          : 'https://res.cloudinary.com/dag4n1g6h/video/upload/v1708615123/bgvideo_wxpja1.mp4',
                      type: previewContentType['tv series']
                        ? fullVideoType.series
                        : fullVideoType.default,
                    }),
                    setWatchModal(false),
                  ]}
                  style={styles.btn}
                  labelStyle={styles.btnLabel}
                />
              </>
            )}
          </AppView>
        }
        handleClose={setWatchModal}
      />
    </AppScreen>
  );
};

export default PreviewScreen;

const styles = StyleSheet.create({
  btnLabel: {
    fontFamily: fonts.ROBOTO_700,
    fontSize: 17,
    color: colors.GREY_100,
    marginLeft: 8,
    marginTop: 1,
  },
  btnLabel_: {
    fontFamily: fonts.ROBOTO_700,
    fontSize: 17,
    color: colors.GREY_100,
    marginLeft: 8,
    marginTop: 1,
    textTransform: 'uppercase',
  },
  btn: {
    width: Size.getWidth() * 0.4,
    paddingTop: Size.calcHeight(11),
    paddingBottom: Size.calcHeight(10),
    borderRadius: 4,
    marginVertical: 5,
  },
  btnTxt: {
    fontFamily: fonts.ROBOTO_700,
    fontSize: 16,
    color: colors.WHITE,
    textAlign: 'center',
  },
  blur: {
    width: '100%',
    height: '100%',
  },
  input: {
    fontFamily: fonts.ROBOTO_400,
    fontSize: 14,
    color: colors.WHITE,
  },
});
