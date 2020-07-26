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
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnChanges {
  @Input() progress;
  @Input() color;
  @ViewChild('rect') rect: ElementRef;
  length: number;
  percent: number;
  strokeDasharray: number;
  strokeDashoffset: number;
  private _svg?: HTMLElement;

  @ViewChild('rect')
  set rectElement(svg: ElementRef<HTMLElement>) {
    if (svg && svg.nativeElement && this._svg !== svg.nativeElement) {
      this._svg = svg.nativeElement;
      this.length = this.rect.nativeElement.getTotalLength();
      this.strokeDasharray = this.length;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.color && this.rect) {
      this.rect.nativeElement.style.stroke = changes.color.currentValue;
    }

    if (changes.progress) {
      this.percent = changes.progress.currentValue / 100;
      this.strokeDashoffset = this.length - this.length * this.percent;
    }
  }
}
