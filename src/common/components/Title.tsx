import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const Title: React.SFC = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 25,
  }
});