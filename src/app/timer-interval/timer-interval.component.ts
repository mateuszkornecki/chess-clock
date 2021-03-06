import {
  Component,
  OnDestroy,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';

import { Colors } from '../Colors';

@Component({
  selector: 'app-timer-interval',
  templateUrl: './timer-interval.component.html',
  styleUrls: ['./timer-interval.component.scss'],
})
export class TimerIntervalComponent implements OnChanges, OnDestroy {
  isStarted = false;
  isRunning = false;
  isPaused = true;
  initialTime: number;
  finishTime: number;
  actualTime: number;
  timeLeft: number;
  color: string;
  percentage: number;
  interval: ReturnType<typeof setTimeout>;
  @Input() timeToCount: number;
  @Output() isFinished: EventEmitter<boolean> = new EventEmitter();
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

  public reset() {
    this.isStarted = false;
    this.isRunning = false;
    this.isPaused = false;
    this.percentage = null;
    this.timeLeft = this.timeToCount;
    this.finishTime = null;
    this.setColor();
    clearInterval(this.interval);
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
      this.setColor();
      clearInterval(this.interval);
    }
  }

  private setColor(): void {
    if (this.isRunning) {
      this.color =
        this.percentage > 66
          ? Colors.Green
          : this.percentage > 33
          ? Colors.Orange
          : Colors.Red;
    } else if (this.isPaused) {
      this.color = Colors.Pause;
    } else {
      this.color = Colors.initialColor;
    }
  }

  private count() {
    this.interval = setInterval(() => {
      this.actualTime = Date.now();
      if (this.timeLeft > 0) {
        this.timeLeft = this.finishTime - this.actualTime;
        this.percentage = Number(
          ((this.timeLeft / this.timeToCount) * 100).toFixed(3)
        );
        this.setColor();
      } else {
        this.isFinished.emit(true);
        clearInterval(this.interval);
      }
    }, 10);
  }
}
