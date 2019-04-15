export interface RequestMoney {
  id: number;
  amount: number;
  qrCode: string;
}

export const createRequestMoney = async (amount: number): Promise<RequestMoney> => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ amount }),
    headers: new Headers({
      'Content-type': 'application/json'
    })
  };
  const response = await fetch('http://localhost:3000/request-money', options);

  if (response.ok) {
    const requestMoney = await response.json();
    return requestMoney;
  }

  throw new Error(`HTTP response has status ${response.statusText}`);
}
