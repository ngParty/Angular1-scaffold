import { Injectable, Inject } from 'ng-metadata/core';

export class Crisis {
  constructor( public id: number, public name: string ) {}
}

@Injectable()
export class CrisisService {

  crisesPromise = this.$q.resolve( [
    { id: 1, name: 'Princess Held Captive' },
    { id: 2, name: 'Dragon Burning Cities' },
    { id: 3, name: 'Giant Asteroid Heading For Earth' },
    { id: 4, name: 'Release Deadline Looms' }
  ] );

  constructor( @Inject( '$q' ) private $q: ng.IQService ) { }

  getCrises(): ng.IPromise<Crisis[]> {
    return this.crisesPromise;
  }

  getCrisis( id: number ): ng.IPromise<Crisis> {
    return this.crisesPromise.then( ( crises ) => {
      for ( let i = 0; i < crises.length; i++ ) {
        if ( crises[ i ].id === Number( id ) ) { return crises[ i ] }
      }
    } );
  }

}
