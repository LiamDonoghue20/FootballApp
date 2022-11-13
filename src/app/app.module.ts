import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamInfoComponent } from './TeamInfo/team-info';
import { TeamSelectComponent } from './TeamSelect/team-select';
import { WebsiteFrameComponent } from './WebsiteFrame/website-frame';

@NgModule({
  declarations: [
    AppComponent,
    TeamSelectComponent,
    TeamInfoComponent,
    WebsiteFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
