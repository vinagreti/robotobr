import { Component, OnInit, Input } from '@angular/core';
import { OpenConnection } from '@app/shared/services/ws-client/ws-client.models';
import { WsClientService } from '@app/shared/services/ws-client/ws-client.service';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';

const ENDPOINT_EXECUTION_REPORT = `${environment.robotoWs}/executionReport`;

@Component({
  selector: 'app-execution-report',
  templateUrl: './execution-report.component.html',
  styleUrls: ['./execution-report.component.scss']
})
export class ExecutionReportComponent implements OnInit {

  executionReport$;

  executionReportWebsocket: OpenConnection;

  displayedColumns: string[] = ['asset', 'total', 'free', 'locked'];

  @Input() assets: string[];

  constructor(
    private wsClient: WsClientService
  ) { }

  ngOnInit() {
    this.createExecutionReportSocket();
    this.loadExecutionReport();
  }

  private createExecutionReportSocket() {
    this.executionReportWebsocket = this.wsClient.connect(ENDPOINT_EXECUTION_REPORT);
  }

  private loadExecutionReport() {
    this.executionReport$ = this.executionReportWebsocket.messages.pipe(
      map((res = []) => res[0])
    );
  }

}
