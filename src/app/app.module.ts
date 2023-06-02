import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './parent1/child1/child1.component';
import { MultipleInstanceTestComponent } from './multiple-instance-test/multiple-instance-test.component';
import { SelfComponent } from './self/self.component';
import { SkipSelfComponent } from './skip-self/skip-self.component';
import { HostComponent } from './host/host.component';
import { ViewProvidersComponent } from './view-providers/view-providers.component';
import { InspectorComponent } from './view-providers/inspector/inspector.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent1Component,
    Child1Component,
    MultipleInstanceTestComponent,
    SelfComponent,
    SkipSelfComponent,
    HostComponent,
    ViewProvidersComponent,
    InspectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
