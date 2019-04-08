import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  onSubmit: () => void;
  label: string;
}

export const Button: React.SFC<ButtonProps> = ({ onSubmit, label }) => (
  <TouchableOpacity onPress={onSubmit}>
    <Text>{label}</Text>
  </TouchableOpacity>
)