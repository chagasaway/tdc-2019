import React from 'react';
import TestRenderer from 'react-test-renderer';
import { NavigationInjectedProps } from 'react-navigation';

import { ErrorScreen } from '../Error.screen';

const render = (props: NavigationInjectedProps) => {
  const testRenderer = TestRenderer.create(<ErrorScreen {...props} />);
  const testInstance = testRenderer.root;
  return { testInstance, testRenderer };
};

describe("Error Screen", () => {
  it("should navigate back", () => {
    // given
    const props = {
      navigation: {
        pop: jest.fn(),
      },
    };

    // when
    const { testInstance } = render(props as any);
    testInstance.instance.navigateBack();

    // then
    expect(props.navigation.pop).toBeCalled();
  });
});