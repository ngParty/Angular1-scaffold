import { Component, OnInit } from 'ng-metadata/core';
import { HeroService, Hero } from './hero.service';

@Component( {
  selector: 'hero-list',
  template: `
    <div 
      ng-repeat="hero in $ctrl.heroes"
      ng-class="{ 'selected': $ctrl.isSelected(hero) }"
    >
      <a ng-link="['HeroDetail', {id: hero.id}]">{{hero.name}}</a>
    </div>
  `
} )
export class HeroListComponent implements OnInit {

  private selectedId = null;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() { }

  $routerOnActivate( next ): void {
    // Load up the heroes for this view
    this.heroService.getHeroes().then( ( heroes ) => {
      this.heroes = heroes;
      this.selectedId = next.params.id;
    } );
  }

  isSelected( hero: Hero ): boolean {
    return (hero.id === Number( this.selectedId ));
  }

}
