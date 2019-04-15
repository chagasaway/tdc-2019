import React from 'react';
import TestRenderer from 'react-test-renderer';

import { TextInput } from 'react-native';
import { MoneyInput, MoneyInputProps, textToMoney, styles } from '../MoneyInput';

const render = (props: MoneyInputProps) => {
  const testRenderer = TestRenderer.create(<MoneyInput {...props} />);
  const testInstance = testRenderer.root;
  const textInput = testInstance.findByType(TextInput);

  return { textInput };
};

describe("MoneyInput", () => {
  it("should display a input with correct styles", () => {
    // given
    const props = {
      onAmountChange: jest.fn(),
    };

    // when
    const { textInput } = render(props);

    // then
    expect(textInput.props.onChangeText).toBeDefined();
    expect(textInput.props.style).toBe(styles.input);
    expect(textInput.props.keyboardType).toBe('numeric');
    expect(textInput.props.selectionColor).toBe('#000');
  });
});

describe("textToMoney", () => {
  it("should convert a text to an integer number", () => {
    // given
    const text = '1000';

    // when
    const result = textToMoney(text);

    // then
    expect(result).toEqual(1000);
  });
});

