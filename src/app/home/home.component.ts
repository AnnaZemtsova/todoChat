import { Component, OnInit } from '@angular/core';
import * as fromApp from '../store/app.reducers';
import {Store} from '@ngrx/store';
import {TodoActions} from '../todoList/actions/todoList.actions';
import {map} from 'rxjs/operators';
import {User} from '../user/models/user';
import {Todo} from '../todoList/models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todos: Promise<Todo[]> = new Promise<Todo[]>((res, rej) => this.resolveTodos = res );
  private resolveTodos: Function;
  newToDo: string;
  openChat = false;
  user: User;
  isEdit: boolean = false;
  editedItemId: string;
  todoList: Todo[];
  editableValue: string;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.store.select('todosReducer').pipe(map((state: any) => {
      return state;
    })).subscribe(state => {
      this.todos = new Promise<Todo[]>((res, rej) => this.resolveTodos = res);
      if (state && state.todoList) {
        this.todoList = state.todoList;
        this.resolveTodos(state.todoList);
      }
  });
    this.store.select('userReducer').pipe(map((state: any) => {
      return state;
    })).subscribe(state => {
      this.user = state.user;
    });
    this.store.dispatch( TodoActions.TodoGetItems.Request({idUser: this.user._id}));
  }

  onToggleFab() {
    this.openChat = ! this.openChat;
  }

  addItem() {
    this.store.dispatch( TodoActions.TodoAdd.Request({idUser: this.user._id, todo: this.newToDo}));
  }

  editItem(todo: any) {
    if (this.isEdit) {
      this.store.dispatch(TodoActions.TodoUpdate.Request({idUser: this.user._id, idTodo: todo._id , todo: this.editableValue}));
    } else {
      this.editableValue = todo.todo;
    }
    this.isEdit = !this.isEdit;
    this.editedItemId = todo._id;
  }

  deleteItem(i: number) {
    this.store.dispatch( TodoActions.TodoRemove.Request({ idTodo: this.todoList[i]._id }));
  }
}
