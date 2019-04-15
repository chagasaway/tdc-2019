import React from 'react';
import TestRenderer from 'react-test-renderer';

import { NavigationInjectedProps } from 'react-navigation';
import { QRCodeScreen } from '../QRCode.screen';

const render = (props: NavigationInjectedProps) => {
  const testRenderer = TestRenderer.create(<QRCodeScreen {...props} />);
  const testInstance = testRenderer.root;
  return { testInstance, testRenderer };
};

describe("QRCode Screen", () => {
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