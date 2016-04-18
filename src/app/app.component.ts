import { Component, OnInit, Inject } from 'ng-metadata/core';
import './app.scss';

@Component({
  selector: `app`,
  template: `
    <h1>Hello from Pluto!!!</h1>
  `
})
export class AppComponent implements OnInit {

  constructor( @Inject( '$log' ) private _$log: ng.ILogService ) {}

  ngOnInit() {
    this._$log.log( 'hello from pluto during OnInit' );
  }

}
