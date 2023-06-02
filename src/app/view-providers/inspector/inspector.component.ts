import { Component, Host, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/logger.service';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent {

  constructor(public loggerService: LoggerService) {
    loggerService.log('inspector-component' + Math.random() * 100)
  }
}
