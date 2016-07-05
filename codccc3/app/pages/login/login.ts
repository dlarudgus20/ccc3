import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import * as io from 'socket.io-client';

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

  private btnLoginDisabled: boolean = false;

  constructor(private navController: NavController) {
  }

  btnLogin_onClick(event) {
    this.btnLoginDisabled = true;

    var socket = io("http://localhost:35769/");
    socket.on('connect', () => {

    });
    this.navController.push(TabsPage, {
      socket: socket
    });
  }
}
