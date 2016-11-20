// import * as angular from 'angular';
import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static/';
import { provideNg2Component, provideNg2Injectable } from 'ng-metadata/upgrade'
import { NgModule, Directive, provide, getInjectableName, bundle } from 'ng-metadata/core';

import { AppComponent } from './app.component';

import { Logger, LoggerToken } from './logger.service.ng2';
import { LoginComponent } from './login.component.ng2';

import { HeroesService } from './heroes/heroes.service';

console.log(getInjectableName(LoginComponent), downgradeComponent({component: LoginComponent}));
try {
  console.log(getInjectableName(Logger))
} catch (error) {
  console.warn('Logger is not decorated with ngMetadata @Injectable')
}
console.log(getInjectableName(LoggerToken), downgradeInjectable(Logger), (downgradeInjectable(Logger) as any).$inject);

@NgModule( {
  declarations: [
    AppComponent,
    provideNg2Component({component: LoginComponent, downgradeFn: downgradeComponent}),
  ],
  providers: [
    HeroesService,
    provideNg2Injectable({injectable: Logger, downgradeFn: downgradeInjectable}),
    // provideNg2Injectable({token: LoggerToken, injectable: Logger, downgradeFn: downgradeInjectable}),
  ]
} )
class AppModule {
}

export const Ng1AppModule = bundle(AppModule);


// @Directive({
//   selector: '[hello]'
// })
// class HelloDirective {

// }

// const MyApp = angular.module( 'myApp', [] )
  // .directive( ...provide( HelloDirective ) );
