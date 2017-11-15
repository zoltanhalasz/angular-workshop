import { Action } from '@ngrx/store';

export const INCREMENT = '[counter] Increment';
export const DECREMENT = '[counter] Decrement';
export const RESET = '[counter] Reset';

export const SAVE_PENDING = '[counter] Save pending';
export const SAVE_SUCCESS = '[counter] Save success';
export const SAVE_ERROR = '[counter] Save error';

// Actions without SAVING / SAVED
export const CHANGED_TYPES = [
  INCREMENT, DECREMENT, RESET
];

export class Increment implements Action {
  readonly type = INCREMENT;
}

export class Decrement implements Action {
  readonly type = DECREMENT;
}

export class Reset implements Action {
  readonly type = RESET;

  constructor(public payload: number) {}
}

export class SavePending implements Action {
  readonly type = SAVE_PENDING;
}

export class SaveSuccess implements Action {
  readonly type = SAVE_SUCCESS;
}

export class SaveError implements Action {
  readonly type = SAVE_ERROR;

  constructor(public payload: Error) {}
}

export type CounterAction =
  Increment | Decrement | Reset;

export type CounterSaveAction =
  SavePending | SaveSuccess | SaveError;
