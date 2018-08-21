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

      dialogRef.componentInstance.child.subscribe((orderComponent: UpsertOrderComponent) => {

        orderComponent.create.subscribe(order => {
          console.log('order create', order);
          dialogRef.close();
        });

        orderComponent.cancel.subscribe(() => {
          console.log('order cancel');
          dialogRef.close();
        });

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

  private refreshTitle() {

    const title = Object.keys(this.lastPrices)
      .map(market => this.lastPrices[market])
      .join(' | ');

    this.title.setTitle(title);

  }

}
