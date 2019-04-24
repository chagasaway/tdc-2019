import { reloadApp } from 'detox-expo-helpers';
import { AmountInputPageObject } from '../../page-objects/AmountInputPageObject';
import { QRCodePageObject } from '../../page-objects/QRCodePageObject';

describe('Request money', () => {
  beforeAll(async () => {
    await reloadApp();
  });

  it('should show amount input screen', async () => {
    const amountInputPage = new AmountInputPageObject();
    await amountInputPage.assertIsVisible();
  });

  it('should fill the requested amount', async () => {
    const amountInputPage = new AmountInputPageObject();
    await amountInputPage.fillAmount(5);
    await amountInputPage.assertHasAmountOf(5);
  });

  it('should confirm the requested amount', async () => {
    const amountInputPage = new AmountInputPageObject();
    const qrCodePage = await amountInputPage.confirm();
    await qrCodePage.assertIsVisible();
  });

  it('should share the QR code', async () => {
    const qrCodePage = new QRCodePageObject();
    await qrCodePage.share();
    await qrCodePage.assertIsShared();
  });

  it('should should show amount input screen again', async () => {
    const qrCodePage = new AmountInputPageObject();
    await qrCodePage.assertIsVisible();
  });

});
