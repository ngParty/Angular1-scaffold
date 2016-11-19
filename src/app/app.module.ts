import * as angular from 'angular';
import { NgModule, Directive, provide } from 'ng-metadata/core';

import { AppComponent } from './app.component';

import { upgradeAdapter } from './upgrade-adapter';
import { Logger, LoggerToken } from './logger.service.ng2';
import { LoginComponent } from './login.component.ng2';

@NgModule( {
  declarations: [
    AppComponent,
    upgradeAdapter.provideNg2Component(LoginComponent) as any
  ],
  providers: [
    upgradeAdapter.provideNg2Provider(LoggerToken, {useClass: Logger})
  ]
} )
export class AppModule {
}

@Directive({
  selector: '[hello]'
})
class HelloDirective {

}

const MyApp = angular.module( 'myApp', [] )
  .directive( ...provide( HelloDirective ) );
