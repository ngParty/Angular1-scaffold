import { bootstrap } from 'ng-metadata/platform';
import { enableProdMode } from 'ng-metadata/core';

import { AppModule } from './app';

if ('production' === ENV) {
  enableProdMode();
}

bootstrap( AppModule );
