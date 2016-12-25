import { Component, OnInit, Inject } from 'ng-metadata/core';

@Component({
  selector: 'np-app',
  styles: [ require( './app.scss' ) ],
  template: `
    <h1>Hello from {{ $ctrl.planet }} !</h1>
  `
})
export class AppComponent implements OnInit {

  planet = 'Pluto';
  constructor( @Inject( '$log' ) private _$log: ng.ILogService ) {}

  ngOnInit() {
    this._$log.log( 'hello from pluto during OnInit' );
  }

}
