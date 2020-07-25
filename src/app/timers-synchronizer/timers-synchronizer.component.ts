import { Component, ViewChild } from '@angular/core';
import { TimerIntervalComponent } from '../timer-interval/timer-interval.component';
import { reset } from '../counter.actions';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timers-synchronizer',
  templateUrl: './timers-synchronizer.component.html',
  styleUrls: ['./timers-synchronizer.component.scss'],
})
export class TimersSynchronizerComponent {
  first: 'A' | 'B';
  second: 'A' | 'B';
  paused: 'A' | 'B';
  running: 'A' | 'B';
  isStarted = false;
  isFinished: boolean;
  isGloballyPaused = false;
  timeToCount: number;
  @ViewChild('A')
  counterA: TimerIntervalComponent;
  @ViewChild('B')
  counterB: TimerIntervalComponent;

  constructor(private store: Store<{ count: number }>) {
    this.store
      .pipe(select('count'))
      .subscribe((curr) => (this.timeToCount = curr * 60 * 1000));
  }

  public handleGlobalPause() {
    if (this.isStarted) {
      this.isGloballyPaused = !this.isGloballyPaused;
      console.log(this.isGloballyPaused);
      const runningComponent =
        this.running === 'A' ? this.counterA : this.counterB;
      runningComponent.toggle();
    }
  }

  handleReset() {
    this.isStarted = false;
    this.isFinished = false;
    this.isGloballyPaused = false;
    this.running = null;
    this.paused = null;
    this.first = null;
    this.second = null;
    this.store.dispatch(reset());
    this.counterA.reset();
    this.counterB.reset();
  }

  handleClick(event) {
    if (!this.first) {
      this.first = event.path[4].id;
      this.second = this.first === 'A' ? 'B' : 'A';
    }
    this.toggle();
  }

  handleFinish(event) {
    if (event) {
      this.isFinished = true;
    }
  }

  toggle() {
    const firstCounter = this.first === 'A' ? this.counterA : this.counterB;
    const secondCounter = this.first === 'A' ? this.counterB : this.counterA;

    if (!this.isStarted && !this.isGloballyPaused) {
      this.isStarted = true;
      this.running = this.first;
      this.paused = this.second;
      firstCounter.toggle();
    } else if (!this.isGloballyPaused) {
      this.running = this.running === 'A' ? 'B' : 'A';
      this.paused = this.running === 'B' ? 'A' : 'B';
      firstCounter.toggle();
      secondCounter.toggle();
    }
  }
}
