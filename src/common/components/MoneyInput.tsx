import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export interface MoneyInputProps {
  testID?: string;
  onAmountChange: (amount: number) => void;
}

export const textToMoney = (text: string) => {
  return parseInt(text);
}

export const MoneyInput: React.SFC<MoneyInputProps> = ({ testID, onAmountChange }) => (
  <TextInput
    testID={testID}
    onChangeText={(text) => onAmountChange(textToMoney(text))}
    style={styles.input}
    keyboardType="numeric"
    selectionColor="#000"
  />
);

export const styles = StyleSheet.create({
  input: {
    marginVertical: 40,
    fontSize: 40,
    textAlign: 'center',
  },
})