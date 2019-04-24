import { by, element, expect } from 'detox';

export class QRCodePageObject {

  public async assertIsVisible() {
    await expect(element(by.id('QRCodeScreen'))).toBeVisible();
  }

  public async share() {
    await element(by.id('shareButton')).tap();
  }

  public async assertIsShared() {
    await expect(element(by.text('OK'))).toBeVisible();
  }

}
