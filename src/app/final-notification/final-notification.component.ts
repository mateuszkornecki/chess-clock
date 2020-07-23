import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-notification',
  templateUrl: './final-notification.component.html',
  styleUrls: ['./final-notification.component.scss'],
})
export class FinalNotificationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
