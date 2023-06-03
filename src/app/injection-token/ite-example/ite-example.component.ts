import {Component, Inject} from '@angular/core';
import {LOGGER_SERVICE_TOKEN} from "./injection-tokens";
import {LoggerService} from "../../logger.service";

@Component({
  selector: 'app-ite-example',
  templateUrl: './ite-example.component.html',
  styleUrls: ['./ite-example.component.scss'],
  providers: [{provide: LOGGER_SERVICE_TOKEN, useClass: LoggerService}]
})
export class IteExampleComponent {

  constructor(@Inject(LOGGER_SERVICE_TOKEN) private _loggerService: LoggerService) {
    _loggerService.log('ite-example-component');
  }
}
