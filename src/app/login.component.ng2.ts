import { Component } from '@angular/core';

import { LoginService } from './login.service.ng2';

@Component({
  selector: 'app-login',
  template: `
    <p>
      <input name="username" type="text">
      <input name="password" type="password">
      <br>
      <button (click)="loginSvc.login()">Login</button>
      <button (click)="loginSvc.logout()">Logout</button>
    </p>
  `
})
export class LoginComponent {
  constructor(private loginSvc: LoginService) {}
}
