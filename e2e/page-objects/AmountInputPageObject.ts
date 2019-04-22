import { by, element } from 'detox';
import { QRCodePageObject } from './QRCodePageObject';

export class AmountInputPageObject {

  public async assertIsVisible() {
    expect(element(by.id('AmountInputScreen'))).toBeVisible();
  }

  public async fillAmount(amount: number) {
    await element(by.id('amountInput')).typeText(`${amount}`);
  }

  public async assertHasAmountOf(amount: number) {
    expect(element(by.text(`${amount}`))).toBeVisible();
  }

  public async confirm(): Promise<QRCodePageObject> {
    await element(by.id('confirmButton')).tap();
    return new QRCodePageObject();
  }
}
