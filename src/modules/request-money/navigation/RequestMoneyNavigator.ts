import { AmountInputScreen } from 'src/modules/request-money/screens/amount-input/AmountInput.screen';
import { QRCodeScreen } from 'src/modules/request-money/screens/qr-code/QRCode.screen';
import { ErrorScreen } from 'src/modules/request-money/screens/error/Error.screen';

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
