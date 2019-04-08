import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { RequestMoneyScreens } from '../../navigation/RequestMoneyNavigator';
import { AmountInputContainer } from './AmountInput.container';

export class AmountInputScreen extends Component<NavigationInjectedProps> {
  private navigateBack = () => {
    this.props.navigation.pop();
    return true;
  }

  private navigateToQRCode = () => {
    this.props.navigation.navigate(RequestMoneyScreens.QRCode);
  }

  private navigateToError = () => {
    this.props.navigation.navigate(RequestMoneyScreens.Error);
  }

  render() {
    return (
      <AmountInputContainer
        navigateBack={this.navigateBack}
        navigateToQRCode={this.navigateToQRCode}
        navigateToError={this.navigateToError}
      />
    );
  }
}