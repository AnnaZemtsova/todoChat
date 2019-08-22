import {Todo} from '../models/todo';
import * as TodoListAction from '../actions/todoList.actions';

export interface State {
  todoList: Todo[];
}
const initialState: State = {
  todoList: []
};
export function todoListReducer(state = initialState, action: TodoListAction.TodoListActions): State {
  switch (action.type) {
    case TodoListAction.TODO_LIST_GET_ITEMS:
      return {
        ...state
      };
    case TodoListAction.TODO_LIST_SET_ITEMS:
      return {
        ...state,
        todoList: action.payload
      };
    case TodoListAction.TODO_LIST_UPDATE_LIST:
      break;

    case TodoListAction.TODO_LIST_ADD_ITEM:
      break;
    case TodoListAction.TODO_LIST_UPDATE_ITEM:
      break;

    case TodoListAction.TODO_LIST_REMOVE_ITEM:
      return {
        ...state
      };

    case TodoListAction.TODO_LIST_CLEAR:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}
