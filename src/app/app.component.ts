import { Component, OnInit, Inject } from 'ng-metadata/core';
import styles from './app.component.scss';

@Component({
  selector: 'np-app',
  styles: [ styles ],
  template: `
    <h1>Hello from {{ $ctrl.planet }} !</h1>
    <nav>
      <a ui-sref="home" ui-sref-active="active">Home</a>
      <a ui-sref="about" ui-sref-active="active">About</a>
      <a ui-sref="people" ui-sref-active="active">People</a>
    </nav>
    <main>
      <ui-view></ui-view>
    </main>
  `
})
export class AppComponent implements OnInit {

  planet = 'Pluto';
  constructor( @Inject( '$log' ) private _$log: ng.ILogService ) {}

  ngOnInit() {
    this._$log.log( 'hello from pluto during OnInit' );
  }

}
