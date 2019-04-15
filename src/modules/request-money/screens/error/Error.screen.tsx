import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { ErrorView } from './Error.view';
import { BaseScreen } from '../../../../common/components/BaseScreen';

export class ErrorScreen extends Component<NavigationInjectedProps> {
  private navigateBack = () => {
    this.props.navigation.pop();
    return true;
  }

  render() {
    return (
      <BaseScreen>
        <ErrorView navigateBack={this.navigateBack} />
      </BaseScreen>
    );
  }
}