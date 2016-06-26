import { bootstrap } from 'ng-metadata/platform-browser-dynamic';
import { enableProdMode } from 'ng-metadata/core';

import { AppComponent } from './app';

if ( ENV === 'production' ) {
  enableProdMode();
}

bootstrap( AppComponent, [] );
