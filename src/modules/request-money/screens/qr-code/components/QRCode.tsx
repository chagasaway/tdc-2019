import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCodeComponent from 'react-native-qrcode';

export interface QRCodeProps {
  value: string;
}

export const QRCode: React.SFC<QRCodeProps> = ({ value }) => (
  <View style={styles.wrapper}>
    <QRCodeComponent value={value} size={200} bgColor='purple' fgColor='white' />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
