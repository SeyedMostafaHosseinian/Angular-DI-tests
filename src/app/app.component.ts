import {Component} from '@angular/core';
import {LoggerService} from "./logger.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _loggerService: LoggerService) {
    this._loggerService.log('app-component');
  }

  title = 'angular-playground';
}
