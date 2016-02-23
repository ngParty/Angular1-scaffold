import * as angular from 'angular';
import { provide } from 'ng-metadata/core';

import { AppComponent } from './app.component.ts';

const ngModule = angular.module( 'app', [] )
  .directive( ...provide( AppComponent ) );

export const AppModule = ngModule;
