import { AppModule } from './index';
import { IRender, renderFactory } from 'ng-metadata/testing';
import { AppComponent } from './app.component';

describe( `AppComponent`, () => {

  let render: IRender;

  beforeEach( angular.mock.module( AppModule ) );

  beforeEach( angular.mock.inject( ( $injector: ng.auto.IInjectorService ) => {

    const $compile = $injector.get<ng.ICompileService>( '$compile' );
    const $rootScope = $injector.get<ng.IRootScopeService>( '$rootScope' );
    const $scope = $rootScope.$new();

    render = renderFactory( $compile, $scope );

  } ) );

  it( `should render Hello Pluto!!!`, () => {

    const { ctrl, compiledElement } = render( AppComponent );

    expect( ctrl instanceof AppComponent ).toBe( true );
    expect( compiledElement.text() ).toContain( 'Hello from Pluto!!!' );

  } );

} );
