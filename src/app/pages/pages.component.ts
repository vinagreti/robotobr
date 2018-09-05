import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../shared/services/user-service/user.service';
import { UpsertOrderComponent } from '@app/shared/components/order/upsert-order/upsert-order.component';
import { UpsertOrderService } from '@app/shared/components/order/upsert-order/upsert-order.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  assets = ['ETH', 'BTC', 'BNB', 'USDT'];

  user;

  iconMode = true;

  @ViewChild(UpsertOrderComponent) orderForm: UpsertOrderComponent;

  constructor(
    private userService: UserService,
    private upsertOrderService: UpsertOrderService
  ) { }

  ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.user = user;
    });
  }

  setNewOrderValuesBasesOnBalanceSelected($event) {
    if (this.orderForm && this.orderForm.market) {
      if (this.orderForm.market.from === $event.asset) {
        this.upsertOrderService.setQuantity.emit($event.value);
      } else if (this.orderForm.market.to === $event.asset) {
        this.upsertOrderService.setTotal.emit($event.value);
      }
    }
  }

  setNewOrderValuesBasesOnTradeSelected($event) {
    if (this.orderForm && this.orderForm.market) {
      if (this.orderForm.market.from === $event.asset) {
        this.upsertOrderService.setQuantity.emit($event.value);
      } else if (this.orderForm.market.to === $event.asset) {
        this.upsertOrderService.setTotal.emit($event.value);
      }
    }
  }

}
