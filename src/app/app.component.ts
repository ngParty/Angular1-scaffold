import * as angular from 'angular';
import { Component, OnInit, Inject, provide } from 'ng-metadata/core';
import { Directive } from 'ng-metadata/core';

import { Logger, LoggerToken } from './logger.service.ng2';

@Component({
  selector: 'my-app',
  styles: [ require( './app.scss' ) ],
  template: `
    <h1>Hello from {{$ctrl.planet}}!!!</h1>
    <button ng-click="$ctrl.whatPlanet()">log the planet</button>
    <app-login></app-login>
  `
})
export class AppComponent implements OnInit {

  planet = 'Pluto';
  constructor(
    @Inject( '$log' ) private _$log: ng.ILogService,
    // injecting downgraded ng2 provider
    @Inject(LoggerToken) private _log: Logger
  ) {}

  ngOnInit() {
    this._$log.log( 'hello from pluto during OnInit' );
  }

  whatPlanet() {
    this._log.info(`The planet: ${this.planet}`);
  }

}

// @TODO remove
@Directive( {
  selector: '[myDirective]'
} )
class MyDirective {
}

const Mod = angular.module( 'huhu', [] )
  .directive( ...provide(MyDirective) )
