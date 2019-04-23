declare module 'react-native-qrcode' {
  import React from 'react';

  interface QRCodeProps {
    value: string;
    size?: number;
    bgColor?: string;
    fgColor?: string;
  }

  export default class QRCode extends React.PureComponent<QRCodeProps> { }
}