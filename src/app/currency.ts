export class Currency {
  name: string;
  percent_change: number;
  price: Price;
  symbol: string;
}

export class Price {
  amount: number;
  currency: string;
}
