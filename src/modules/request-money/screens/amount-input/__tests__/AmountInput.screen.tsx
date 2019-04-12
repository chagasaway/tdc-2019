import React from 'react';
import TestRenderer from 'react-test-renderer';

import { NavigationInjectedProps } from 'react-navigation';
import { AmountInputScreen } from '../AmountInput.screen';
import { RequestMoneyScreens } from '../../../navigation/RequestMoneyNavigator';

const render = (props: NavigationInjectedProps) => {
  const testRenderer = TestRenderer.create(<AmountInputScreen {...props} />);
  const testInstance = testRenderer.root;
  return { testInstance, testRenderer };
};

describe("AmountInput Screen", () => {
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

  it("should navigate to QRCode screen", () => {
    // given
    const props = {
      navigation: {
        navigate: jest.fn(),
      },
    };

    // when
    const { testInstance } = render(props as any);
    testInstance.instance.navigateToQRCode();

    // then
    expect(props.navigation.navigate).toBeCalledWith(RequestMoneyScreens.QRCode, {});
  });

  it("should navigate to Error screen", () => {
    // given
    const props = {
      navigation: {
        navigate: jest.fn(),
      },
    };

    // when
    const { testInstance } = render(props as any);
    testInstance.instance.navigateToError();

    // then
    expect(props.navigation.navigate).toBeCalledWith(RequestMoneyScreens.Error);
  });
});