import React, { Component } from 'react';
import { AmountInputView } from './AmountInput.view';

interface AmountInputContainerProps {
  navigateBack: () => boolean;
  navigateToQRCode: () => void;
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

  private handleSubmit = () => {
    try {
      // doMutation();
      this.props.navigateToQRCode();
    } catch {
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