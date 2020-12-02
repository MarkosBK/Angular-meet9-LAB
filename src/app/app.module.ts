import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SevenWondersComponent } from './seven-wonders/seven-wonders.component';
import { WondersServise } from './WondersServise';

@NgModule({
  declarations: [
    AppComponent,
    SevenWondersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WondersServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
