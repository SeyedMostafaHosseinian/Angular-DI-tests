import {Component} from '@angular/core';
import {LoggerService} from "../../logger.service";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {

  constructor(private readonly _loggerService: LoggerService) {
    this._loggerService.log('child1');
  }
}
