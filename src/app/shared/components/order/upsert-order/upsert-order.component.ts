import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UpsertOrderService } from '@app/shared/components/order/upsert-order/upsert-order.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { BinanceOrder } from '@app/shared/models/binance.models';
import { MatDialog } from '@angular/material';
import { RobotoApiService } from '@app/shared/services/roboto-api/roboto-api.service';
import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';
import { Market } from '@app/shared/components/models/markets';

@Component({
  selector: 'app-upsert-order',
  templateUrl: './upsert-order.component.html',
  styleUrls: ['./upsert-order.component.scss']
})
export class UpsertOrderComponent implements OnInit, OnDestroy {

  orderForm: FormGroup;

  requiredFields: any = {};

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
    if (this.orderForm.controls.price.value !== v) {
      this.orderForm.controls.price.setValue(v);
    }
  }
  get price() {
    return this.orderForm.controls.price.value;
  }

  @Input()
  set stopPrice(v: number) {
    if (this.orderForm.controls.stopPrice.value !== v) {
      this.orderForm.controls.stopPrice.setValue(v);
    }
  }
  get stopPrice() {
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

  private orderFormModel = {
    type: [null, [Validators.required]],
    market: [null, [Validators.required]],
    side: [null, [Validators.required]],
    quantity: [0, [Validators.required, Validators.min(0.00000001)]],
    price: [0, [Validators.min(0)]],
    stopPrice: [0, [Validators.min(0)]],
    total: [0, [Validators.required, Validators.min(0.00000001)]],
  };

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

    const newOrder = this.getNewOrderBasedOnRequiredFields();

    dialogRef.componentInstance.title = 'Create order';

    dialogRef.componentInstance.msg = this.getCrerateOrderQuestion(newOrder);

    dialogRef.componentInstance.confirmed.subscribe(res => {
      if (res) {
        this.createOrder(newOrder);
        console.log('confirmCreation', newOrder);
      }
    });

  }

  getNewOrderBasedOnRequiredFields() {
    const newOrder: any = {};
    Object.keys(this.orderFormModel).forEach(key => {
      if (this.requiredFields[key]) {
        if (key === 'market') {
          newOrder.symbol = this.orderForm.controls[key].value.symbol;
        } else {
          newOrder[key] = this.orderForm.controls[key].value;
        }
      }
    });
    return newOrder;
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

    this.orderForm = this.formBuilder.group(this.orderFormModel);

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

    this.subscriptions.push(
      this.orderForm.controls.type.valueChanges.subscribe(() => {
        this.detectRequiredFields();
        this.setRequiredFields();
      })
    );

  }

  private setRequiredFields() {

    Object.keys(this.orderFormModel).forEach((key) => {

      if (key !== 'type') { // because it is responsible for triggering this act or we would have a LOOP

        const control: AbstractControl = this.orderForm.controls[key];

        control.clearValidators();

        let validators = [...this.orderFormModel[key][1]];

        if (this.requiredFields[key]) {

          validators = [...validators, Validators.required];

          if (['price', 'stopPrice'].indexOf(key) !== -1) {

            validators = [...validators, Validators.min(0.00000001)];

          }

        }

        control.setValidators(validators);

        control.updateValueAndValidity();

      }

    });

  }

  private detectRequiredFields() {

    let requiredFields: any = {};

    switch (this.orderForm.controls.type.value) {
      case 'LIMIT':
        requiredFields = {
          quantity: true,
          price: true,
        };
        break;
      case 'MARKET':
        requiredFields = {
          quantity: true,
        };
        break;
      case 'STOP_LOSS':
        requiredFields = {
          quantity: true,
          stopPrice: true,
        };
        break;
      case 'STOP_LOSS_LIMIT':
        requiredFields = {
          quantity: true,
          price: true,
          stopPrice: true,
        };
        break;
      case 'TAKE_PROFIT':
        requiredFields = {
          quantity: true,
          stopPrice: true
        };
        break;
      case 'TAKE_PROFIT_LIMIT':
        requiredFields = {
          quantity: true,
          price: true,
          stopPrice: true,
        };
        break;
      case 'LIMIT_MAKER':
        requiredFields = {
          quantity: true,
          price: true,
        };
        break;
    }

    this.requiredFields = requiredFields;

  }

}
