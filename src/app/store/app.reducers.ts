import {ActionReducerMap} from '@ngrx/store';
import * as fromAuth from '../auth/reducers/auth.reducer';
import * as fromUser from '../user/reducers/user.reducer';
import * as fromTodoList from '../todoList/reducers/todoList.reducer';
import * as fromChat from '../chat-messages/reducers/chat.reducers';

export interface AppState {
  authReducer: fromAuth.State;
  userReducer: fromUser.State;
  todosReducer: fromTodoList.State;
  chatReducer: fromChat.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  authReducer: fromAuth.authReducer,
  userReducer: fromUser.userReducer,
  todosReducer: fromTodoList.todoListReducer,
  chatReducer: fromChat.chatReducer
};
