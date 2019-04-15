import React from 'react';
import { Text } from 'react-native';

export interface QRCodeProps {
  value: string;
}

export const QRCode: React.SFC<QRCodeProps> = ({ value }) => (
  <Text>{value}</Text>
);
