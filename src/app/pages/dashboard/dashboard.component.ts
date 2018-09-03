import { Component, OnInit } from '@angular/core';
import { TradeMarket, RobotoTradeType } from '@app/shared/models/market.model';
import { DialogService } from '@app/shared/components/dialog/dialog.service';
import { UpsertOrderComponent } from '@app/shared/components/order/upsert-order/upsert-order.component';
import { Title } from '@angular/platform-browser';
import { RobotoApiService } from '@app/shared/services/roboto-api/roboto-api.service';
import { BinanceOrder } from '@app/shared/models/binance.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  marketToAdd;

  orderToAdd;

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

  private lastPrices: any = {};

  private _openMarkets: any = {};

  constructor(
    private robotoApi: RobotoApiService,
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
        actions: [
          { label: 'Create', callback: this.createOrder }
        ],
        context: {
          form: {
            symbol: 'ETHUSDT',
            side: 'BUY',
            quantity: 0.1,
            price: 271,
            type: 'LIMIT',
          }
        }
      });

      setTimeout(() => {
        this.orderToAdd = undefined;
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

  private createOrder = (context) => {

    console.log('createOrder', context);

    const order = new BinanceOrder(context.form);

    this.robotoApi.post('createOrder', order).subscribe(res => {
      console.log('CREATE ORDER', res);
    });

  }

  private refreshTitle() {

    const title = Object.keys(this.lastPrices)
      .map(market => this.lastPrices[market])
      .join(' | ');

    this.title.setTitle(title);

  }

}
