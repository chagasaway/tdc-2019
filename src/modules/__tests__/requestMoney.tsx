import { RenderAPI } from 'react-native-testing-library';
import waitForExpect from 'wait-for-expect';

import { AmountInputPageObject } from '../../../integration-tests/page-objects/AmountInputPageObject';
import { QRCodePageObject } from '../../../integration-tests/page-objects/QRCodePageObject';
import { renderApp } from '../../../integration-tests/config/renderApp';
import { requestMoney } from '../../../integration-tests/mocks/createRequestMoney';

describe('Request Money', () => {
  describe('success QR code creation & share', () => {
    let app: RenderAPI;

    beforeAll(() => {
      // fetch.resetMocks();
      // fetch.mockResponseOnce(JSON.stringify(requestMoney));
      app = renderApp();
    });

    it('should open amount input screen', async () => {
      // given
      const page = new AmountInputPageObject(app);

      // when
      const isVisible = await page.isVisible();

      // then
      expect(isVisible).toBe(true);
    });

    it('should fill the amount input', async () => {
      // given
      const page = new AmountInputPageObject(app);

      // when
      page.fillAmount('10');

      // then
      await waitForExpect(async () => {
        const typedValue = page.getAmount();
        expect(typedValue).toEqual('1000');
      });
    });

    it('should confirm the amount & go to QR code screen', async () => {
      // given
      const amountPage = new AmountInputPageObject(app);

      // when
      const qrCodePage = await amountPage.confirm();

      await waitForExpect(async () => {
        const isVisible = qrCodePage.isVisible();
        expect(isVisible).toBe(true);
      });
    });

    it('should share the QR Code & go back to amount screen', async () => {
      // given
      const qrCodePage = new QRCodePageObject(app);

      // when
      const amountPage = await qrCodePage.share();

      await waitForExpect(async () => {
        const isVisible = amountPage.isVisible();
        expect(isVisible).toBe(true);
      });
    });
  });
});