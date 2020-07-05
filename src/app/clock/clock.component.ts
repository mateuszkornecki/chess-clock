import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent {
  milliseconds: string;
  seconds: string;
  minutes: string;
  @Input() totalTimeInMs: number;
  @Input() color: string;

  ngOnChanges() {
    this.formatTime(this.totalTimeInMs);
  }

  normalizeTime(timeInMs) {
    const minutes = Math.floor(timeInMs / 60000);
    const seconds = Math.floor(timeInMs / 1000) % 60;
    const totalSeconds = (timeInMs / 1000) % 60;
    const milliseconds = Math.round((totalSeconds - seconds) * 1000);
    return { minutes, seconds, milliseconds };
  }

  addZero({ minutes, seconds, milliseconds }) {
    return {
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
      milliseconds: String(milliseconds).padStart(3, '0'),
    };
  }

  formatTime(timeInMs) {
    const normalizedTime =
      timeInMs > 0
        ? this.normalizeTime(this.totalTimeInMs)
        : this.normalizeTime(0);
    const { minutes, seconds, milliseconds } = this.addZero(normalizedTime);
    this.minutes = minutes;
    this.seconds = seconds;
    this.milliseconds = milliseconds;
  }
}
