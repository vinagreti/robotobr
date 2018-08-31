import { BehaviorSubject } from 'rxjs';

export interface OpenConnection {
  channel: WebSocket;
  messages: BehaviorSubject<any[]>;
  url: string;
  mapFn: Function;
  limit: number;
}
