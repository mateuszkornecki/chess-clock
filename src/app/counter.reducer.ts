import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, custom } from './counter.actions';

const valueFromLocalStorage = Number(localStorage.getItem('chess-clock'));
export const initialState = valueFromLocalStorage ? valueFromLocalStorage : 5;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => initialState),
  on(custom, (state, {value}) => value)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
