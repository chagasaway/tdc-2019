import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { QRCodeContainer } from './QRCode.container';
import { BaseScreen } from '../../../../common/components/BaseScreen';

export class QRCodeScreen extends Component<NavigationInjectedProps> {
  private navigateBack = () => {
    this.props.navigation.pop();
    return true;
  }

  render() {
    return (
      <BaseScreen>
        <QRCodeContainer navigateBack={this.navigateBack} />
      </BaseScreen>
    );
  }
}