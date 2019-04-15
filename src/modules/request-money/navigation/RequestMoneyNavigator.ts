import { AmountInputScreen } from "../screens/amount-input/AmountInput.screen";
import { QRCodeScreen } from "../screens/qr-code/QRCode.screen";
import { ErrorScreen } from "../screens/error/Error.screen";

export const RequestMoneyScreens = {
  AmountInput: 'RequestMoney/AmountInput',
  QRCode: 'RequestMoney/QRCode',
  Error: 'RequestMoney/Error',
}

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