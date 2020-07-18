import {Component, ViewChild} from '@angular/core';
import {TimerIntervalComponent} from '../timer-interval/timer-interval.component';


@Component({
  selector: 'app-timers-synchronizer',
  templateUrl: './timers-synchronizer.component.html',
  styleUrls: ['./timers-synchronizer.component.scss']
})
export class TimersSynchronizerComponent {
  first: 'A' | 'B';
  second: 'A' | 'B';
  paused: 'A' | 'B';
  running: 'A' | 'B';
  isStarted = false;
  @ViewChild('A')
  counterA: TimerIntervalComponent;
  @ViewChild('B')
  counterB: TimerIntervalComponent;

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
