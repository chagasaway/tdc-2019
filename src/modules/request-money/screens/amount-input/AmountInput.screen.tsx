import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { BaseScreen } from 'common/components/BaseScreen';
import { RequestMoneyScreens } from 'modules/request-money/navigation/RequestMoneyNavigator';
import { RequestMoney } from 'modules/request-money/api/RequestMoneyAPI';
import { AmountInputContainer } from './AmountInput.container';

export class AmountInputScreen extends Component<NavigationInjectedProps> {
  private navigateBack = () => {
    this.props.navigation.pop();
    return true;
  }

  private navigateToQRCode = (requestMoney: RequestMoney) => {
    this.props.navigation.navigate(RequestMoneyScreens.QRCode, requestMoney);
  }

  private navigateToError = () => {
    this.props.navigation.navigate(RequestMoneyScreens.Error);
  }

  public render() {
    return (
      <BaseScreen testID='AmountInputScreen'>
        <AmountInputContainer
          navigateBack={this.navigateBack}
          navigateToQRCode={this.navigateToQRCode}
          navigateToError={this.navigateToError}
        />
      </BaseScreen>
    );
  }
}
