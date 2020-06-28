import {
  Component,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-clock-interval',
  templateUrl: './clock-interval.component.html',
  styleUrls: ['./clock-interval.component.scss'],
})
export class ClockIntervalComponent {
  isStarted: boolean = false;
  isRunning: boolean = false;
  isPaused: boolean = true;
  isFinished: boolean = false;
  initialTime: number;
  finishTime: number;
  actualTime: number;
  timeLeft: number;
  interval: ReturnType<typeof setTimeout>;
  @Input() timeToCount;

  ngOnChanges(changes: SimpleChanges) {
    this.setInitialTimeLeft(changes);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  private setInitialTimeLeft(changes: SimpleChanges) {
    if (changes?.timeToCount?.firstChange) {
      this.timeLeft = this.timeToCount;
    }
  }

  public toggle() {
    if (!this.isStarted) {
      this.start();
    } else if (this.isRunning) {
      this.pause();
    } else if (this.isPaused) {
      this.unPause();
    }
  }

  private start() {
    if (!this.isStarted) {
      this.isRunning = true;
      this.isStarted = true;
      this.initialTime = Date.now();
      this.finishTime = this.initialTime + this.timeToCount;
      this.timeLeft = this.finishTime - this.initialTime;
      this.count();
    }
  }

  private unPause() {
    if (this.isPaused) {
      this.isPaused = false;
      this.isRunning = true;
      this.initialTime = Date.now();
      this.finishTime = this.initialTime + this.timeLeft;
      this.count();
    }
  }

  private pause() {
    if (this.isRunning) {
      this.isRunning = false;
      this.isPaused = true;
      clearInterval(this.interval);
    }
  }

  private count() {
    this.interval = setInterval(() => {
      this.actualTime = Date.now();
      if (this.timeLeft > 0) {
        this.timeLeft = this.finishTime - this.actualTime;
      } else {
        this.isFinished = true;
        clearInterval(this.interval);
      }
    }, 10);
  }
}
