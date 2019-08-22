import {Action} from '@ngrx/store';
import {Todo} from '../models/todo';
import {User} from '../../user/models/user';

export const TODO_LIST_UPDATE_LIST = 'TODO_LIST_UPDATE_LIST';
export const TODO_LIST_GET_ITEMS = 'TODO_LIST_GET_ITEMS';
export const TODO_LIST_SET_ITEMS = 'TODO_LIST_SET_ITEMS';
export const TODO_LIST_REMOVE_ITEM = 'TODO_LIST_REMOVE_ITEM';
export const TODO_LIST_ADD_ITEM = 'TODO_LIST_ADD_ITEM';
export const TODO_LIST_UPDATE_ITEM = 'TODO_LIST_UPDATE_ITEM';
export const TODO_LIST_CLEAR = 'TODO_LIST_CLEAR';


export class TodoListUpdateList implements Action {
  readonly type =  TODO_LIST_UPDATE_LIST;
  constructor(public payload: Todo) {}
}
export class TodoListRemoveItem implements Action {
  readonly type =  TODO_LIST_REMOVE_ITEM;
  constructor(public payload: {idTodo: string}) {}
}
export class TodoListAddItem implements Action {
  readonly type =  TODO_LIST_ADD_ITEM;
  constructor(public payload: {idUser: string, todo: string}) {}
}

export class TodoListUpdateItem implements Action {
  readonly type =  TODO_LIST_UPDATE_ITEM;
  constructor(public payload: {idUser: string, idTodo: string, todo: string}) {}
}

export class TodoListSetItems implements Action {
  readonly type =  TODO_LIST_SET_ITEMS;
  constructor(public payload: Todo[]) {}
}


export class TodoListGetItems implements Action {
  readonly type =  TODO_LIST_GET_ITEMS;
  constructor(public payload: {idUser: string}) {}
}


export class TodoListClear implements Action {
  readonly type =  TODO_LIST_CLEAR;
}
export type TodoListActions = TodoListGetItems | TodoListSetItems | TodoListAddItem | TodoListUpdateItem |
  TodoListUpdateList| TodoListRemoveItem | TodoListClear;
