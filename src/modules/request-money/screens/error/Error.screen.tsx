import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { BaseScreen } from 'common/components/BaseScreen';
import { ErrorView } from './Error.view';

export class ErrorScreen extends Component<NavigationInjectedProps> {
  private navigateBack = () => {
    this.props.navigation.pop();
    return true;
  }

  public render() {
    return (
      <BaseScreen testID='ErrorScreen'>
        <ErrorView navigateBack={this.navigateBack} />
      </BaseScreen>
    );
  }
}
