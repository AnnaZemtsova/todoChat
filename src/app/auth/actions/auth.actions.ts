import {Action} from '@ngrx/store';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';
export const AUTH_CLEAR = 'AUTH_CLEAR';

export class AuthRequest implements Action {
  readonly type =  AUTH_REQUEST;
  constructor(public payload: {email: string; password: string}) {}
}

export class AuthSuccess implements Action {
  readonly type =  AUTH_SUCCESS;
}

export class AuthFailed implements Action {
  readonly type =  AUTH_FAILED;
}

export class AuthClear implements Action {
  readonly type =  AUTH_CLEAR;
}
export type AuthActions = AuthRequest | AuthSuccess | AuthFailed | AuthClear;
