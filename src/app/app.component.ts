import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ClockIntervalComponent } from './clock-interval/clock-interval.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  first: 'A' | 'B';
  second: 'A' | 'B';
  paused: 'A' | 'B';
  running: 'A' | 'B';
  isStarted = false;
  @ViewChild('A')
  counterA: ClockIntervalComponent;
  @ViewChild('B')
  counterB: ClockIntervalComponent;

  onClick(event) {
    if (!this.first) {
      this.first = event.path[4].id;
      this.second = this.first === 'A' ? 'B' : 'A';
    }
    this.toggle();
  }

  toggle() {
    const firstCounter = this.first === 'A' ? this.counterA : this.counterB;
    const secondCounter = this.first === 'A' ? this.counterB : this.counterA;

    if (!this.isStarted) {
      this.isStarted = true;
      this.running = this.first;
      this.paused = this.second;
      firstCounter.toggle();
    } else {
      this.running = this.running === 'A' ? 'B' : 'A';
      this.paused = this.running === 'B' ? 'A' : 'B';
      firstCounter.toggle();
      secondCounter.toggle();
    }
  }
}
