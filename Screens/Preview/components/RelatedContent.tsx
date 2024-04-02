import {StyleSheet} from 'react-native';
import React from 'react';
import {AppImage, AppText, AppView, TouchableOpacity} from '@/components';
import {LibraryData} from '@/configs/data';
import Size from '@/Utils/useResponsiveSize';
import {previewContentType} from '@/navigation/AppNavigator';
import routes from '@/navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {PreviewScreenNav} from '@/types/typings';

interface props {
  title: string;
}

const RelatedContent = ({title}: props) => {
  const {navigate} = useNavigation<PreviewScreenNav>();
  return (
    <AppView className="mt-5">
      <AppText className="mb-[10px] font-bold font-ROBOTO_700 text-white text-[21px]">
        {title}
      </AppText>
      <AppView style={styles.centerContent}>
        {LibraryData.map((lib, index) => {
          return (
            <TouchableOpacity
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
  );
};

export default RelatedContent;

const styles = StyleSheet.create({
  image: {
    width: Size.getWidth() / 3 - 20,
    height: 133,
    borderRadius: 15,
  },
  centerContent: {
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    columnGap: Size.calcHeight(10),
    rowGap: Size.calcHeight(15),
    paddingBottom: 20,
  },
});
