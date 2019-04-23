import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { BaseScreen } from 'common/components/BaseScreen';
import { QRCodeContainer } from './QRCode.container';

export class QRCodeScreen extends Component<NavigationInjectedProps> {
  private navigateBack = () => {
    this.props.navigation.pop();
    return true;
  }

  public render() {
    const id = this.props.navigation.getParam('id');
    return (
      <BaseScreen testID='QRCodeScreen'>
        <QRCodeContainer
          id={id}
          navigateBack={this.navigateBack}
        />
      </BaseScreen>
    );
  }
}
