import { Component } from 'ng-metadata/core';
import { HeroService } from './hero.service';

@Component( {
  selector: 'heroes',
  providers: [ HeroService ],
  template: `<h2>Heroes</h2><ng-outlet></ng-outlet>`,
  legacy: {
    $routeConfig: [
      { path: '/', name: 'HeroList', component: 'heroList', useAsDefault: true },
      { path: '/:id', name: 'HeroDetail', component: 'heroDetail' }
    ]
  }
} )
export class HeroesComponent {}
