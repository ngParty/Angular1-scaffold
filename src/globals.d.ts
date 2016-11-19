// @FIXME remove this line when https://github.com/ngParty/ng-metadata/issues/175 is resolved
/// <reference path="../node_modules/ng-metadata/manual_typings/globals.d.ts" />

// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare const ENV: string;
interface GlobalEnvironment {
  ENV: typeof ENV
}
