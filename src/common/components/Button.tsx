import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  onSubmit: () => void;
  label: string;
}

export const Button: React.SFC<ButtonProps> = ({ onSubmit, label }) => (
  <TouchableOpacity style={styles.button} onPress={onSubmit}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 60,
    display: 'flex',
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  label: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  }
})