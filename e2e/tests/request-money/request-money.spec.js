const { reloadApp } = require('detox-expo-helpers');

describe('Request money', () => {
  beforeAll(async () => {
    await reloadApp();
  });

  it('should show amount input screen', async () => {
    await expect(element(by.id('AmountInputScreen'))).toBeVisible();
  });

  it('should type request money amount', async () => {
    await element(by.id('amountInput')).typeText('5');
  });

  it('should confirm request money', async () => {
    await element(by.id('confirmButton')).tap();
  });

  it('should should show qrcode screen', async () => {
    await element(by.id('QRCodeScreen')).toBeVisible();
  });

  it('should share the qrcode', async () => {
    await element(by.id('shareButton')).tap();
  });
});