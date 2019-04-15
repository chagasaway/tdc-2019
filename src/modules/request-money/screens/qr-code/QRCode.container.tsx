import React, { Component } from 'react';
import { QRCodeView } from './QRCode.view';
import { Alert } from 'react-native';

export interface QRCodeContainerProps {
  navigateBack: () => boolean;
}

export class QRCodeContainer extends Component<QRCodeContainerProps> {
  private handleShare = () => {
    Alert.alert('Shared (:');
    this.props.navigateBack();
  }

  render() {
    return (
      <QRCodeView
        onShare={this.handleShare}
      />
    );
  }
}