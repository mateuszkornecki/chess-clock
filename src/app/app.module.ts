import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerIntervalComponent } from './timer-interval/timer-interval.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TimersSynchronizerComponent } from './timers-synchronizer/timers-synchronizer.component';
import { TimersSettingsComponent } from './timers-settings/timers-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerDisplayComponent,
    TimerIntervalComponent,
    ProgressBarComponent,
    TimersSynchronizerComponent,
    TimersSettingsComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
