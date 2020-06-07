import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock-interval',
  templateUrl: './clock-interval.component.html',
  styleUrls: ['./clock-interval.component.scss'],
})
export class ClockIntervalComponent {
  timeLeft = 5000;
  isRunning = false;
  elapsedTimeInMs = 0;
  interval;

  toggle(): void {
    this.isRunning = !this.isRunning;
  }

  onStart(): void {
    this.toggle();
    this.interval = setInterval(() => {
      this.elapsedTimeInMs += 10;
      this.timeLeft -= 10;
    }, 10);
  }

  onPause(): void {
    this.toggle();
    clearInterval(this.interval);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
