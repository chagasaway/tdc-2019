import React, { Fragment } from 'react';
import { Button } from 'src/common/components/Button';
import { Title } from 'src/common/components/Title';
import { MoneyInput } from 'src/common/components/MoneyInput';
import { SpaceFiller } from 'src/common/components/SpaceFiller';

export interface AmountInputViewProps {
  onSubmit: () => void;
  amount: number;
  onAmountChange: (amount: number) => void;
}

export const AmountInputView: React.SFC<AmountInputViewProps> = ({ onSubmit, amount, onAmountChange }) => (
  <Fragment>
    <SpaceFiller />
    <Title>Quanto você gostaria de cobrar?</Title>
    <MoneyInput testID='amountInput' amount={amount} onAmountChange={onAmountChange} />
    <SpaceFiller />
    <Button testID='confirmButton' onPress={onSubmit} label='CONFIRMAR' />
  </Fragment>
);
