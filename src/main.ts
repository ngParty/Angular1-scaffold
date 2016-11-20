import { UpgradeModule } from '@angular/upgrade/static/';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from 'ng-metadata/core';

import { Ng1AppModule } from './app/app.module';
import { AppModule } from './app/app.module.ng2';


if ( ENV === 'production' ) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(platformRef => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;

    upgrade.bootstrap(document.body, [Ng1AppModule.name], {strictDi: true});
});
