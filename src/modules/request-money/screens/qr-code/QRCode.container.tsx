import React, { Component } from 'react';
import { QRCodeView } from './QRCode.view';

interface QRCodeContainerProps {
  navigateBack: () => boolean;
}

export class QRCodeContainer extends Component<QRCodeContainerProps> {
  private handleShare = () => {
    alert('Shared (:');
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