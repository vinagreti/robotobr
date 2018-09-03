import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upsert-order',
  templateUrl: './upsert-order.component.html',
  styleUrls: ['./upsert-order.component.scss']
})
export class UpsertOrderComponent implements OnInit {

  @Input() form: any = {};

  markets = [
    'ETHUSDT',
    'BTCUSDT',
  ]

  sides = [
    'BUY',
    'SELL',
  ]

  total = 0;

  constructor() { }

  ngOnInit() {
  }

  calcBytotal() {

    if (this.form.price && this.form.price > 0) {

      const quantity = this.total / this.form.price;

      console.log('CALC BY TOTAL', this.form, quantity);

      this.form.quantity = quantity;

      return this.form.quantity;

    }

  }

}
