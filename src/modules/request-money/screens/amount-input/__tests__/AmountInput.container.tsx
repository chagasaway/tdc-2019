import React from 'react';
import TestRenderer from 'react-test-renderer';

import { AmountInputContainer, AmountInputContainerProps } from '../AmountInput.container';
import { createRequestMoney } from '../../../api/RequestMoneyAPI';

jest.mock('../../../api/RequestMoneyAPI');

const render = (props: AmountInputContainerProps) => {
  const testRenderer = TestRenderer.create(<AmountInputContainer {...props} />);
  const testInstance = testRenderer.root;
  return { testInstance, testRenderer };
};

describe("AmountInput Container", () => {
  it("should start with a zeroed current amount", () => {
    // given
    const props = {};

    // when
    const { testInstance } = render(props as any);

    // then
    expect(testInstance.instance.state.amount).toEqual(0);
  });

  it("should update current amount", () => {
    // given
    const props = {};

    // when
    const { testInstance } = render(props as any);
    testInstance.instance.handleAmountChange(100);

    // then
    expect(testInstance.instance.state.amount).toEqual(100);
  });

  it("should create a request money and navigate to QRCode", async () => {
    // given
    const props = {
      navigateToQRCode: jest.fn(),
    };

    // when
    const { testInstance } = render(props as any);
    testInstance.instance.handleAmountChange(100);
    await testInstance.instance.handleSubmit();

    // then
    expect(createRequestMoney).toBeCalledWith(100);
    expect(props.navigateToQRCode).toBeCalled();
  });

  it.skip("should handle an error on creating a request money by navigating to Error", async () => {
    // given
    const props = {
      navigateToError: jest.fn(),
    };

    // when
    const { testInstance } = render(props as any);
    testInstance.instance.handleAmountChange(100);
    await testInstance.instance.handleSubmit();

    // then
    expect(createRequestMoney).toBeCalledWith(100);
    expect(props.navigateToError).toBeCalled();
  });
});