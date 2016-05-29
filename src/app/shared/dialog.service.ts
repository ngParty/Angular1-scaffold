import { Injectable, Inject } from 'ng-metadata/core';

@Injectable()
export class DialogService {

  constructor( @Inject( '$q' ) private $q: ng.IQService ) { }

  confirm( message: string ): ng.IPromise<boolean> {
    return this.$q.resolve( window.confirm( message || 'Is it OK?' ) );
  };

}
