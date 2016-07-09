import {EventEmitter} from '@angular/core';
import * as io from 'socket.io-client';

const CCC3_PORT = 35769;

export interface SocketEventArgs {
  socket: CCC3Socket;
}

export class CCC3Socket {

  private socket: SocketIOClient.Socket;

  public connected = new EventEmitter<SocketEventArgs>();
  public disconnected = new EventEmitter<SocketEventArgs>();
  public error = new EventEmitter<SocketEventArgs>();

  private isConnected_: boolean = false;
  public get isConnected() {
    return this.isConnected_;
  }

  private nickname_: String;
  public get nickname() {
    return this.nickname_;
  }

  constructor(private username: String, private password: String) {

  }

  connect() {
    this.socket = io(`ws://localhost:${CCC3_PORT}`);
    this.socket.on('connect', () => {
      this.socket.emit('login', this.username, this.password);
    });
    this.socket.on('disconnect', () => {
      this.isConnected_ = false;
      this.disconnected.emit({ socket: this });
    });
    this.socket.on('error', () => {
      this.error.emit({ socket: this });
    });
    this.socket.on('logined', (nickname: String) => {
      this.nickname_ = nickname;
      this.isConnected_ = true;
      this.connected.emit({ socket: this });
    });
  }
}
