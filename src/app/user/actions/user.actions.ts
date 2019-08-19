import {Action} from '@ngrx/store';
import {User} from '../models/user';

export const USER_CREATE_REQUEST = 'USER_CREATE_REQUEST';
export const USER_FETCH_SUCCESS = 'USER_CREATE_SUCCESS';
export const USER_FETCH_FAILED = 'USER_CREATE_FAILED';
export const USER_CLEAR = 'USER_CLEAR';

export class UserCreateRequest implements Action {
  readonly type =  USER_CREATE_REQUEST;
  constructor(public payload: User) {}
}

export class UserFetchSuccess implements Action {
  readonly type =  USER_FETCH_SUCCESS;
}

export class UserFetchFailed implements Action {
  readonly type =  USER_FETCH_FAILED;
}

export class UserClear implements Action {
  readonly type =  USER_CLEAR;
}
export type UserActions = UserCreateRequest | UserFetchSuccess | UserFetchFailed | UserClear;
