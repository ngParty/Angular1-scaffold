import { Injectable } from '@angular/core';

import { Logger } from './logger.service.ng2';

@Injectable()
export class LoginService {
  constructor(private log: Logger) {}
  login() {
    this.log.log('loggin attempt');
  }
  logout() {
    this.log.info('logout attempt');
  }
}
