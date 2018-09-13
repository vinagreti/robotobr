export class BinanceOrder {
  symbol?: string;
  side?: string;
  quantity?: string;
  price?: string;
  stopPrice?: string;
  type?: string;

  constructor(data: any = {}) {
    if (data.symbol) {
      this.symbol = `${data.symbol}`;
    }

    if (data.side) {
      this.side = `${data.side}`;
    }

    if (data.quantity) {
      this.quantity = `${parseFloat(data.quantity).toFixed(2)}`;
    }

    if (data.price) {
      this.price = `${parseFloat(data.price).toFixed(2)}`;
    }

    if (data.stopPrice) {
      this.stopPrice = `${parseFloat(data.stopPrice).toFixed(2)}`;
    }

    if (data.type) {
      this.type = `${data.type}`;
    }

  }
}
