import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';

export const BaseScreen = ({ children }) => (
  <KeyboardAvoidingView style={styles.wrapper} behavior="padding" enabled keyboardVerticalOffset={120}>
    {children}
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  }
})