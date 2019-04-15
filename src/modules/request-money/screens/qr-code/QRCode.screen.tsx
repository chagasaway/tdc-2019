import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { QRCodeContainer } from './QRCode.container';
import { BaseScreen } from '../../../../common/components/BaseScreen';

export class QRCodeScreen extends Component<NavigationInjectedProps> {

  private dismiss = () => {
    this.props.navigation.dismiss();
  }

  render() {
    const requestMoney = this.props.navigation.getParam('requestMoney');
    return (
      <BaseScreen>
        <QRCodeContainer
          requestMoney={requestMoney}
          dismiss={this.dismiss}
        />
      </BaseScreen>
    );
  }
}