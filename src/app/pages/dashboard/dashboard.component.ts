import { Component, OnInit } from '@angular/core';
import { TradeMarket } from '@app/shared/models/market.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  marketToAdd;

  markets: TradeMarket[] = [
    { label: 'BTC - USD', from: 'btc', to: 'usdt' },
    { label: 'ETH - USD', from: 'eth', to: 'usdt' },
    { label: 'BNB - USD', from: 'bnb', to: 'usdt' },
    { label: 'ETH - BTC', from: 'eth', to: 'btc' },
  ];

  private lastPrices: any = {};

  private _openMarkets: any = {};

  constructor(
    private title: Title,
  ) { }

  ngOnInit() { }

  addMarket(event) {
    const market = event.value;

    if (market) {
      const marketFromTo = market.from + market.to;
      this._openMarkets[marketFromTo] = market;
      setTimeout(() => {
        this.marketToAdd = undefined;
      }, 0);
    }
  }

  get openMarkets() {
    return Object.keys(this._openMarkets).filter(market => this._openMarkets[market]).map(data => {
      return this._openMarkets[data];
    });
  }

  onTrade(market, trade) {
    const marketFromTo = market.from + market.to;

    const price = trade ? trade.price : undefined;

    this.lastPrices[marketFromTo] = price;

    this.refreshTitle();
  }

  private refreshTitle() {

    const title = Object.keys(this.lastPrices)
      .map(market => this.lastPrices[market])
      .join(' | ');

    this.title.setTitle(title);

  }

}
