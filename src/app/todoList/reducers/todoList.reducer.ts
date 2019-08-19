import {TodoList} from '../models/todoList';
import * as TodoListAction from '../actions/todoList.actions';

export interface State {
  todoList: TodoList;
}
const initialState: State = {
  todoList: null
};

export function todoListReducer(state = initialState, action: TodoListAction.TodoListActions): State {
  switch (action.type) {
    case TodoListAction.TODO_LIST_ADD_ITEM:
      break;
    case TodoListAction.TODO_LIST_REMOVE_ITEM:
      break;

    case TodoListAction.TODO_LIST_UPDATE_ITEM:
      break;
    case TodoListAction.TODO_LIST_CLEAR:
      break;
    default:
      return {
        ...state
      };
  }
}
