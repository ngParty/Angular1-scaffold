import { Component, OnInit, Input } from 'ng-metadata/core';
import { HeroService, Hero } from './hero.service';
import { OnActivate, Router } from 'ng-metadata/router-deprecated';

@Component( {
  selector: 'hero-detail',
  template: `
    <div ng-if="$ctrl.hero">
      <h3>"{{$ctrl.hero.name}}"</h3>
      <div>
        <label>Id: </label>{{$ctrl.hero.id}}
      </div>
      <div>
        <label>Name: </label>
        <input ng-model="$ctrl.hero.name" placeholder="name">
      </div>
      <button ng-click="$ctrl.gotoHeroes()">Back</button>
    </div>
  `
} )
export class HeroDetailComponent implements OnInit, OnActivate {

  @Input( '<' ) $router: Router;
  hero: Hero = null;

  constructor( private heroService: HeroService ) { }

  $routerOnActivate( next ): void {
    // Get the hero identified by the route parameter
    const id = next.params.id;
    this.heroService.getHero( id ).then( ( hero ) => {
      this.hero = hero;
    } );
  }

  gotoHeroes() {
    const heroId = this.hero && this.hero.id;
    this.$router.navigate( [ 'HeroList', { id: heroId } ] );
  }

  ngOnInit() { }

}
