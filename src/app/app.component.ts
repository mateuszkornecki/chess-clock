import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { ClockIntervalComponent }  from './clock-interval/clock-interval.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ClockIntervalComponent) 
  clockInterval: ClockIntervalComponent;

  start() {
    this.clockInterval.start();
  }

  pause() {
    this.clockInterval.pause();
  }

  unPause() {
    this.clockInterval.unPause();
  }

}
