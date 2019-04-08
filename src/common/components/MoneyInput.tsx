import React from 'react';
import { TouchableOpacity, Text, TextInput } from 'react-native';

interface MoneyInputProps {
  onAmountChange: (amount: number) => void;
}

const textToMoney = (text: string) => {
  return parseInt(text);
}

export const MoneyInput: React.SFC<MoneyInputProps> = ({ onAmountChange }) => (
  <TextInput onChangeText={(text) => onAmountChange(textToMoney(text))}></TextInput>
)