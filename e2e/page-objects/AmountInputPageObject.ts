export class AmountInputPageObject {
  public async getScreen() {
    return element(by.id('AmountInputScreen'));
  }

  public async fillAmount(amount: number) {
    await element(by.id('amountInput')).typeText(`${amount}`);
  }

  public async confirm() {
    await element(by.id('confirmButton')).tap();
  }
}
