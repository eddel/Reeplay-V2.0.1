import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommentCard from './components/CommentCard';

const PreviewComments = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{
        paddingHorizontal: 12,
        paddingBottom: Platform.OS === 'ios' ? 20 : 30,
      }}>
      {[...Array(10)].map((_, i) => {
        return <CommentCard key={i} />;
      })}
    </ScrollView>
  );
};

export default PreviewComments;

const styles = StyleSheet.create({});
