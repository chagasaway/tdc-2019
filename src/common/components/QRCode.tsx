import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface QRCodeProps {
  value: string;
}

// TODO: Use a real QR code lib here
export const QRCode: React.SFC<QRCodeProps> = ({ value }) => (
  <Text style={styles.qrCode}>{value}</Text>
);

const styles = StyleSheet.create({
  qrCode: {
    textAlign: 'center',
    fontSize: 25,
  }
});
