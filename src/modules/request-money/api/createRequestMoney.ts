export interface RequestMoney {
  id: number;
  amount: number;
  qrCode: string;
}

export const createRequestMoney = async (amount: number): Promise<RequestMoney> => {
  return {
    id: 13,
    amount,
    qrCode: 'abcde',
  };
}