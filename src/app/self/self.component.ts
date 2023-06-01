import {Component, Self} from '@angular/core';
import {LoggerService} from "../logger.service";

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.scss'],
  // for test, comment following line
   providers: [LoggerService]
})
export class SelfComponent {
  constructor(@Self() private readonly _loggerService: LoggerService) {
    this._loggerService.log('self-component');
  }
}
