import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TimersSettingsComponent} from './timers-settings/timers-settings.component';
import {TimersSynchronizerComponent} from './timers-synchronizer/timers-synchronizer.component';

const routes: Routes = [
  {path: 'settings', component: TimersSettingsComponent},
  {path: 'game', component: TimersSynchronizerComponent},
  { path: '', redirectTo: '/settings', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
