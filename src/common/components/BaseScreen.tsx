import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';

interface BaseScreenProps {
  testID?: string;
}

export const BaseScreen: React.SFC<BaseScreenProps> = ({ children, testID }) => (
  <KeyboardAvoidingView testID={testID} style={styles.wrapper} behavior="padding" enabled keyboardVerticalOffset={120}>
    {children}
  </KeyboardAvoidingView>
);

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  }
})