import { Component, OnInit, Input } from '@angular/core';
import { OpenConnection } from '@app/shared/services/ws-client/ws-client.models';
import { environment } from '@env/environment.gh-page';
import { WsClientService } from '@app/shared/services/ws-client/ws-client.service';
import { RobotoApiService } from '@app/shared/services/roboto-api/roboto-api.service';

const ENDPOINT_BALANCE = `${environment.robotoWs}/myOpenOrder`;

@Component({
  selector: 'app-my-open-orders',
  templateUrl: './my-open-orders.component.html',
  styleUrls: ['./my-open-orders.component.scss']
})
export class MyOpenOrdersComponent implements OnInit {

  myOpenOrders$;

  myOpenOrderWebsocket: OpenConnection;

  displayedColumns: string[] = ['symbol', 'executed', 'quantity', 'price', 'total', 'remove'];

  @Input() assets: string[];

  constructor(
    private wsClient: WsClientService,
    private robotoApi: RobotoApiService,
  ) { }

  ngOnInit() {
    this.createBalanceSocket();
    this.loadMyOpenOrders();
  }

  getTotal(myOpenOrder) {
    return parseFloat(myOpenOrder.origQty) * parseFloat(myOpenOrder.price);
  }

  cancelOrder(myOpenOrder) {
    const operation = `cancelOrder/${myOpenOrder.symbol}/${myOpenOrder.orderId}`;
    this.robotoApi.get(operation).subscribe(res => {
      console.log(operation, res);
    });
  }

  private createBalanceSocket() {
    this.myOpenOrderWebsocket = this.wsClient.connect(ENDPOINT_BALANCE, 1);
  }

  private loadMyOpenOrders() {
    this.myOpenOrders$ = this.myOpenOrderWebsocket.messages;
  }

}
