import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { ClockIntervalComponent } from './clock-interval/clock-interval.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ClockIntervalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
