import {createAction, props} from '@ngrx/store';

const increment = createAction('[Counter Component], Increment');
const decrement = createAction('[Counter Component], Decrement');
const reset = createAction('[Counter Component], Reset');
const custom = createAction('[Counter Component], Custom', props<{ value: number }>());

export { increment, decrement, reset, custom };
