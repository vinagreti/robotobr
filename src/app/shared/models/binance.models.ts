export class BinanceOrder {
  symbol: string;
  side: string;
  quantity: string;
  price: string;
  stopPrice: string;
  type: string;

  constructor(data: any = {}) {
    this.symbol = `${data.symbol}` || this.symbol;
    this.side = `${data.side}` || this.side;
    this.quantity = `${parseFloat(data.quantity).toFixed(2)}` || this.quantity;
    this.price = `${parseFloat(data.price).toFixed(2)}` || this.price;
    this.stopPrice = `${parseFloat(data.stopPrice).toFixed(2)}` || this.stopPrice;
    this.type = `${data.type}` || this.type;
  }
}
