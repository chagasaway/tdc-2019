import React, { Fragment } from 'react';
import QRCode from 'react-native-qrcode';
import { Button } from 'common/components/Button';
import { Title } from 'common/components/Title';
import { SpaceFiller } from 'common/components/SpaceFiller';

export interface QRCodeViewProps {
  id: string;
  onShare: () => void;
}

export const QRCodeView: React.SFC<QRCodeViewProps> = ({ id, onShare }) => (
  <Fragment>
    <SpaceFiller />
    <Title>Compartilhe seu QR Code</Title>
    <QRCode value={id} size={200} bgColor='purple' fgColor='white' />
    <SpaceFiller />
    <Button testID='shareButton' onPress={onShare} label='COMPARTILHAR' />
  </Fragment>
);
