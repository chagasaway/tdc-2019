import React from 'react';
import TestRenderer from 'react-test-renderer';

import * as RequestMoneyAPI from 'src/modules/request-money/api/RequestMoneyAPI';
import { AmountInputContainer, AmountInputContainerProps } from '../AmountInput.container';

const render = (props: AmountInputContainerProps) => {
  const testRenderer = TestRenderer.create(<AmountInputContainer {...props} />);
  const testInstance = testRenderer.root;
  return { testInstance, testRenderer };
};

describe('AmountInput Container', () => {
  it('should start with a zeroed current amount', () => {
    // given
    const props = {};

    // when
    const { testInstance } = render(props as any);

    // then
    expect(testInstance.instance.state.amount).toEqual(0);
  });

  it('should update current amount', () => {
    // given
    const props = {};

    // when
    const { testInstance } = render(props as any);
    testInstance.instance.handleAmountChange(100);

    // then
    expect(testInstance.instance.state.amount).toEqual(100);
  });

  it('should create a request money and navigate to QRCode', async () => {
    // given
    const requestMoney = {
      id: 123,
      amount: 100,
    };
    const mock = jest.spyOn(RequestMoneyAPI, 'createRequestMoney');
    mock.mockReturnValue(Promise.resolve(requestMoney));
    const props = {
      navigateToQRCode: jest.fn(),
    };

    // when
    const { testInstance } = render(props as any);
    testInstance.instance.handleAmountChange(100);
    await testInstance.instance.handleSubmit();

    // then
    expect(mock).toBeCalledWith(100);
    expect(props.navigateToQRCode).toBeCalled();
  });

  it('should handle an error on creating a request money by navigating to Error', async () => {
    // given
    const mock = jest.spyOn(RequestMoneyAPI, 'createRequestMoney');
    mock.mockReturnValue(Promise.reject());
    const props = {
      navigateToError: jest.fn(),
    };

    // when
    const { testInstance } = render(props as any);
    testInstance.instance.handleAmountChange(100);
    await testInstance.instance.handleSubmit();

    // then
    expect(mock).toBeCalledWith(100);
    expect(props.navigateToError).toBeCalled();
  });
});
