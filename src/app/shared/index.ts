import * as angular from 'angular';
import { provide } from 'ng-metadata/core';
import { DialogService } from './dialog.service';

export const SharedModule = angular
  .module( 'shared', [] )
  .service( ...provide( DialogService ) )
  .name;
