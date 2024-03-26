import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppHeader, AppScreen} from '@/components';
import colors from '@/configs/colors';
import fonts from '@/configs/fonts';
import Size from '@/Utils/useResponsiveSize';

const PrivacyScreen = () => {
  return (
    <AppScreen style={{paddingTop: Platform.OS === 'android' ? 18 : 0}}>
      <StatusBar hidden={false} barStyle="light-content" />
      <AppHeader label="Privacy Policy" style={{marginBottom: 14}} />
      <Text style={styles.header}>Last updated: March 14, 2023</Text>
      <Text style={styles.body}>
        {' '}
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You. We use Your Personal data to provide and improve the Service. By
        using the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy.
      </Text>
    </AppScreen>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontFamily: fonts.MANROPE_700,
    fontSize: Size.calcHeight(16),
    color: colors.WHITE,
    marginVertical: Size.calcHeight(12),
  },
  body: {
    fontWeight: '400',
    fontFamily: fonts.MANROPE_400,
    fontSize: Size.calcHeight(16),
    color: colors.WHITE,
    marginVertical: Size.calcHeight(18),
    lineHeight: Size.calcHeight(24),
  },
});
