import {AfterViewInit, Component} from '@angular/core';
import {LoggerService} from "./logger.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggerService]
})
export class AppComponent {
  constructor(public loggerService: LoggerService) {
    this.loggerService.log('app-component');
  }
}
