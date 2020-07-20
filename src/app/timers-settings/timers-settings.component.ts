import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-timers-settings',
  templateUrl: './timers-settings.component.html',
  styleUrls: ['./timers-settings.component.scss'],
})
export class TimersSettingsComponent implements OnInit {
  test = 15000;
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>, private router: Router) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    let currentValue;
    this.count$.subscribe((val) => (currentValue = val));
    if (currentValue > 0) {
      this.store.dispatch(decrement());
    }
  }

  reset() {
    this.store.dispatch(reset());
  }

  ngOnInit(): void {}
}
