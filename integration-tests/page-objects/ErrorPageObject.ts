import { RenderAPI, fireEvent } from 'react-native-testing-library';
import { PageObject } from './PageObject';
import { AmountInputPageObject } from './AmountInputPageObject';

export class ErrorPageObject extends PageObject {
  private static closeButtonId = 'closeButton';

  constructor(app: RenderAPI) {
    super(app, 'ErrorScreen');
  }

  private getCloseButton() {
    return this.page().find((node) => node.props.testID === ErrorPageObject.closeButtonId);
  }

  public async close() {
    const closeButton = this.getCloseButton();
    fireEvent.press(closeButton);
    return new AmountInputPageObject(this.app);
  }
}
