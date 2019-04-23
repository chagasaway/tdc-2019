import React from 'react';
import TestRenderer from 'react-test-renderer';

import { Title } from 'common/components/Title';
import { MoneyInput } from 'common/components/MoneyInput';
import { Button } from 'common/components/Button';
import { AmountInputView, AmountInputViewProps } from '../AmountInput.view';

const render = (props: AmountInputViewProps) => {
  const testRenderer = TestRenderer.create(<AmountInputView {...props} />);
  const testInstance = testRenderer.root;
  const title = testInstance.findByType(Title);
  const input = testInstance.findByType(MoneyInput);
  const button = testInstance.findByType(Button);

  return { title, input, button };
};

describe("AmountInput View", () => {
  it("should display a title, a input and a submit button", () => {
    // given
    const props = {
      amount: 20,
      onSubmit: jest.fn(),
      onAmountChange: jest.fn(),
    };

    // when
    const { title, input, button } = render(props);

    // then
    expect(title.props.children).toBe('Quanto você gostaria de cobrar?');
    expect(input.props.onAmountChange).toBe(props.onAmountChange);
    expect(button.props.onPress).toBe(props.onSubmit);
    expect(button.props.label).toBe('CONFIRMAR');
  });
});