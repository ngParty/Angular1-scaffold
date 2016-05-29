import { Component, OnInit, Input, Inject } from 'ng-metadata/core';
import { CrisisService, Crisis } from './crisis.service';
import { Router, CanReuse, OnActivate } from 'ng-metadata/router-deprecated';

@Component( {
  selector: 'crisis-list',
  template: `
    <ul>
       <li 
          ng-repeat="crisis in $ctrl.crises"
          ng-class="{ 'selected': $ctrl.isSelected(crisis) }"
          ng-click="$ctrl.onSelect(crisis)"
        >
          <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
  `
} )
export class CrisisListComponent implements OnInit, OnActivate, CanReuse {

  @Input('<') $router: Router;
  selectedId: number = null;
  crises: Crisis[];

  constructor( private crisisService: CrisisService ) { }

  ngOnInit() { }

  static $canActivate(
    @Inject( '$nextInstruction' ) $nextInstruction,
    @Inject( '$prevInstruction' ) $prevInstruction,
    @Inject( '$q' ) $q: ng.IQService,
    @Inject( '$timeout' ) $timeout: ng.ITimeoutService
  ): ng.IPromise<boolean> {
    const args = arguments;
    console.info( '$canActivate started!' );
    const promise = $q( ( resolve, reject ) => {
      $timeout( function () {
        resolve( true );
        console.info( '$canActivate with 500ms delay', args );
      }, 500 )
    } );
    return promise;
  }

  $routerCanReuse( next, prev ) {
    console.info( '$routerCanReuse', arguments );
    return true;
  }

  $routerOnActivate( next, prev ) {
    console.info( '$routerOnActivate', this, arguments );
    // Load up the crises for this view
    this.crisisService.getCrises().then( ( crises ) => {
      this.crises = crises;
      this.selectedId = next.params.id;
    } );
  }

  isSelected( crisis ): boolean {
    return (Number( crisis.id ) === this.selectedId);
  }

  onSelect( crisis ): void {
    this.$router.navigate( [ 'CrisisDetail', { id: crisis.id } ] );
  }

}
