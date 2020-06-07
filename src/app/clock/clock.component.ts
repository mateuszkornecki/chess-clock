import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {

   @Input() totalTimeInMs:number;
   milliseconds: number;
   seconds: number;
   minutes: number;
   fullSeconds: number;
  
   ngOnInit() {   
      this.minutes = Math.floor(this.totalTimeInMs / 60000) === 60 ? 0 : Math.floor(this.totalTimeInMs / 60000)
      this.fullSeconds = (this.totalTimeInMs / 1000) % 60
      this.seconds = Math.floor(this.totalTimeInMs / 1000) % 60;
      this.milliseconds = Math.round((this.fullSeconds - this.seconds) * 1000);
   }
   
}
