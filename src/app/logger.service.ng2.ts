import { Injectable } from '@angular/core';
import { OpaqueToken, Injectable as NgMetadataInjectable } from 'ng-metadata/core';

// this is not needed because we are decorating the service with ngMetadata @Injectable
export const LoggerToken = new OpaqueToken('ng2.Logger');

@NgMetadataInjectable()
@Injectable()
export class Logger {
  log(...args: any[]) {
    // tslint:disable
    console.log(args);
    // tslint:enable
  }
  info(...args: any[]) {
    console.info(args);
  }
}
