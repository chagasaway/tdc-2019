import React, { Fragment } from 'react';
import { Button } from '../../../../common/components/Button';
import { Title } from '../../../../common/components/Title';
import { SpaceFiller } from '../../../../common/components/SpaceFiller';

export interface QRCodeViewProps {
  onShare: () => void;
}

export const QRCodeView: React.SFC<QRCodeViewProps> = ({ onShare }) => (
  <Fragment>
    <SpaceFiller />
    <Title>Compartilhe seu QR Code</Title>
    <SpaceFiller />
    <Button onPress={onShare} label='COMPARTILHAR' />
  </Fragment>
);