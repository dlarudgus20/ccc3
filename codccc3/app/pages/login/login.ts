import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {CCC3Socket} from '../../ccc3socket.ts';

const RETRY_TIMEOUT = 5000;

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

  private btnLogin_Disabled: boolean = false;

  constructor(private navController_: NavController) {
  }

  btnLogin_onClick(event) {
    this.btnLogin_Disabled = true;

    let username = (<HTMLInputElement>document.getElementById("inputUsername")).value;
    let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;

    if (username === '' || password === '')
      return;

    let socket = new CCC3Socket(username, password);
    socket.connected.subscribe(() => {
      this.navController_.push(TabsPage, {
        socket: socket
      });
    });
    socket.disconnected.subscribe(() => {
      setTimeout(() => {
        socket.connect(); // retry
      }, RETRY_TIMEOUT);
    });
    socket.error.subscribe(() => {
      setTimeout(() => {
        socket.connect(); // retry
      }, RETRY_TIMEOUT);
    });
    socket.connect();
  }
}
