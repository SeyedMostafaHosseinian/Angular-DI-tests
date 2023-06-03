import {Component} from '@angular/core';
import {LoggerService} from "../logger.service";

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
  /**
   * for test, comment one of them
   * if viewProviders was commented, you will get null injection error
   */
  // providers: [LoggerService],
  viewProviders: [LoggerService],
})
export class HostComponent {

  constructor(private readonly _loggerService: LoggerService) {
    this._loggerService.log('host-component');
  }
}
