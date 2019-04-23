import React from 'react';
import TestRenderer from 'react-test-renderer';
import QRCodeComponent from 'react-native-qrcode';

import { QRCode, QRCodeProps } from '../QRCode';

const render = (props: QRCodeProps) => {
  const testRenderer = TestRenderer.create(<QRCode {...props} />);
  const testInstance = testRenderer.root;
  const qrCode = testInstance.findByType(QRCodeComponent);

  return { qrCode };
};

describe('QRCode', () => {
  it('should display a QRCode', () => {
    // given
    const props = {
      value: '123',
    };

    // when
    const { qrCode } = render(props);

    // then
    expect(qrCode.props.value).toBe(props.value);
    expect(qrCode.props.size).toBe(200);
    expect(qrCode.props.bgColor).toBe('purple');
    expect(qrCode.props.fgColor).toBe('white');
  });
});
