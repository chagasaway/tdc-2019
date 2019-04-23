import React, { Fragment } from 'react';
import { Button } from 'src/common/components/Button';
import { Title } from 'src/common/components/Title';
import { SpaceFiller } from 'src/common/components/SpaceFiller';

export interface ErrorViewProps {
  navigateBack: () => void;
}

export const ErrorView: React.SFC<ErrorViewProps> = ({ navigateBack }) => (
  <Fragment>
    <SpaceFiller />
    <Title>Desculpe, algo deu errado :(</Title>
    <SpaceFiller />
    <Button testID='closeButton' onPress={navigateBack} label='VOLTAR' />
  </Fragment>
);
