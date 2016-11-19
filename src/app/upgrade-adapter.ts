import { Component } from 'ng-metadata/core';
import { NgMetadataUpgradeAdapter } from 'ng-metadata/upgrade'

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { UpgradeAdapter } from '@angular/upgrade'

import { LoginComponent } from './login.component.ng2';
import { LoginService } from './login.service.ng2';
import { Logger } from './logger.service.ng2';

// Angular 2 NgModule (not ng-metadata NgModule)
@NgModule( {
  imports: [ BrowserModule ], // required Angular 2 BrowserModule,
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService,
    Logger
  ]
} )
class UpgradeModule {
}

const instantiatedAdapter = new UpgradeAdapter( UpgradeModule );

// Export the "supercharged" ng-metadata upgradeAdapter singleton
export const upgradeAdapter = new NgMetadataUpgradeAdapter( instantiatedAdapter );
