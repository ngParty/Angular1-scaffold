import { Component, OnInit, Inject } from 'ng-metadata/core';
import { Directive } from 'ng-metadata/core';

import { Logger, LoggerToken } from './logger.service.ng2';
import { HeroesService } from './heroes/heroes.service';

@Component({
  selector: 'my-app',
  styles: [ require( './app.scss' ) ],
  template: `
    <h1>Hello from {{$ctrl.planet}}!!!</h1>
    <button ng-click="$ctrl.whatPlanet()">log the planet</button>
    <app-login
      who="Angular"
      [nick]="$ctrl.nickname"
      (logged)="$ctrl.onLogin($event)"
    ></app-login>
  `
})
export class AppComponent implements OnInit {

  planet = 'Pluto';
  nickname = 'BreakingChanges :troll';
  constructor(
    @Inject( '$log' ) private _$log: ng.ILogService,
    // injecting downgraded ng2 provider which is decorated also with ngMetadata @Injectable
    /*@Inject(LoggerToken) */private _log: Logger,
    private _heroesSvc: HeroesService
  ) {}

  ngOnInit() {
    this._$log.log( 'hello from pluto during OnInit' );
    this._log.log('heroes:', ...this._heroesSvc.get());
  }

  whatPlanet() {
    this._log.info(`The planet: ${this.planet}`);
  }

  onLogin($event: string) {
    this._log.info($event);
  }

}
