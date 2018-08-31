import { Component, OnInit, Input } from '@angular/core';
import { WsClientService } from '@app/shared/services/ws-client/ws-client.service';
import { environment } from '@env/environment';
import { OpenConnection } from './../../services/ws-client/ws-client.models';
import { map } from 'rxjs/operators';
import { BinanceBalance } from '@app/shared/models/binance-stream.models';

const ENDPOINT_BALANCE = `${environment.robotoWs}/balance`;
@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  balances$;

  balanceWebsocket: OpenConnection;

  displayedColumns: string[] = ['asset', 'total', 'free', 'locked'];

  @Input() assets: string[];

  constructor(
    private wsClient: WsClientService
  ) { }

  ngOnInit() {
    this.createBalanceSocket();
    this.loadBalance();
  }

  private createBalanceSocket() {
    this.balanceWebsocket = this.wsClient.connect(ENDPOINT_BALANCE);
  }

  private loadBalance() {
    this.balances$ = this.balanceWebsocket.messages.pipe(
      map((msgs: BinanceBalance[][]) => {
        const messages = msgs || [];

        let response;

        if (this.assets && this.assets.length) {
          response = this.extractCustomAssetsBalances(messages[0]);
        } else {
          response = this.extractPositiveBalances(messages[0]);
        }

        return response.sort((a, b) => {
          if (a.asset < b.asset) {
            return -1;
          }
          if (a.asset > b.asset) {
            return 1;
          }
          return 0;
        });
      })
    );
  }

  private extractPositiveBalances(balances: BinanceBalance[] = []) {
    return balances.map(balance => new BinanceBalance(balance))
      .filter((balance: BinanceBalance) => {
        return (balance.free + balance.locked) > 0;
      });
  }

  private extractCustomAssetsBalances(balances: BinanceBalance[] = []) {
    return balances.map(balance => new BinanceBalance(balance))
      .filter((balance: BinanceBalance) => {
        return this.assets.indexOf(balance.asset) > -1;
      });
  }

}
