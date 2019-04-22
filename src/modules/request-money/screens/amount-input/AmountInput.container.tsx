import React, { Component } from 'react';
import { AmountInputView } from './AmountInput.view';
import { RequestMoney, createRequestMoney } from '../../api/RequestMoneyAPI';

export interface AmountInputContainerProps {
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

  private handleAmountChange = (amount: number) => {
    this.setState({ amount });
  }

  private handleSubmit = async () => {
    try {
      const { amount } = this.state;
      const requestMoney = await createRequestMoney(amount);
      this.props.navigateToQRCode(requestMoney);
    } catch {
      this.props.navigateToError();
    }
  }

  render() {
    return (
      <AmountInputView
        amount={this.state.amount}
        onAmountChange={this.handleAmountChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}