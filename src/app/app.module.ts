import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoggerService} from "./logger.service";
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './parent1/child1/child1.component';
import { MultipleInstanceTestComponent } from './multiple-instance-test/multiple-instance-test.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent1Component,
    Child1Component,
    MultipleInstanceTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LoggerService, useClass: LoggerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
