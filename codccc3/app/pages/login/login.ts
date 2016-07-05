import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

  constructor(private navController: NavController) {
  }

  onLoginTouch(event) {
    this.navController.push(TabsPage);
  }
}
