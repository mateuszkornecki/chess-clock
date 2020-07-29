import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, custom } from '../counter.actions';

@Component({
  selector: 'app-timers-settings',
  templateUrl: './timers-settings.component.html',
  styleUrls: ['./timers-settings.component.scss'],
})
export class TimersSettingsComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>, private router: Router) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit(): void {
    this.setFromLocalStorage();
  }

  saveToLocalStorage(value): void {
    if (value) {
      localStorage.setItem('chess-clock', `${value}`);
    }
  }

  setFromLocalStorage(): void {
    const value = Number(localStorage.getItem('chess-clock'));
    if (value) {
      this.store.dispatch(custom({ value }));
    }
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    if (this.getCurrentValue() > 1) {
      this.store.dispatch(decrement());
    }
  }

  reset() {
    this.store.dispatch(reset());
  }

  start() {
    this.saveToLocalStorage(this.getCurrentValue());
  }

  getCurrentValue(): number {
    let currentValue;
    this.count$.subscribe((val) => (currentValue = val));
    return currentValue;
  }
}
