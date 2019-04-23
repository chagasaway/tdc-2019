import React from 'react';
import TestRenderer from 'react-test-renderer';

import { Text } from 'react-native';
import { Title, styles } from '../Title';

const render = (props: React.PropsWithChildren<{}>) => {
  const testRenderer = TestRenderer.create(<Title {...props} />);
  const testInstance = testRenderer.root;
  const title = testInstance.findByType(Text);

  return { title };
};

describe('Title', () => {
  it('should display a text with correct styles', () => {
    // given
    const props = {
      children: 'Title',
    };

    // when
    const { title } = render(props);

    // then
    expect(title.props.children).toBe(props.children);
    expect(title.props.style).toBe(styles.title);
  });
});
