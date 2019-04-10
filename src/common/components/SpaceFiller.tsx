import React from 'react';
import { View, StyleSheet } from 'react-native';

export const SpaceFiller: React.SFC = () => (
  <View style={styles.filler} />
);

const styles = StyleSheet.create({
  filler: {
    flex: 1,
  },
})