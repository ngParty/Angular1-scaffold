import * as angular from 'angular';
import { provide } from 'ng-metadata/core';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisService } from './crisis.service';
import { CrisisDetailComponent } from './crisis-detail.component';

export const CrisisCenterModule = angular
  .module( 'crisisCenter', [] )
  .directive( ...provide( CrisisCenterComponent ) )
  .directive( ...provide( CrisisListComponent ) )
  .directive( ...provide( CrisisDetailComponent ) )
  .service( ...provide( CrisisService ) )
  .name;
