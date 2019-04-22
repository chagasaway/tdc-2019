import { by, element, expect } from 'detox';

export class QRCodePageObject {

  public async assertIsVisible() {
    expect(element(by.id('QRCodeScreen'))).toBeVisible();
  }

  public async share() {
    await element(by.id('shareBtn')).tap();
  }

  public async assertIsShared() {
    expect(element(by.text('OK'))).toBeVisible();
  }

}
