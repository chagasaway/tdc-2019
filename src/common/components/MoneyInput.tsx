import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export interface MoneyInputProps {
  testID?: string;
  amount: number;
  onAmountChange: (amount: number) => void;
}

export const textToMoney = (text: string) => {
  return parseInt(text, 10);
};

export const MoneyInput: React.SFC<MoneyInputProps> = ({ testID, amount, onAmountChange }) => (
  <TextInput
    testID={testID}
    value={amount.toString()}
    onChangeText={(text) => onAmountChange(textToMoney(text))}
    style={styles.input}
    keyboardType='numeric'
    selectionColor='#000'
  />
);

export const styles = StyleSheet.create({
  input: {
    marginVertical: 40,
    fontSize: 40,
    textAlign: 'center',
  },
});
