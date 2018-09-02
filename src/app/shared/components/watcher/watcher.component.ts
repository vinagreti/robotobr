import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WsClientService } from '@app/shared/services/ws-client/ws-client.service';
import { TradeMarket } from '@app/shared/models/market.model';
import { BinanceTradeEvent } from '@app/shared/models/binance-ws-models';

const BINANCE_WS_ENDPOINT = 'wss://stream.binance.com:9443/ws';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.component.html',
  styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent implements OnInit {

  lastTrades: BinanceTradeEvent[];

  showChart: boolean;

  showStream: boolean;

  tradingViewMarket;

  marketChartLink: string;

  @Input()
  set market(v: TradeMarket) {
    if (this._market !== v) {
      this._market = v;
      if (this._market) {
        this.coonnectToWebsocket();
        this.getMarketChartLink();
        this.setTradingViewMarket();
      }
    }
  }

  get market() {
    return this._market;
  }

  @Output() trade = new EventEmitter();

  private _market: TradeMarket;

  constructor(
    private wsClient: WsClientService,
  ) { }

  ngOnInit() { }

  getBgColorBasedOnVolume(quantity = 0) {
    let bgColor = '';
    if (quantity > 10) {
      bgColor = 'red';
    } else if (quantity > 1) {
      bgColor = 'grey';
    }
    return bgColor;
  }

  getColorBasedOnVolume(quantity = 0) {
    let color = '';
    if (quantity < 0.1) {
      color = 'rgba(0, 0, 0, 0.2)';
    } else if (quantity > 1) {
      color = 'white';
    }
    return color;
  }

  private setTradingViewMarket() {
    this.tradingViewMarket = `${this.market.from.toUpperCase()}${this.market.to.toUpperCase()}`;
  }

  private getMarketChartLink() {
    this.marketChartLink = `https://www.binance.com/en/trade/${this.market.from.toUpperCase()}_${this.market.to.toUpperCase()}`;
  }

  get chartData() {
    const chartData = this.lastTrades.map(trade => {
      return [
        trade.tradeTime,
        trade.price
      ];
    });

    return chartData;
  }

  private coonnectToWebsocket() {

    const endpoint = `${BINANCE_WS_ENDPOINT}/${this.market.from}${this.market.to}@trade`;

    this.wsClient.connect(endpoint, 200, (trade) => {

      const tradeParsed = new BinanceTradeEvent(JSON.parse(trade));

      return {
        tradeTime: tradeParsed.tradeTime,
        price: tradeParsed.price,
        quantity: tradeParsed.quantity,
      }

    }).messages.subscribe((msg: any) => {
      this.lastTrades = msg;
      this.trade.emit(this.lastTrades[0]);
    });
  }
}
