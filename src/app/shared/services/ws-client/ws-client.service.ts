import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OpenConnection } from './ws-client.models';
import { interval } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

interface WsMemoryMap<T> {
  [key: string]: T;
}

@Injectable()
export class WsClientService {

  private connection: WsMemoryMap<OpenConnection> = {};

  private connecting: WsMemoryMap<boolean> = {};

  constructor() { }

  connect(url, limit = 10) {

    const connection = this.connection[url];

    if (connection) {

      return connection;

    } else {

      return this.connectToWs(url, limit);

    }

  }

  private connectToWs(url, limit): OpenConnection {

    const connection = this.openConnection(url, limit);

    this.connection[url] = connection;

    return connection;

  }


  private openConnection(url: string, limit, connection?: OpenConnection, delay = 1e3): OpenConnection {

    const messagesStream = new BehaviorSubject<any>([]);

    const emissor: Observable<any[]> = interval(500).pipe(map(() => {
      return messagesStream.getValue();
    }), distinctUntilChanged());

    this.connecting[url] = true;

    if (connection) {
      connection.channel = new WebSocket(url);
    } else {
      connection = connection ? connection : {
        channel: new WebSocket(url),
        messages: emissor,
        url: url,
        limit: limit,
      };
    }

    connection.channel.onclose = () => {
      setTimeout(() => {
        console.log(`WS connection closed. Tryng to reconnect to ${url}`);
        this.openConnection(url, limit, connection, 1e3);
      }, 2e3);
    };

    connection.channel.onmessage = (message) => {
      let currentMessages = messagesStream.getValue();
      const mappedData = this.mapToJson(message.data);
      currentMessages.unshift(mappedData);
      if (limit) {
        currentMessages = currentMessages.slice(0, limit);
      }
      messagesStream.next(currentMessages);
    };
    this.connecting[url] = false;
    return connection;
  }

  private mapToJson = (data) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  }

}
