import React, { Fragment } from 'react';
import { Button } from '../../../../common/components/Button';
import { Title } from '../../../../common/components/Title';
import { SpaceFiller } from '../../../../common/components/SpaceFiller';

export interface ErrorViewProps {
  navigateBack: () => void;
}

export const ErrorView: React.SFC<ErrorViewProps> = ({ navigateBack }) => (
  <Fragment>
    <SpaceFiller />
    <Title>Desculpe, algo deu errado :(</Title>
    <SpaceFiller />
    <Button onPress={navigateBack} label='VOLTAR' />
  </Fragment>
);