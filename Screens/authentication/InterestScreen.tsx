import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  AppButton,
  AppScreen,
  AppText,
  AppView,
  TouchableOpacity,
} from '@/components';
import {interests} from '@/configs/data';
import colors from '@/configs/colors';
import Size from '@/Utils/useResponsiveSize';
import {useNavigation, useRoute} from '@react-navigation/native';
import {InterestScreenProps, InterestScreenRouteProps} from '@/types/typings';
import routes from '@/navigation/routes';

const InterestScreen = () => {
  const navigation = useNavigation<InterestScreenProps>();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isMaxReached, setIsMaxReached] = useState(false);
  const [loading, setLoading] = useState(false);
  const route = useRoute<InterestScreenRouteProps>();
  const isSettings = route.params.isSettings;

  const isSelected = (title: string) => {
    return selectedItems.includes(title);
  };

  const removeItem = (title: string) => {
    const newItems = selectedItems.filter(item => item !== title);
    setSelectedItems(newItems);
  };

  const handlePress = (title: string) => {
    if (isSelected(title)) {
      setIsMaxReached(false);
      return removeItem(title);
    }

    if (selectedItems.length < 7) {
      setIsMaxReached(false);
      if (selectedItems.length === 6) setIsMaxReached(true);
      return setSelectedItems([...selectedItems, title]);
    }
  };

  function handleInterests() {
    if (isSelected.length > 0) {
      setLoading(true);
      //TODO: handle interest endpoint and remove setTimeout
      setTimeout(() => {
        if (isSettings) {
          navigation.navigate(routes.SETTINGS_SCREEN);
        } else {
          navigation.reset({
            index: 0,
            routes: [
              {
                name: routes.TAB_MAIN,
              },
            ],
          });
        }
        setLoading(false);
      }, 3000);
    }
  }

  return (
    <AppScreen containerStyle={{position: 'relative'}}>
      <AppText className="text-2xl text-white font-LEXEND_700 mt-5">
        Choose your
      </AppText>
      <AppText className="text-2xl text-white font-LEXEND_700 mb-2">
        interests
      </AppText>
      <AppText className="text-base text-grey_100 font-MANROPE_400 mt-2">
        We'll tailor an experience based on your interests, creating a
        personalized experience on reeplay. You can always change later.
      </AppText>

      <AppView className="flex-row gap-y-5 gap-x-3 flex-wrap mt-3">
        {interests.map((interest, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => handlePress(interest)}
              style={[
                {paddingHorizontal: interest.length >= 6 ? 22 : 34},
                isSelected(interest) && {backgroundColor: colors.RED},
              ]}
              className="bg-white py-[14px] rounded-3xl">
              <AppText
                className="text-base font-MANROPE_400 text-grey_600"
                style={isSelected(interest) && {color: colors.WHITE}}>
                {interest}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </AppView>

      <AppView className="absolute bottom-3">
        <AppButton
          isDisable={isSelected.length > 0 ? false : true}
          isLoading={loading}
          bgColor={colors.RED}
          title="Continue"
          onPress={() => handleInterests()}
          style={{borderRadius: 8, width: Size.getWidth() * 0.9}}
        />
        {!isSettings && (
          <Pressable
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: routes.TAB_MAIN,
                  },
                ],
              })
            }
            style={{marginTop: Size.calcHeight(16)}}>
            <AppText className="text-lg text-grey_700 font-MANROPE_400 text-center">
              Skip
            </AppText>
          </Pressable>
        )}
      </AppView>
    </AppScreen>
  );
};

export default InterestScreen;

const styles = StyleSheet.create({});
