import {Todo} from '../models/todo';
import {TodoActionsConsts} from '../actions/todoList.actions';

export interface State {
  todoList: Todo[];
}
const initialState: State = {
  todoList: []
};
export function todoListReducer(state = initialState, action: any): State {
  switch (action.type) {
    case TodoActionsConsts.TodoGetItems.Request:
      return {
        ...state
      };

    case TodoActionsConsts.TodoGetItems.Success:
      return {
        ...state,
        todoList: action.payload
      };

    case TodoActionsConsts.TodoGetItems.Failed:
      return {
        ...state
      };

    case TodoActionsConsts.TodoSetItems.Request:
      return {
        ...state,
        todoList: action.payload
      };

    case TodoActionsConsts.TodoUpdate.Request:
      return {
        ...state
      };

    case TodoActionsConsts.TodoUpdate.Success:
      const { todo } = action.payload;

      return {
        ...state,
        todoList: [...state.todoList.map(next => {
            if (next._id === todo._id) {
              next = todo;
            }
            return next;
          })]
      };

    case TodoActionsConsts.TodoAdd.Request:
      return {
        ...state
      };

    case TodoActionsConsts.TodoAdd.Success:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };

    case TodoActionsConsts.TodoRemove.Request:
      return {
        ...state
      };

    case TodoActionsConsts.TodoRemove.Success:
      const removedTodoList = [...state.todoList];
      removedTodoList.forEach((next, i) => {
        if (next._id === action.payload.id) {
          removedTodoList.splice(i, 1);
        }
      });
      return {
        ...state,
        todoList: removedTodoList
      };


    default:
      return {
        ...state
      };
  }
}
