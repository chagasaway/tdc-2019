import React, { Fragment } from 'react';
import { Button } from 'common/components/Button';
import { Title } from 'common/components/Title';
import { SpaceFiller } from 'common/components/SpaceFiller';
import { QRCode } from './components/QRCode';

export interface QRCodeViewProps {
  qrCode: string;
  onShare: () => void;
}

export const QRCodeView: React.SFC<QRCodeViewProps> = ({ qrCode, onShare }) => (
  <Fragment>
    <SpaceFiller />
    <Title>Compartilhe seu QR Code</Title>
    <QRCode value={qrCode} />
    <SpaceFiller />
    <Button testID='shareButton' onPress={onShare} label='COMPARTILHAR' />
  </Fragment>
);
