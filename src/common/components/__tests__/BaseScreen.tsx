import React from 'react';
import TestRenderer from 'react-test-renderer';

import { KeyboardAvoidingView } from 'react-native';
import { BaseScreen, styles } from '../BaseScreen';

const render = (props: React.PropsWithChildren<{}>) => {
  const testRenderer = TestRenderer.create(<BaseScreen {...props} />);
  const testInstance = testRenderer.root;
  const keyboardAvoidingView = testInstance.findByType(KeyboardAvoidingView);

  return { keyboardAvoidingView };
};

describe("BaseScreen", () => {
  it("should display a view with keyboard handling with correct styles", () => {
    // given
    const props = {
      children: 'any children',
    };

    // when
    const { keyboardAvoidingView } = render(props);

    // then
    expect(keyboardAvoidingView.props.children).toBe(props.children);
    expect(keyboardAvoidingView.props.style).toBe(styles.wrapper);
  });
});