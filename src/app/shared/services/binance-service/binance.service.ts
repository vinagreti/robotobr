import { Injectable } from '@angular/core';
import { WsClientService } from '@app/shared/services/ws-client/ws-client.service';
import { map } from 'rxjs/operators';
import { BinanceTradeEvent } from '@app/shared/models/binance-ws-models';

const BINANCE_WS_ENDPOINT = 'wss://stream.binance.com:9443/ws';

@Injectable()
export class BinanceService {

  constructor(
    private wsClient: WsClientService
  ) { }

  wsTrade(market, limit = 1) {
    const endpoint = `${BINANCE_WS_ENDPOINT}/${market.from}${market.to}@trade`;

    return this.wsClient.connect(endpoint.toLocaleLowerCase(), limit)
      .messages
      .pipe(
        map(trades => {
          return trades.map((trade) => {
            return new BinanceTradeEvent(trade);
          });
        })
      );

  }

}
