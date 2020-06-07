import { Component, OnInit, Input } from '@angular/core';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {

   @Input() totalTimeInMs:number;
   milliseconds: string;
   seconds: string;
   minutes: string;

   normalizeTime(timeInMs) {
      const minutes = Math.floor(timeInMs / 60000);
      const seconds = Math.floor(timeInMs / 1000) % 60
      const totalSeconds = (timeInMs / 1000) % 60;
      const milliseconds = Math.round((totalSeconds - seconds) * 1000);
      return {minutes, seconds, milliseconds}
   }

   formatTime({minutes, seconds, milliseconds}) {
      return {
         minutes: String(minutes).padStart(2, '0'),
         seconds: String(seconds).padStart(2, '0'),
         milliseconds: String(milliseconds).padStart(3, '0')

      }
   }
  
   ngOnInit() {   
      const normalizedTime = this.normalizeTime(this.totalTimeInMs);
      const {minutes, seconds, milliseconds}= this.formatTime(normalizedTime);
      this.minutes = minutes;
      this.seconds = seconds;
      this.milliseconds = milliseconds;
   }
   
}
