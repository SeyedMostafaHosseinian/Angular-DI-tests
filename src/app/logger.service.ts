import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() {
  }

  log(mes: string): void {
    console.log(mes);
  }
}
