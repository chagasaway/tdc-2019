import { AmountInputScreen } from 'modules/request-money/screens/amount-input/AmountInput.screen';
import { QRCodeScreen } from 'modules/request-money/screens/qr-code/QRCode.screen';
import { ErrorScreen } from 'modules/request-money/screens/error/Error.screen';

export const RequestMoneyScreens = {
  AmountInput: 'RequestMoney/AmountInput',
  QRCode: 'RequestMoney/QRCode',
  Error: 'RequestMoney/Error',
};

export const routes = {
  [RequestMoneyScreens.AmountInput]: {
    screen: AmountInputScreen,
  },
  [RequestMoneyScreens.QRCode]: {
    screen: QRCodeScreen,
  },
  [RequestMoneyScreens.Error]: {
    screen: ErrorScreen,
  },
};
