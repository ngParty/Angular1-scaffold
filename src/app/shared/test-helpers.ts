import { getInjectableName, bundle } from 'ng-metadata/core';
import { kebabCase } from 'lodash';

interface Type extends Function {
    new (...args: any[]): any;
}

/**
 * helper for getting tested components
 * - this is just temporary and will be removed when it's part if ngMetadata
 */
export function queryByDirective<T extends Function>( host: ng.IAugmentedJQuery, Type: T ) {
  const ctrlName = getInjectableName( Type );
  const selector = kebabCase( ctrlName );
  const debugElement = host.find( selector );
  const componentInstance = debugElement.controller( ctrlName ) as T;

  return { debugElement, componentInstance };
}


export function createAngular1Module(NgMetadataModule: Type) {
  if (typeof NgMetadataModule !== 'function') {
    throw new Error(`
      [Angular module creation Error]
      You have to provide ngMetadata Module class with @NgModule decorator. You provided ${NgMetadataModule}
    `)
  }
  return bundle(NgMetadataModule).name
}
