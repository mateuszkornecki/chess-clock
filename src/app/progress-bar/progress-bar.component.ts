import {
  Component,
  OnChanges,
  AfterViewInit,
  Input,
  ViewChild,
  ElementRef,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() progress;
  @Input() color;
  @ViewChild('rect') rect: ElementRef;
  @ViewChild('background') background: ElementRef;
  length: number;
  percent: number;
  strokeDasharray: number;
  strokeDashoffset: number;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.length = this.rect.nativeElement.getTotalLength();
      this.strokeDasharray = this.length;
    })
  };

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.color && this.rect) {
      this.rect.nativeElement.style.stroke = changes.color.currentValue;
      this.background.nativeElement.style.stroke = 'lightgray';

    }

    if(changes.progress) {
      this.percent = changes.progress.currentValue/100;
      this.strokeDashoffset = this.length - (this.length * this.percent);
    }
  };

}
