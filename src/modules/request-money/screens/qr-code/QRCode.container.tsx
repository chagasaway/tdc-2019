import React, { Component } from 'react';
import { Alert } from 'react-native';
import { QRCodeView } from './QRCode.view';

export interface QRCodeContainerProps {
  id: string;
  navigateBack: () => boolean;
}

export class QRCodeContainer extends Component<QRCodeContainerProps> {
  private handleShare = () => {
    Alert.alert('Shared (:');
    this.props.navigateBack();
  }

  public render() {
    const { id } = this.props;
    return (
      <QRCodeView
        id={id}
        onShare={this.handleShare}
      />
    );
  }
}
