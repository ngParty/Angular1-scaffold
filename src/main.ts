import { platformBrowserDynamic } from 'ng-metadata/platform-browser-dynamic';
import { enableProdMode } from 'ng-metadata/core';
import { AppModule } from './app';
import { upgradeAdapter } from './app/upgrade-adapter';

if ( ENV === 'production' ) {
  enableProdMode();
}


upgradeAdapter.bootstrap( AppModule );
