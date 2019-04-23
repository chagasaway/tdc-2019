import React, { Fragment } from 'react';
import { Button } from 'src/common/components/Button';
import { Title } from 'src/common/components/Title';
import { SpaceFiller } from 'src/common/components/SpaceFiller';
import { QRCode } from './components/QRCode';

export interface QRCodeViewProps {
  id: string;
  onShare: () => void;
}

export const QRCodeView: React.SFC<QRCodeViewProps> = ({ id, onShare }) => (
  <Fragment>
    <SpaceFiller />
    <Title>Compartilhe seu QR Code</Title>
    <QRCode value={id} />
    <SpaceFiller />
    <Button testID='shareButton' onPress={onShare} label='COMPARTILHAR' />
  </Fragment>
);
