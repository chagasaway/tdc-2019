import React, { Fragment } from 'react';
import { Button } from '../../../../common/components/Button';
import { Title } from '../../../../common/components/Title';
import { MoneyInput } from '../../../../common/components/MoneyInput';
import { SpaceFiller } from '../../../../common/components/SpaceFiller';

interface AmountInputViewProps {
  onSubmit: () => void;
  onAmountChange: (amount: number) => void;
}

export const AmountInputView: React.SFC<AmountInputViewProps> = ({ onSubmit, onAmountChange }) => (
  <Fragment>
    <SpaceFiller />
    <Title>Quanto você gostaria de cobrar?</Title>
    <MoneyInput onAmountChange={onAmountChange} />
    <SpaceFiller />
    <Button onPress={onSubmit} label='CONFIRMAR' />
  </Fragment>
);