import React, { Component } from 'react';
import { Alert } from 'react-native';
import { QRCodeView } from './QRCode.view';

export interface QRCodeContainerProps {
  qrCode: string;
  navigateBack: () => boolean;
}

export class QRCodeContainer extends Component<QRCodeContainerProps> {
  private handleShare = () => {
    Alert.alert('Shared (:');
    this.props.navigateBack();
  }

  render() {
    const { qrCode } = this.props;
    return (
      <QRCodeView
        qrCode={qrCode}
        onShare={this.handleShare}
      />
    );
  }
}