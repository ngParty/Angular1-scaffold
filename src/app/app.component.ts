import { Component, OnInit, Inject } from 'ng-metadata/core';
import { SharedProviders } from './shared/index';
import { HeroesComponent } from './heroes/heroes.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';

@Component({
  selector: 'my-app',
  styles: [ require( './app.scss' ) ],
  template: `
    <h1>Hello from Pluto!!!</h1>
    <nav>
      <a ng-link="['CrisisCenter']">Crisis Center</a>
      <a ng-link="['Heroes']">Heroes</a>
    </nav>
    <ng-outlet></ng-outlet>
  `,
  directives: [ HeroesComponent, CrisisCenterComponent ],
  providers: [ SharedProviders ],
  legacy: {
    $routeConfig: [
      { path: '/crisis-center/...', name: 'CrisisCenter', component: 'crisisCenter', useAsDefault: true },
      { path: '/heroes/...', name: 'Heroes', component: 'heroes' }
    ]
  }
})
export class AppComponent implements OnInit {

  constructor( @Inject( '$log' ) private _$log: ng.ILogService ) {}

  ngOnInit() {
    this._$log.log( 'hello from pluto during OnInit' );
  }

}
