import { Component, OnInit, Inject, Input, Output, EventEmitter, HostBinding } from '@angular/core';

import { LoginService } from './login.service.ng2';
import { HeroesService } from './heroes/heroes.service';

@Component({
  selector: 'app-login',
  template: `
    <p>
      <input name="name" type="text" [value]="name">
      <input name="nickname" type="text" [value]="nick">
      <input name="password" type="password" [value]="pwd" (input)="pwd=$event.target.value">
      <br>
      <button (click)="handleLogin()">Login</button>
      <button (click)="loginSvc.logout()">Logout</button>
    </p>
  `
})
export class LoginComponent implements OnInit {
  @Input('who') name = 'Martin';
  @Input() nick = 'Hotell';
  @Output() logged = new EventEmitter();
  @HostBinding('attr.role') role = 'widget';
  pwd: string = '';
  uppercase: (val: string) => string;
  constructor(
    private loginSvc: LoginService,
    private heroesSvc: HeroesService,
    @Inject('$filter') private $filter: angular.IFilterService
  ) {}
  ngOnInit() {
    console.log(this.heroesSvc.get());
    console.log(this.$filter);
    this.uppercase = this.$filter('uppercase');
    console.log('hello to:', this.uppercase('hello'));
  }
  handleLogin() {
    this.loginSvc.login();
    this.logged.emit(`loggin emitted with credentials: name:${this.name}, nick:${this.nick}, pwd:${this.pwd}`);
  }
}
