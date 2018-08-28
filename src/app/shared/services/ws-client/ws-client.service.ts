import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OpenConnection } from './ws-client.models';

@Injectable()
export class WsClientService {

  private connection: {
    [key: string]: OpenConnection
  } = {};

  private connecting: {
    [key: string]: boolean
  } = {};

  constructor() { }

  connect(url, limit = 10, mapFn = (item) => item) {

    const connection = this.connection[url];

    if (connection) {

      return connection;

    } else {

      return this.connectToWs(url, limit, mapFn);

    }

  }

  private connectToWs(url, limit, mapFn): OpenConnection {

    const connection = this.openConnection(url, limit, mapFn);

    this.connection[url] = connection;

    return connection;

  }


  private openConnection(url: string, limit, mapFn, connection?: OpenConnection, delay = 1e3): OpenConnection {

    this.connecting[url] = true;

    if (connection) {

      connection.channel = new WebSocket(url);

    } else {

      connection = connection ? connection : {
        channel: new WebSocket(url),
        messages: new BehaviorSubject<string[]>([]),
      };

    }

    connection.channel.onclose = () => {
      setTimeout(() => {
        console.log(`WS connection closed. Tryng to reconnect to ${url}`);
        this.openConnection(url, limit, mapFn, connection, 1e3)
      }, 2e3);
    };

    connection.channel.onmessage = (message) => {

      let currentMessages = connection.messages.getValue();

      const mappedData = mapFn(message.data);

      currentMessages.unshift(mappedData);

      if (limit) {

        currentMessages = currentMessages.slice(0, limit);

      }

      connection.messages.next(currentMessages);

    };

    this.connecting[url] = false;

    return connection;

  }

}
