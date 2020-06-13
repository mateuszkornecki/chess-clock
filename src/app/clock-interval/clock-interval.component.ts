import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock-interval',
  templateUrl: './clock-interval.component.html',
  styleUrls: ['./clock-interval.component.scss'],
})
export class ClockIntervalComponent {
  timeLeft = 5000;
  isRunning = false;
  isStarted = false;
  interval;
  timeToCount = 5000;
  startTime;
  actualTime;
  finishTime;
  collapsedTime = 0;

  toggle(): void {
    this.isRunning = !this.isRunning;
  }

  onStart(): void {
    this.toggle();
    this.startTime = this.actualTime = Date.now();
    if (!this.isStarted) {
      this.isStarted = true;
      this.finishTime = this.startTime + this.timeToCount;
      this.handleInterval();
    } else {
      this.finishTime = this.startTime + this.timeLeft;
      this.handleInterval();
    }
  }

  handleInterval() {
    this.interval = setInterval(() => {
      if (this.actualTime < this.finishTime) {
        this.actualTime = Date.now();
        this.collapsedTime += 10;
        this.timeLeft = this.timeToCount - this.collapsedTime;
      } else {
        clearInterval(this.interval);
      }
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
