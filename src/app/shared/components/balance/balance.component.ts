import { Component, OnInit } from '@angular/core';
import { WsClientService } from '@app/shared/services/ws-client/ws-client.service';
import { environment } from '@env/environment';
import { OpenConnection } from './../../services/ws-client/ws-client.models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  balances$;

  balanceWebsocket: OpenConnection;

  constructor(
    private wsClient: WsClientService
  ) { }

  ngOnInit() {

    const endpoint = `${environment.robotoWs}/balancedd`

    this.balanceWebsocket = this.wsClient.connect(endpoint);

    this.balances$ = this.balanceWebsocket.messages.pipe(
      map(msgs => {
        return msgs ? msgs[0] : undefined;
      })
    );

  }

}
