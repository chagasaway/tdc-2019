import React from 'react';
import { Alert } from 'react-native';
import TestRenderer from 'react-test-renderer';

import { QRCodeContainer, QRCodeContainerProps } from '../QRCode.container';

jest.mock('src/modules/request-money/api/RequestMoneyAPI');

const render = (props: QRCodeContainerProps) => {
  const testRenderer = TestRenderer.create(<QRCodeContainer {...props} />);
  const testInstance = testRenderer.root;
  return { testInstance, testRenderer };
};

describe('QRCode Container', () => {
  it('should share the qrcode & navigate back', () => {
    // given
    const props = {
      navigateBack: jest.fn(),
    };
    Alert.alert = jest.fn();

    // when
    const { testInstance } = render(props as any);
    testInstance.instance.handleShare();

    // then
    expect(props.navigateBack).toBeCalled();
    expect(Alert.alert).toBeCalledWith('Shared (:');
  });
});
