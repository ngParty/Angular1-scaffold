import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static/';
import { provide, getInjectableName } from 'ng-metadata/core';
import { upgradeInjectable } from 'ng-metadata/upgrade';

import { Logger } from './logger.service.ng2';
import { LoginService } from './login.service.ng2';
import { LoginComponent } from './login.component.ng2';

import { HeroesService } from './heroes/heroes.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService,
    Logger,
    upgradeInjectable(HeroesService),
    upgradeInjectable('$filter'),
  ],
  entryComponents: [
    LoginComponent
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}
