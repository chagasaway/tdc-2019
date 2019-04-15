import React, { Fragment } from 'react';
import { Button } from '../../../../common/components/Button';
import { Title } from '../../../../common/components/Title';
import { SpaceFiller } from '../../../../common/components/SpaceFiller';
import { QRCode } from '../../../../common/components/QRCode';
import { RequestMoney } from '../../../../common/api/RequestMoneyAPI';

interface AmountInputViewProps {
  requestMoney: RequestMoney;
  onShare: () => void;
}

export const QRCodeView: React.SFC<AmountInputViewProps> = ({ requestMoney, onShare }) => (
  <Fragment>
    <SpaceFiller />
    <Title>Compartilhe a cobrança abaixo</Title>
    <QRCode value={requestMoney.qrCode} />
    <SpaceFiller />
    <Button onSubmit={onShare} label='COMPARTILHAR' />
  </Fragment>
);