import * as angular from 'angular';
import { provide } from 'ng-metadata/core';

import { AppComponent } from './app.component.ts';

export const AppModule = angular.module( 'app', [] )
  .directive( ...provide( AppComponent ) );
