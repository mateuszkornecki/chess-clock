import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timers-settings',
  templateUrl: './timers-settings.component.html',
  styleUrls: ['./timers-settings.component.scss']
})
export class TimersSettingsComponent implements OnInit {
  test = 15000;
  constructor() { }

  ngOnInit(): void {
  }

}
