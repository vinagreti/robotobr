
export class BinanceTradeEvent {

  type: string;           // e = "trade",     // Event type
  eventTime: number;      // E = 123456789,   // Event time
  market: string;         // s = "BNBBTC",    // Symbol
  id: number;             // t = 12345,       // Trade ID
  price: number;          // p = "0.001",     // Price
  quantity: number;       // q = "100",       // Quantity
  buyerOrder: number;     // b = 88,          // Buyer order ID
  sellerOrder: number;    // a = 50,          // Seller order ID
  tradeTime: number;      // T = 123456785,   // Trade time
  buyerAndMaker: string;  // m = true,        // Is the buyer the market maker?

  constructor(data: any = {}) {
    this.humanize(data);
  }

  private humanize(data: any = {}) {
    this.type = data.e || undefined;
    this.eventTime = data.E || undefined;
    this.market = data.s || undefined;
    this.id = data.t || undefined;
    this.price = data.p ? parseFloat(data.p) : undefined;
    this.quantity = data.q ? parseFloat(data.q) : undefined;
    this.buyerOrder = data.b || undefined;
    this.sellerOrder = data.a || undefined;
    this.tradeTime = data.T || undefined;
    this.buyerAndMaker = data.m || undefined;
  }
}
