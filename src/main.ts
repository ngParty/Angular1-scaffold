import { bootstrap } from 'ng-metadata/platform-browser-dynamic';
import { enableProdMode, getInjectableName } from 'ng-metadata/core';
import { ROUTER_PRIMARY_COMPONENT } from 'ng-metadata/router-deprecated';

import { AppComponent } from './app';

if ( ENV === 'production' ) {
  enableProdMode();
}

bootstrap( AppComponent, [
  'ngComponentRouter',
  { provide: ROUTER_PRIMARY_COMPONENT, useValue: getInjectableName( AppComponent ) }
] );
