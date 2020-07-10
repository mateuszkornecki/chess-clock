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
  @ViewChild('rect') rect: ElementRef;
  length: number;
  percent: number;
  strokeDasharray: number;
  strokeDashoffset: number;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.length = this.rect.nativeElement.getTotalLength();
      this.strokeDasharray = this.length + 0.5;
      this.strokeDashoffset = this.length - (this.length * this.percent);
    })
  };

  ngOnChanges(changes: SimpleChanges): void {
    this.percent = changes.progress.currentValue/100;
  };

}
