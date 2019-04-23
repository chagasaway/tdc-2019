import React from 'react';
import TestRenderer from 'react-test-renderer';

import { View } from 'react-native';
import { SpaceFiller } from '../SpaceFiller';

const render = () => {
  const testRenderer = TestRenderer.create(<SpaceFiller />);
  const testInstance = testRenderer.root;
  const view = testInstance.findByType(View);

  return { view };
};

describe('SpaceFiller', () => {
  it('should display a flex view just to fill empty spaces', () => {
    // given
    const expectedStyle = { flex: 1 };

    // when
    const { view } = render();

    // then
    expect(view.props.style).toEqual(expectedStyle);
  });
});
