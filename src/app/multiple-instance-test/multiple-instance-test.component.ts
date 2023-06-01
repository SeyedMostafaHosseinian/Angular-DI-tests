import {Component} from '@angular/core';
import {LoggerService} from "../logger.service";

@Component({
  selector: 'app-multiple-instance-test',
  templateUrl: './multiple-instance-test.component.html',
  styleUrls: ['./multiple-instance-test.component.scss'],
  //
  // providers: [LoggerService]
})
export class MultipleInstanceTestComponent {

  constructor(private _loggerService: LoggerService) {
    this._loggerService.log('multiple-test-component' + Math.random());
  }
}
