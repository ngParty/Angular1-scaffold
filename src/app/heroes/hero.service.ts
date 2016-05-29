import { Injectable, Inject } from 'ng-metadata/core';

export class Hero {
  constructor(
    public id: number,
    public name: string
  ) {}
}

@Injectable()
export class HeroService {

  heroesPromise = this.$q.when( [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' }
  ] );

  constructor( @Inject( '$q' ) private $q: ng.IQService ) { }

  getHeroes() {
    return this.heroesPromise;
  }

  getHero( id: number ) {
    return this.heroesPromise.then( function ( heroes ) {
      for ( let i = 0; i < heroes.length; i++ ) {
        if ( heroes[ i ].id === Number( id ) ) return heroes[ i ];
      }
    } );
  }

}
