import { Component, Input, OnInit } from 'ng-metadata/core';
import { RootRouter, Router, OnActivate, CanDeactivate, ComponentInstruction } from 'ng-metadata/router-deprecated';
import { CrisisService, Crisis } from './crisis.service';
import { DialogService } from '../shared/dialog.service';

type RouteParams = {
  [key: string]: string;
  id: string;
}

@Component( {
  selector: 'crisis-detail',
  template: `
    <div ng-if="$ctrl.crisis">
      <h3>"{{$ctrl.editName}}"</h3>
      <div>
        <label>Id: </label>{{$ctrl.crisis.id}}</div>
      <div>
        <label>Name: </label>
        <input ng-model="$ctrl.editName" placeholder="name"/>
      </div>
      <button ng-click="$ctrl.save()">Save</button>
      <button ng-click="$ctrl.cancel()">Cancel</button>
    </div>
  `
} )
export class CrisisDetailComponent implements OnInit, OnActivate, CanDeactivate {

  @Input( '<' ) $router: Router;
  editName: string;
  crisis: Crisis;

  constructor(
    private crisisService: CrisisService,
    private dialogService: DialogService,
    // you can Inject just rootRouter with Angular 1
    private rootRouter: RootRouter
  ) {}

  ngOnInit() {}

  $routerOnActivate( next: ComponentInstruction ) {

    const routeParams = next.params as RouteParams;
    // Get the crisis identified by the route parameter
    const id = Number( routeParams.id );
    this.crisisService.getCrisis( id ).then( ( crisis ) => {
      if ( crisis ) {
        this.editName = crisis.name;
        this.crisis = crisis;
      } else { // id not found
        this.gotoCrises();
      }
    } );
  }

  $routerCanDeactivate( next, prev ): boolean|ng.IPromise<boolean> {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
    if ( !this.crisis || this.crisis.name === this.editName ) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm( 'Discard changes?' );
  }

  cancel() {
    this.editName = this.crisis.name;
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises() {
    const crisisId = this.crisis && this.crisis.id;
    // Pass along the hero id if available
    // so that the CrisisListComponent can select that hero.
    this.$router.navigate( [ 'CrisisList', { id: crisisId } ] );
  }

}
