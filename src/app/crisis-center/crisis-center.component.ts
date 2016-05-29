import { Component } from 'ng-metadata/core';
import { CrisisService } from './crisis.service';

@Component( {
  selector: 'crisis-center',
  providers: [ CrisisService ],
  template: `<h2>Crisis Center</h2><ng-outlet></ng-outlet>`,
  legacy: {
    $routeConfig: [
      { path: '/', name: 'CrisisList', component: 'crisisList', useAsDefault: true },
      { path: '/:id', name: 'CrisisDetail', component: 'crisisDetail' }
    ]
  }
} )
export class CrisisCenterComponent {}
