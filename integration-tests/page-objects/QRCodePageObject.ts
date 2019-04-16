import { RenderAPI, fireEvent } from 'react-native-testing-library';
import { PageObject } from './PageObject';
import { AmountInputPageObject } from './AmountInputPageObject';

export class QRCodePageObject extends PageObject {
  private static shareButtonId = 'shareButton';

  constructor(app: RenderAPI) {
    super(app, 'QRCodeScreen');
  }

  private getCloseButton() {
    return this.page().find((node) => node.props.testID === QRCodePageObject.shareButtonId);
  }

  public async share() {
    const shareButton = this.getCloseButton();
    fireEvent.press(shareButton);
    return new AmountInputPageObject(this.app);
  }
}
