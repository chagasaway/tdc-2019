import { AmountInputScreen } from "../screens/amount-input/AmountInput.screen";

export const RequestMoneyScreens = {
  AmountInput: 'RequestMoney/AmountInput',
  QRCode: 'RequestMoney/QRCode',
  Error: 'RequestMoney/Error',
}

export const routes = {
  [RequestMoneyScreens.AmountInput]: {
    screen: AmountInputScreen,
    path: '',
  }
};