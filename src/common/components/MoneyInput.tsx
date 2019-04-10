import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface MoneyInputProps {
  onAmountChange: (amount: number) => void;
}

const textToMoney = (text: string) => {
  return parseInt(text);
}

export const MoneyInput: React.SFC<MoneyInputProps> = ({ onAmountChange }) => (
  <TextInput
    onChangeText={(text) => onAmountChange(textToMoney(text))}
    style={styles.input}
    keyboardType="numeric"
    selectionColor="#000"
    autoFocus
  />
);

const styles = StyleSheet.create({
  input: {
    marginVertical: 40,
    fontSize: 40,
    textAlign: 'center',
  },
})