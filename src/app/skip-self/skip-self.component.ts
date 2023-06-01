import {Component, OnInit, SkipSelf} from '@angular/core';
import {LoggerService} from "../logger.service";

@Component({
  selector: 'app-skip-self',
  templateUrl: './skip-self.component.html',
  styleUrls: ['./skip-self.component.scss'],
  providers: [LoggerService]
})
export class SkipSelfComponent {

  constructor(@SkipSelf() private _loggerService: LoggerService) {
    this._loggerService.log('skip-self-component');
  }
}
