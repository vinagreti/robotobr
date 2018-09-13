export interface Market {
  from: string;
  to: string;
  symbol: string;
}

export interface Markets {
  [key: string]: Market;
}

export const MARKETS: Markets = {
  ETHUSDT: { from: 'ETH', to: 'USDT', symbol: 'ETHUSDT' },
  BTCUSDT: { from: 'BTC', to: 'USDT', symbol: 'BTCUSDT' },
}
