import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import { Button } from '../../../../common/components/Button';
import { Title } from '../../../../common/components/Title';
import { MoneyInput } from '../../../../common/components/MoneyInput';

interface AmountInputViewProps {
  onSubmit: () => void;
  onAmountChange: (amount: number) => void;
}

export const AmountInputView: React.SFC<AmountInputViewProps> = ({ onSubmit, onAmountChange }) => (
  <Fragment>
    <Title>Quanto você gostaria de cobrar?</Title>
    <MoneyInput onAmountChange={onAmountChange} />
    <Button onSubmit={onSubmit} label='CONFIRMAR' />
  </Fragment>
);