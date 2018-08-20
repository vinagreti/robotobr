import { Component, OnInit } from '@angular/core';
import { TradeMarket, RobotoTradeType } from '@app/shared/models/market.model';
import { DialogService } from '@app/shared/components/dialog/dialog.service';
import { UpsertOrderComponent } from '@app/shared/components/order/upsert-order/upsert-order.component';
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

  orderTypes: RobotoTradeType[] = [
    { label: 'Buy' },
    { label: 'Stop' },
    { label: 'BuySell' },
    { label: 'SellBuy' },
  ];

  private _openMarkets: any = {};

  constructor(
    private dialogservice: DialogService,
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

  addOrder(event) {
    const operation = event.value;
    if (operation) {
      const operationId = operation.label;

      const dialogRef = this.dialogservice.open(UpsertOrderComponent, {
        title: operationId,
      });

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
    this.title.setTitle(`${price} ${marketFromTo}`);
  }

}
