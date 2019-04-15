import React from 'react';
import TestRenderer from 'react-test-renderer';

import { ErrorView, ErrorViewProps } from '../Error.view';
import { Title } from '../../../../../common/components/Title';
import { Button } from '../../../../../common/components/Button';

const render = (props: ErrorViewProps) => {
  const testRenderer = TestRenderer.create(<ErrorView {...props} />);
  const testInstance = testRenderer.root;
  const title = testInstance.findByType(Title);
  const button = testInstance.findByType(Button);

  return { title, button };
};

describe("Error View", () => {
  it("should display a title and a back button", () => {
    // given
    const props = {
      navigateBack: jest.fn(),
    };

    // when
    const { title, button } = render(props);

    // then
    expect(title.props.children).toBe('Desculpe, algo deu errado :(');
    expect(button.props.onPress).toBe(props.navigateBack);
    expect(button.props.label).toBe('VOLTAR');
  });
});