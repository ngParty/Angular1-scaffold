import * as angular from 'angular';
import { provide, getInjectableName } from 'ng-metadata/core';
import { ROUTER_PRIMARY_COMPONENT } from 'ng-metadata/router-deprecated';

const ngComponentRouter = 'ngComponentRouter';

import { AppComponent } from './app.component.ts';
import { HeroesModule } from './heroes/index';
import { CrisisCenterModule } from './crisis-center/index';
import { SharedModule } from './shared/index';

export const AppModule = angular.module( 'app', [
  ngComponentRouter,
  SharedModule,
  HeroesModule,
  CrisisCenterModule
] )
  .value( ...provide( ROUTER_PRIMARY_COMPONENT, { useValue: getInjectableName( AppComponent ) } ) )
  .directive( ...provide( AppComponent ) )
  .name;
