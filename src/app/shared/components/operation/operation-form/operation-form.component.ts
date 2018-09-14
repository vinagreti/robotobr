import { Component, OnInit } from '@angular/core';
import { BinanceTradeEvent } from '@app/shared/models/binance-ws-models';
import { BinanceService } from '@app/shared/services/binance-service/binance.service';

@Component({
  selector: 'app-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.scss']
})
export class OperationFormComponent implements OnInit {

  active: boolean;

  lastPrice;

  newOperation = {
    market: undefined,
    operatioType: undefined,
    bottomLimit: undefined,
    middle: undefined,
    topLimit: undefined,
    side: undefined,
  };

  operatioTypes = [
    'BUY_LIMIT',
    'BUY_PERCENT',
    'SELL_LIMIT',
    'SELL_PERCENT',
  ];

  constructor(
    private binance: BinanceService,
  ) { }

  ngOnInit() {
  }

  connectToWebsocket() {
    if (this.newOperation.market) {
      this.binance.wsTrade(this.newOperation.market).subscribe((msg: any) => {
        this.lastPrice = msg[0] ? msg[0].price : undefined;
      });
    }
  }

  get topPercentual() {
    const totalDistance = this.newOperation.topLimit - this.newOperation.middle;
    const currentDistance = this.lastPrice - this.newOperation.middle;
    return ((currentDistance / totalDistance) * 100).toFixed(2);
  }

  get bottomPercentual() {
    const totalDistance = this.newOperation.middle - this.newOperation.bottomLimit;
    const currentDistance = this.newOperation.middle - this.lastPrice;
    return ((currentDistance / totalDistance) * 100).toFixed(2);
  }

  get distancePercentual() {
    if (this.lastPrice > this.newOperation.middle) {
      const currentDistance = this.lastPrice - this.newOperation.middle;
      return ((currentDistance / this.lastPrice) * 100).toFixed(2);
    } else if (this.lastPrice < this.newOperation.middle) {
      const currentDistance = this.newOperation.middle - this.lastPrice;
      return ((currentDistance / this.lastPrice) * 100).toFixed(2);
    } else {
      return 0;
    }
  }

  get distanceTopPercentual() {
    const currentDistance = this.newOperation.topLimit - this.newOperation.middle;
    return ((currentDistance / this.newOperation.middle) * 100).toFixed(2);
  }

  get distanceBottomPercentual() {
    const currentDistance = this.newOperation.middle - this.newOperation.bottomLimit;
    return ((currentDistance / this.newOperation.middle) * 100).toFixed(2);
  }
}
