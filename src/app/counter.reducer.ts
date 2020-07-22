import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, custom } from './counter.actions';

export const initialState = 5;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 5),
  on(custom, (state, {value}) => value)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
