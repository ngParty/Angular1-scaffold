import { Injectable } from '@angular/core';
import { OpaqueToken } from 'ng-metadata/core';

export const LoggerToken = new OpaqueToken('ng2.Logger');

Injectable()
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
