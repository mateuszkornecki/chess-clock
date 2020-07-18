import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerIntervalComponent } from './timer-interval/timer-interval.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TimersSynchronizerComponent } from './timers-synchronizer/timers-synchronizer.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerDisplayComponent,
    TimerIntervalComponent,
    ProgressBarComponent,
    TimersSynchronizerComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
