import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WsClientService } from '@app/shared/services/ws-client/ws-client.service';
import { environment } from '@env/environment';
import { OpenConnection } from './../../services/ws-client/ws-client.models';
import { map } from 'rxjs/operators';
import { AssetBalance } from '@app/shared/models/binance-stream.models';

const ENDPOINT_BALANCE = `${environment.robotoWs}/balance`;

export interface BalanceSelectionEvent {
  asset: string;
  value: number;
}

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  balances$;

  balanceWebsocket: OpenConnection;

  displayedColumns: string[] = ['asset', 'free', 'locked', 'total'];

  @Input() assets: string[];

  @Output() balanceSelected = new EventEmitter<BalanceSelectionEvent>();

  constructor(
    private wsClient: WsClientService
  ) { }

  ngOnInit() {
    this.createBalanceSocket();
    this.loadBalance();
  }

  getTotal(balance) {
    return parseFloat(balance.free) + parseFloat(balance.locked);
  }

  emitBalanceSelected(balance: AssetBalance) {
    const event: BalanceSelectionEvent = {
      asset: balance.asset,
      value: parseFloat(balance.free)
    };
    this.balanceSelected.emit(event);
  }

  private createBalanceSocket() {
    this.balanceWebsocket = this.wsClient.connect(ENDPOINT_BALANCE);
  }

  private loadBalance() {
    this.balances$ = this.balanceWebsocket.messages.pipe(
      map((msgs: AssetBalance[][]) => {

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

  private extractPositiveBalances(balances: AssetBalance[] = []) {
    return balances.filter((balance: AssetBalance) => {
      return this.getTotal(balance) > 0;
    });
  }

  private extractCustomAssetsBalances(balances: AssetBalance[] = []) {
    return balances.filter((balance: AssetBalance) => {
      return this.assets.indexOf(balance.asset) > -1;
    });
  }

}
