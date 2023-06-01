import {Component} from '@angular/core';
import {LoggerService} from "../logger.service";

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss'],
  providers: [LoggerService]
})
export class Parent1Component {

  constructor(private readonly _loggerService: LoggerService) {
    this._loggerService.log('parent1');
  }


}
