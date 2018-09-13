import { Component, OnInit } from '@angular/core';
import { WsClientService } from '@app/shared/services/ws-client/ws-client.service';
import { BinanceTradeEvent } from '@app/shared/models/binance-ws-models';

const BINANCE_WS_ENDPOINT = 'wss://stream.binance.com:9443/ws';

@Component({
  selector: 'app-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.scss']
})
export class OperationFormComponent implements OnInit {

  lastPrice;

  newOperation = {
    market: undefined,
    operatioType: undefined,
    bottomLimit: undefined,
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
    private wsClient: WsClientService,
  ) { }

  ngOnInit() {
  }

  connectToWebsocket() {
    if (this.newOperation.market) {
      const endpoint = `${BINANCE_WS_ENDPOINT}/${this.newOperation.market.from}${this.newOperation.market.to}@trade`;
      this.wsClient.connect(endpoint.toLocaleLowerCase(), 1, (trade) => {
        const tradeParsed = new BinanceTradeEvent(JSON.parse(trade));
        return tradeParsed.price;
      }).messages.subscribe((msg: any) => {
        this.lastPrice = msg[0];
      });
    }
  }

  get middlePrice() {

    if (this.newOperation.topLimit && this.newOperation.bottomLimit && (this.newOperation.topLimit > this.newOperation.bottomLimit)) {

      return this.newOperation.bottomLimit + ((this.newOperation.topLimit - this.newOperation.bottomLimit) / 2);

    } else {

      return undefined;

    }


  }

}
