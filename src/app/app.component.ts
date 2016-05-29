import { Component, OnInit, Inject } from 'ng-metadata/core';

@Component({
  selector: 'app',
  styles: [ require( './app.scss' ) ],
  template: `
    <h1>Hello from Pluto!!!</h1>
    <nav>
      <a ng-link="['CrisisCenter']">Crisis Center</a>
      <a ng-link="['Heroes']">Heroes</a>
    </nav>
    <ng-outlet></ng-outlet>
  `,
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
