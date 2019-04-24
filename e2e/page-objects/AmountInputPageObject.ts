import { by, element, expect } from 'detox';
import { QRCodePageObject } from './QRCodePageObject';

export class AmountInputPageObject {

  public async assertIsVisible() {
    await expect(element(by.id('AmountInputScreen'))).toBeVisible();
  }

  public async fillAmount(amount: number) {
    await element(by.id('amountInput')).tap();
    await element(by.id('amountInput')).typeText(`${amount}`);
  }

  public async assertHasAmountOf(amount: number) {
    await expect(element(by.text(`${amount}`))).toBeVisible();
  }

  public async confirm(): Promise<QRCodePageObject> {
    await element(by.id('confirmButton')).tap();
    return new QRCodePageObject();
  }
}
