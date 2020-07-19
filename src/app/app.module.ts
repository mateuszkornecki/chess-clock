import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerIntervalComponent } from './timer-interval/timer-interval.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TimersSynchronizerComponent } from './timers-synchronizer/timers-synchronizer.component';
import { TimersSettingsComponent } from './timers-settings/timers-settings.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TimerDisplayComponent,
    TimerIntervalComponent,
    ProgressBarComponent,
    TimersSynchronizerComponent,
    TimersSettingsComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer }),
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
