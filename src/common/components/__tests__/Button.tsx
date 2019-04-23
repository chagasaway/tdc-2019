import React from 'react';
import TestRenderer from 'react-test-renderer';

import { Text, TouchableOpacity } from 'react-native';
import { Button, ButtonProps } from '../Button';

const render = (props: ButtonProps) => {
  const testRenderer = TestRenderer.create(<Button {...props} />);
  const testInstance = testRenderer.root;
  const button = testInstance.findByType(TouchableOpacity);
  const buttonText = testInstance.findByType(Text);

  return { button, buttonText };
};

describe('Button', () => {
  it('should display a button', () => {
    // given
    const props = {
      onPress: jest.fn(),
      label: 'A BUTTON LABEL',
    };

    // when
    const { button, buttonText } = render(props);

    // then
    expect(button.props.onPress).toBe(props.onPress);
    expect(buttonText.props.children).toBe('A BUTTON LABEL');
  });
});
