import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { BaseScreen } from 'common/components/BaseScreen';
import { QRCodeContainer } from './QRCode.container';

export class QRCodeScreen extends Component<NavigationInjectedProps> {
  private navigateBack = () => {
    this.props.navigation.pop();
    return true;
  }

  render() {
    const qrCode = this.props.navigation.getParam('qrCode');
    return (
      <BaseScreen testID='QRCodeScreen'>
        <QRCodeContainer
          qrCode={qrCode}
          navigateBack={this.navigateBack}
        />
      </BaseScreen>
    );
  }
}