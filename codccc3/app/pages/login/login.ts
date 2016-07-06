import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {CCC3Socket} from '../../ccc3socket.ts';

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

  private btnLoginDisabled: boolean = false;

  constructor(private navController: NavController) {
  }

  btnLogin_onClick(event) {
    this.btnLoginDisabled = true;

    var socket = new CCC3Socket();
    socket.connected.subscribe(() => {
      this.navController.push(TabsPage, {
        socket: socket
      });
    });
    socket.connect();
  }
}
