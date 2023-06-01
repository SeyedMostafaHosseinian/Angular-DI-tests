import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {
  instanceID!: number;
  consumers: string[] = [];

  constructor() {
    this.instanceID = Math.random() * 100;
  }

  log(consumer: string): void {
    this.consumers.push(consumer);
    console.log(`from logger service:\n\ninstanceID: ${this.instanceID}\n\nconsumers:`, this.consumers, `\n\ncurrent consumer: ${consumer}\n\n;)`);
  }
}
