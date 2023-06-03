import {Component, Host} from '@angular/core';
import {LoggerService} from "../../logger.service";

@Component({
  selector: 'app-host-child',
  templateUrl: './host-child.component.html',
  styleUrls: ['./host-child.component.scss'],
})
export class HostChildComponent {

  constructor(@Host() private readonly _loggerService: LoggerService) {
    this._loggerService.log('host-child-component');
  }
}
