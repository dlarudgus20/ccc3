import {EventEmitter} from '@angular/core';
import * as io from 'socket.io-client';

const CCC3_PORT = 35769;

export class CCC3Socket {

  private socket: SocketIOClient.Socket;

  public connected: EventEmitter<any>;

  connect() {
    this.socket = io(`ws://localhost:${CCC3_PORT}`);
    this.socket.on('connect', () => {
      this.connected.emit(null);
    });
    this.socket.on('disconnect', () => {
      // TODO
    });
    this.socket.on('error', () => {
      // TODO
    });
  }
}
