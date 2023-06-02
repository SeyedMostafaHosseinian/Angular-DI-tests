import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-view-providers',
  templateUrl: './view-providers.component.html',
  styleUrls: ['./view-providers.component.scss'],
  
  /**
   * for tasting, 
   * play by two lines which in follow.
   * and comment on of them 
   * and check instanceID in inspector component
   * in diffrent places 
   **/
  viewProviders: [LoggerService],
  // providers: [LoggerService],
})
export class ViewProvidersComponent {

  constructor(public loggerService: LoggerService) {
    loggerService.log('view-providers-component')
  }
}