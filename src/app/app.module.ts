import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamInfoComponent } from './TeamInfo/team-info';
import { TeamSelectComponent } from './TeamSelect/team-select';

@NgModule({
  declarations: [
    AppComponent,
    TeamSelectComponent,
    TeamInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
