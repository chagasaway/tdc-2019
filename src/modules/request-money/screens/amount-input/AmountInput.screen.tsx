import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { RequestMoneyScreens } from '../../navigation/RequestMoneyNavigator';
import { AmountInputContainer } from './AmountInput.container';
import { BaseScreen } from '../../../../common/components/BaseScreen';
import { RequestMoney } from '../../api/RequestMoneyAPI';

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

  render() {
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