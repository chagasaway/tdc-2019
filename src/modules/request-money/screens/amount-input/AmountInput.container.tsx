import React, { Component } from 'react';
import { AmountInputView } from './AmountInput.view';
import { createRequestMoney, RequestMoney } from '../../../../common/api/RequestMoneyAPI';

interface AmountInputContainerProps {
  navigateBack: () => boolean;
  navigateToQRCode: (requestMoney: RequestMoney) => void;
  navigateToError: () => void;
}

interface AmountInputContainerState {
  amount: number;
}

export class AmountInputContainer extends Component<AmountInputContainerProps, AmountInputContainerState> {
  state = {
    amount: 0,
  }

  private onAmountChange = (amount: number) => {
    this.setState({ amount });
  }

  private handleSubmit = async () => {
    try {
      const { amount } = this.state;
      const requestMoney = await createRequestMoney(amount);
      this.props.navigateToQRCode(requestMoney);
    } catch (e) {
      this.props.navigateToError();
    }
  }

  render() {
    return (
      <AmountInputView
        onAmountChange={this.onAmountChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}