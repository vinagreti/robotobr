import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UpsertOrderService } from '@app/shared/components/order/upsert-order/upsert-order.service';
import { Subscription } from 'rxjs';

export interface Market {
  from: string;
  to: string;
  symbol: string
}


@Component({
  selector: 'app-upsert-order',
  templateUrl: './upsert-order.component.html',
  styleUrls: ['./upsert-order.component.scss']
})
export class UpsertOrderComponent implements OnInit, OnDestroy {

  @Input() set market(v: Market) {
    if (this._market !== v) {
      this._market = v;
    }
  }

  get market() {
    return this._market;
  }

  @Input() set side(v: string) {
    if (this._side !== v) {
      this._side = v;
    }
  }
  get side() {
    return this._side;
  }

  @Input() set quantity(v: number) {
    if (this._quantity !== v) {
      this._quantity = v;
      this.calcByQuantity();
    }
  }
  get quantity() {
    return this._quantity;
  }

  @Input() set price(v: number) {
    if (this._price !== v) {
      this._price = v;
      this.calcByPrice();
    }
  }
  get price() {
    return this._price;
  }

  @Input() set total(v: number) {
    if (this._total !== v) {
      this._total = v;
      this.calcByTotal();
    }
  }
  get total() {
    return this._total;
  }

  markets: Market[] = [
    {from: 'ETH', to: 'USDT', symbol: 'ETHUSDT'},
    {from: 'BTC', to: 'USDT', symbol: 'BTCUSDT'},
  ]

  sides = [
    'BUY',
    'SELL',
  ]

  private _total: number = 0;
  private _market: Market;
  private _side: string;
  private _quantity: number = 0;
  private _price: number = 0;
  private subscriptions: Subscription[] = [];
  private lastChanged: string;

  constructor(
    private upsertOrderService: UpsertOrderService
  ) { }

  ngOnInit() {

    this.subscribeToUpsertOrderServiceEvents();

  }

  ngOnDestroy() {

    this.unsubscribeToUpsertOrderServiceEvents();

  }

  calcByTotal() {
    this.lastChanged = 'total';
    this._price = this.price || 0;
    this._quantity = this.quantity || 0;
    if (this.total > 0) {
      if (this.price > 0) {
        this._quantity = this.total / this.price;
      } else {
        this._quantity = 0;
      }
    } else {
      this._quantity = 0;
    }
  }

  calcByPrice() {

    this._total = this._total || 0;
    this._quantity = this._quantity || 0;

    if (this.price > 0) {

      if (this.lastChanged === 'total') {

        this.calcByTotal();

      } else if (this.lastChanged === 'quantity') {

        this.calcByQuantity();

      }

    } else {

      if (this.lastChanged === 'total') {

        this._quantity = 0;

      } else if (this.lastChanged === 'quantity') {

        this._total = 0;

      }

    }

  }

  calcByQuantity() {
    this.lastChanged = 'quantity';
    this._price = this.price || 0;
    this._total = this.total || 0;
    if (this.quantity > 0) {
      if (this.price > 0) {
        this._total = this.quantity * this.price;
      } else {
        this._total = 0;
      }
    } else {
      this._total = 0;
    }
  }

  private subscribeToUpsertOrderServiceEvents() {

    this.subscriptions.push(
      this.upsertOrderService.setTotal.subscribe(total => {
        this.total = total;
      })
    );


    this.subscriptions.push(
      this.upsertOrderService.setPrice.subscribe(price => {
        this.price = price;
      })
    );


    this.subscriptions.push(
      this.upsertOrderService.setQuantity.subscribe(quantity => {
        this.quantity = quantity;
      })
    );


  }

  private unsubscribeToUpsertOrderServiceEvents() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    })
  }

}
