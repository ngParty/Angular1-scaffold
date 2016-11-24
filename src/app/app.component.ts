import { Component, OnInit, Inject } from 'ng-metadata/core';

import * as appTemplate from './app.html';

@Component({
  selector: 'my-app',
  styles: [ require( './app.scss' ) ],
  template: appTemplate
})
export class AppComponent implements OnInit {

  constructor( @Inject( '$log' ) private _$log: ng.ILogService ) {}

  ngOnInit() {
    this._$log.log( 'hello from pluto during OnInit' );
  }

}
