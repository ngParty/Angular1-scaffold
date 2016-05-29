import * as angular from 'angular';
import { provide } from 'ng-metadata/core';
import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

export const HeroesModule = angular
  .module( 'heroes', [] )
  .directive( ...provide( HeroesComponent ) )
  .directive( ...provide( HeroListComponent ) )
  .directive( ...provide( HeroDetailComponent ) )
  .service( ...provide( HeroService ) )
  .name;
