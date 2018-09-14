import { Observable } from 'rxjs';

export interface OpenConnection {
  channel: WebSocket;
  messages: Observable<any[]>;
  url: string;
  limit: number;
}
