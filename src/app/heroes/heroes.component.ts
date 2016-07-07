import { Component } from 'ng-metadata/core';
import { HeroService } from './hero.service';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

@Component( {
  selector: 'heroes',
  template: `<h2>Heroes</h2><ng-outlet></ng-outlet>`,
  directives: [ HeroListComponent, HeroDetailComponent ],
  viewProviders: [ HeroService ],
  legacy: {
    $routeConfig: [
      { path: '/', name: 'HeroList', component: 'heroList', useAsDefault: true },
      { path: '/:id', name: 'HeroDetail', component: 'heroDetail' }
    ]
  }
} )
export class HeroesComponent {}
