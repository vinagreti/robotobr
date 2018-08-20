import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OpenConnection } from './ws-client.models';

@Injectable()
export class WsClientService {

  private connection: {
    [key: string]: OpenConnection
  } = {};

  constructor() { }

  connect(url, limit = 10) {

    const connection = this.connection[url];

    if (connection) {

      return connection;

    } else {

      return this.connectToWs(url, limit);

    }

  }

  private connectToWs(url, limit = 10): OpenConnection {

    const connection = this.openConnection(url, undefined, limit);

    this.connection[url] = connection;

    return connection;

  }


  private openConnection(url: string, connection?: OpenConnection, limit = 10): OpenConnection {

    if (connection) {

      connection.channel = new WebSocket(url);

    } else {

      connection = connection ? connection : {
        channel: new WebSocket(url),
        messages: new BehaviorSubject<string[]>([]),
      };

    }

    connection.channel.onclose = () => this.openConnection(url, connection, limit);

    connection.channel.onerror = () => this.openConnection(url, connection, limit);

    connection.channel.onmessage = (a) => {

      let currentMessages = connection.messages.getValue();

      currentMessages.unshift(a.data);

      if (limit) {

        currentMessages = currentMessages.slice(0, limit);

      }

      connection.messages.next(currentMessages);

    };

    return connection;

  }

}
