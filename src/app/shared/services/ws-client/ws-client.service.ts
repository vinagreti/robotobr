import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OpenConnection } from './ws-client.models';

interface WsMemoryMap<T> {
  [key: string]: T;
}

const MAP_DATA_AS_JSON = (data) => {
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
};
@Injectable()
export class WsClientService {

  private connection: WsMemoryMap<OpenConnection> = {};

  private connecting: WsMemoryMap<boolean> = {};

  private releaseAndReconnectInterval;

  constructor() {
    // this.startGarbageCollector();
  }

  connect(url, limit = 10, mapFn?) {

    const connection = this.connection[url];

    if (connection) {

      return connection;

    } else {

      return this.connectToWs(url, limit, mapFn || MAP_DATA_AS_JSON);

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
        url: url,
        mapFn: mapFn,
        limit: limit,
      };

    }

    connection.channel.onclose = () => {
      setTimeout(() => {
        console.log(`WS connection closed. Tryng to reconnect to ${url}`);
        this.openConnection(url, limit, mapFn, connection, 1e3);
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

  private startGarbageCollector() {
    this.releaseAndReconnectInterval = setInterval(() => {
      const connections = Object.keys(this.connection).filter(key => {
        return this.connection[key] && this.connection[key].channel;
      }).map(key => {
        return this.connection[key];
      });
      this.releaseAndReconnect(connections);
    }, 10e3);
  }

  private releaseAndReconnect(connections = [], position = 0) {
    if (connections.length) {
      const connection = connections[position];
      const nextPosition = position + 1;

      connection.channel.close();

      if (connections[nextPosition]) {
        setTimeout(() => {
          this.releaseAndReconnect(connections, nextPosition);
        }, 1e3);
      }
    }
  }

  private stopGarbageCollector() {
    if (this.releaseAndReconnectInterval) {
      clearInterval(this.releaseAndReconnectInterval);
    }
  }

}
