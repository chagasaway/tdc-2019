import { RenderAPI, fireEvent } from 'react-native-testing-library';
import { PageObject } from './PageObject';
import { QRCodePageObject } from './QRCodePageObject';

export class AmountInputPageObject extends PageObject {
  private static inputId = 'amountInput';
  private static confirmButtonId = 'confirmButton';

  constructor(app: RenderAPI) {
    super(app, 'AmountInputScreen');
  }

  public isVisible() {
    try {
      const input = this.getInput();
      return !!input;
    } catch {
      return false;
    }
  }

  public getInput() {
    return this.page().find(
      (node) => node.props.testID === AmountInputPageObject.inputId && node.props.onChangeText
    );
  }

  public fillAmount(amount: string) {
    const input = this.getInput();
    fireEvent.changeText(input, amount);
  }

  public getAmount() {
    const input = this.getInput();
    return input.props.value;
  }

  public getConfirmButton() {
    return this.page().find((node) => node.props.testID === AmountInputPageObject.confirmButtonId);
  }

  public confirm = async () => {
    const confirmButton = this.getConfirmButton();
    await confirmButton.props.onPress({ preventDefault: () => true });
    return new QRCodePageObject(this.app);
  }
}