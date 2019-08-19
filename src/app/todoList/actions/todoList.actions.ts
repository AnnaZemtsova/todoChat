import {Action} from '@ngrx/store';
import {TodoList} from '../models/todoList';

export const TODO_LIST_ADD_ITEM = 'TODO_LIST_ADD_ITEM';
export const TODO_LIST_REMOVE_ITEM = 'TODO_LIST_REMOVE_ITEM';
export const TODO_LIST_UPDATE_ITEM = 'TODO_LIST_UPDATE_ITEM';
export const TODO_LIST_CLEAR = 'TODO_LIST_CLEAR';

export class TodoListAddItem implements Action {
  readonly type =  TODO_LIST_ADD_ITEM;
}

export class TodoListRemoveItem implements Action {
  readonly type =  TODO_LIST_REMOVE_ITEM;
}

export class TodoListUpdateItem implements Action {
  readonly type =  TODO_LIST_UPDATE_ITEM;
}

export class TodoListClear implements Action {
  readonly type =  TODO_LIST_CLEAR;
}
export type TodoListActions = TodoListAddItem | TodoListRemoveItem | TodoListUpdateItem | TodoListClear;
