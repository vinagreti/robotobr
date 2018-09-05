import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UpsertOrderService } from '@app/shared/components/order/upsert-order/upsert-order.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BinanceOrder } from '@app/shared/models/binance.models';
import { MatDialogRef, MatDialog } from '@angular/material';
import { RobotoApiService } from '@app/shared/services/roboto-api/roboto-api.service';
import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';

export interface Market {
  from: string;
  to: string;
  symbol: string;
}


@Component({
  selector: 'app-upsert-order',
  templateUrl: './upsert-order.component.html',
  styleUrls: ['./upsert-order.component.scss']
})
export class UpsertOrderComponent implements OnInit, OnDestroy {

  orderForm: FormGroup;

  @Input()
  set market(v: Market) {
    if (this.orderForm.controls.market.value !== v) {
      this.orderForm.controls.market.setValue(v);
    }
  }
  get market() {
    return this.orderForm.controls.market.value;
  }

  @Input()
  set side(v: number) {
    if (this.orderForm.controls.side.value !== v) {
      this.orderForm.controls.side.setValue(v);
    }
  }
  get side() {
    return this.orderForm.controls.side.value;
  }

  @Input()
  set quantity(v: number) {
    if (this.orderForm.controls.quantity.value !== v) {
      this.orderForm.controls.quantity.setValue(v);
    }
  }
  get quantity() {
    return this.orderForm.controls.quantity.value;
  }

  @Input()
  set price(v: number) {
    console.log('set price', v);
    if (this.orderForm.controls.price.value !== v) {
      this.orderForm.controls.price.setValue(v);
    }
  }
  get price() {
    return this.orderForm.controls.price.value;
  }

  @Input()
  set total(v: number) {
    if (this.orderForm.controls.total.value !== v) {
      this.orderForm.controls.total.setValue(v);
    }
  }
  get total() {
    return this.orderForm.controls.total.value;
  }

  markets: Market[] = [
    { from: 'ETH', to: 'USDT', symbol: 'ETHUSDT' },
    { from: 'BTC', to: 'USDT', symbol: 'BTCUSDT' },
  ];

  sides = [
    'BUY',
    'SELL',
  ];

  types: any[] = [
    { label: 'LIMIT', value: 'LIMIT' },
    { label: 'MARKET', value: 'MARKET' },
    { label: 'STOP_LOSS', value: 'STOP_LOSS' },
    { label: 'STOP_LOSS_LIMIT', value: 'STOP_LOSS_LIMIT' },
    { label: 'TAKE_PROFIT', value: 'TAKE_PROFIT' },
    { label: 'TAKE_PROFIT_LIMIT', value: 'TAKE_PROFIT_LIMIT' },
    { label: 'LIMIT_MAKER', value: 'LIMIT_MAKER' },
  ];

  private subscriptions: Subscription[] = [];
  private lastChanged: string;

  constructor(
    private upsertOrderService: UpsertOrderService,
    private formBuilder: FormBuilder,
    private robotoApi: RobotoApiService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {

    this.createForm();

    this.subscribeToUpsertOrderServiceEvents();

    this.subscribeToForm();

  }

  ngOnDestroy() {

    this.unsubscribeToUpsertOrderServiceEvents();

  }

  calcByTotal() {
    this.lastChanged = 'total';
    if (this.total > 0) {
      if (this.price > 0) {
        this.orderForm.controls.quantity.setValue(this.total / this.price, { emitEvent: false });
      } else {
        this.orderForm.controls.quantity.setValue(0, { emitEvent: false });
      }
    } else {
      this.orderForm.controls.quantity.setValue(0, { emitEvent: false });
    }
  }

  calcByPrice() {
    if (this.orderForm.controls.price.value > 0) {
      if (this.lastChanged === 'total') {
        this.calcByTotal();
      } else if (this.lastChanged === 'quantity') {
        this.calcByQuantity();
      }
    } else {
      if (this.lastChanged === 'total') {
        this.orderForm.controls.quantity.setValue(0, { emitEvent: false });
      } else if (this.lastChanged === 'quantity') {
        this.orderForm.controls.total.setValue(0, { emitEvent: false });
      }
    }
  }

  calcByQuantity() {
    this.lastChanged = 'quantity';
    if (this.quantity > 0) {
      if (this.price > 0) {
        this.orderForm.controls.total.setValue(this.quantity * this.price, { emitEvent: false });
      } else {
        this.orderForm.controls.total.setValue(0, { emitEvent: false });
      }
    } else {
      this.orderForm.controls.total.setValue(0, { emitEvent: false });
    }
  }

  confirmCreation() {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      height: '200px',
    });

    const newOrder = {
      symbol: this.orderForm.controls.market.value.symbol,
      price: this.orderForm.controls.price.value,
      quantity: this.orderForm.controls.quantity.value,
      side: this.orderForm.controls.side.value,
      total: this.orderForm.controls.total.value,
      type: this.orderForm.controls.type.value,
    };

    dialogRef.componentInstance.title = 'Create order';

    dialogRef.componentInstance.msg = this.getCrerateOrderQuestion(newOrder);

    dialogRef.componentInstance.confirmed.subscribe(res => {
      if (res) {
        this.createOrder(newOrder);
        console.log('confirmCreation', newOrder);
      }
    });

  }

  private getCrerateOrderQuestion(order) {
    const market = this.orderForm.controls.market.value;
    switch (order.type) {
      case 'LIMIT':
        return `${order.side} ${order.quantity} ${market.from} for ${order.price}. Total ${order.total} ${market.to}`;
    }
  }

  private createOrder = (order: BinanceOrder) => {

    order = new BinanceOrder(order);

    this.robotoApi.post('createOrder', order).subscribe(res => {

      console.log('ordercreated', res);

    }, err => {

      console.log('ERROR CREATING ORDER', err);

    });

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
    });
  }

  private createForm() {

    this.orderForm = this.formBuilder.group({
      type: [null, [Validators.required]],
      market: [null, [Validators.required]],
      side: [null, [Validators.required]],
      quantity: [0, [Validators.required, Validators.min(0.00000001)]],
      price: [0, [Validators.required, Validators.min(0.00000001)]],
      total: [0, [Validators.required, Validators.min(0.00000001)]],
    });

  }

  private subscribeToForm() {

    this.subscriptions.push(
      this.orderForm.controls.quantity.valueChanges.subscribe(() => {
        this.calcByQuantity();
      })
    );

    this.subscriptions.push(
      this.orderForm.controls.price.valueChanges.subscribe(() => {
        this.calcByPrice();
      })
    );

    this.subscriptions.push(
      this.orderForm.controls.total.valueChanges.subscribe(() => {
        this.calcByTotal();
      })
    );

  }

}



/*
LIMIT	timeInForce, quantity, price
MARKET	quantity
STOP_LOSS	quantity, stopPrice
STOP_LOSS_LIMIT	timeInForce, quantity, price, stopPrice
TAKE_PROFIT	quantity, stopPrice
TAKE_PROFIT_LIMIT	timeInForce, quantity, price, stopPrice
LIMIT_MAKER	quantity, price
*/
