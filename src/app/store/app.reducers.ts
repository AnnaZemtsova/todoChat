import {ActionReducerMap} from '@ngrx/store';
import * as fromAuth from '../auth/reducers/auth.reducer';
import * as fromUser from '../user/reducers/user.reducer';
import * as fromTodoList from '../todoList/reducers/todoList.reducer';

export interface AppState {
  auth: fromAuth.State;
  user: fromUser.State;
  todoList: fromTodoList.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  user: fromUser.userReducer,
  todoList: fromTodoList.todoListReducer
};
