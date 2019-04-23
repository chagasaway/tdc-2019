import React from 'react';
import TestRenderer from 'react-test-renderer';

import { Title } from 'common/components/Title';
import { Button } from 'common/components/Button';
import { QRCodeView, QRCodeViewProps } from '../QRCode.view';

const render = (props: QRCodeViewProps) => {
  const testRenderer = TestRenderer.create(<QRCodeView {...props} />);
  const testInstance = testRenderer.root;
  const title = testInstance.findByType(Title);
  const button = testInstance.findByType(Button);

  return { title, button };
};

describe('QRCode View', () => {
  it('should display a title and a share button', () => {
    // given
    const props = {
      id: 'abcde',
      onShare: jest.fn(),
    };

    // when
    const { title, button } = render(props);

    // then
    expect(title.props.children).toBe('Compartilhe seu QR Code');
    expect(button.props.onPress).toBe(props.onShare);
    expect(button.props.label).toBe('COMPARTILHAR');
  });
});
