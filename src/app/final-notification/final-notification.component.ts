import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-notification',
  templateUrl: './final-notification.component.html',
  styleUrls: ['./final-notification.component.scss'],
})
export class FinalNotificationComponent implements OnInit {
  @Output() forceReset: EventEmitter<boolean> = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public handleClick(): void {
    this.forceReset.emit(true);
  }
}
