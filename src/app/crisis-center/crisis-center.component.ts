import { Component } from 'ng-metadata/core';

import { CrisisService } from './crisis.service';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent } from './crisis-list.component';

@Component( {
  selector: 'crisis-center',
  viewProviders: [ CrisisService ],
  directives: [ CrisisListComponent, CrisisDetailComponent ],
  template: `<h2>Crisis Center</h2><ng-outlet></ng-outlet>`,
  legacy: {
    $routeConfig: [
      { path: '/', name: 'CrisisList', component: 'crisisList', useAsDefault: true },
      { path: '/:id', name: 'CrisisDetail', component: 'crisisDetail' }
    ]
  }
} )
export class CrisisCenterComponent {}
