// we import angular type definition to support 'provide' ng-metadata function
/// <reference path="../node_modules/ng-metadata/manual_typings/angular-extension.d.ts" />

// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare const ENV: string;
interface GlobalEnvironment {
  ENV: typeof ENV
}
