import React, { Component } from 'react';
import { QRCodeView } from './QRCode.view';
import { RequestMoney } from '../../../../common/api/RequestMoneyAPI';

interface QRCodeContainerProps {
  requestMoney: RequestMoney;
  dismiss: () => void;
}

export class QRCodeContainer extends Component<QRCodeContainerProps> {
  private handleShare = () => {
    alert('Sharing request money...');
  }

  render() {
    const { requestMoney } = this.props;
    return (
      <QRCodeView
        requestMoney={requestMoney}
        onShare={this.handleShare}
      />
    );
  }
}