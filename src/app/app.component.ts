import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { ClockIntervalComponent } from './clock-interval/clock-interval.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  first;
  second;
  firstIsStarted = false;
  firstIsRunning = false;
  isAPaused = false;
  isBPaused = false;
  @ViewChild('A')
  counterA: ClockIntervalComponent;
  @ViewChild('B')
  counterB: ClockIntervalComponent;

  onClick(event) {
    if (!this.first) {
      this.first = event.target.id;
      this.second = this.first === 'A' ? 'B' : 'A';
    }
    this.toggle();
  }

  //TODO: Need to clean up toogle() method.
  toggle() {
    if (this.first === 'A') {
      if (!this.firstIsStarted) {
        this.counterA.toggle();
        this.firstIsRunning = true;
        this.firstIsStarted = true;
        this.isBPaused = true;
      } else {
        this.isAPaused = !this.isAPaused;
        this.isBPaused = !this.isBPaused;
        this.counterA.toggle();
        this.counterB.toggle();
        this.firstIsRunning = !this.firstIsRunning;
      }
    } else if (this.second === 'A') {
      if (!this.firstIsStarted) {
        this.counterB.toggle();
        this.firstIsRunning = true;
        this.firstIsStarted = true;
        this.isAPaused = true;
      } else {
        this.isAPaused = !this.isAPaused;
        this.isBPaused = !this.isBPaused;
        this.counterA.toggle();
        this.counterB.toggle();
        this.firstIsRunning = !this.firstIsRunning;
      }
    }
  }
}
