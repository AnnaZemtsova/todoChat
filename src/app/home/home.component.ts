import { Component, OnInit } from '@angular/core';
import * as fromApp from '../store/app.reducers';
import {Store} from '@ngrx/store';
import * as TodoListActions from '../todoList/actions/todoList.actions';
import {map} from 'rxjs/operators';
import * as AuthActions from '../auth/actions/auth.actions';
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
  editedItemIndex: number;
  todoList: Todo[];
  editableValue: string;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.user = JSON.parse(JSON.parse(localStorage.getItem('user')).user);
    this.store.dispatch(new TodoListActions.TodoListGetItems({idUser: this.user._id}));
    this.store.select('todosReducer').pipe(map((state: any) => {
      return state;
    })).subscribe(state => {
      this.todos = new Promise<Todo[]>((res, rej) => this.resolveTodos = res);
      if (state && state.todoList) {
        this.todoList = state.todoList;
        this.resolveTodos(state.todoList);
      }
  });
  }

  onToggleFab() {
    this.openChat = ! this.openChat;
  }

  addItem() {
    this.store.dispatch(new TodoListActions.TodoListAddItem({idUser: this.user._id, todo: this.newToDo}));
  }

  editItem(i: number) {
    if (this.isEdit) {
      this.store.dispatch(new TodoListActions.TodoListUpdateItem({idUser: this.user._id, idTodo: this.todoList[i]._id , todo: this.editableValue}));
    } else {}
    this.isEdit = !this.isEdit;
    this.editedItemIndex = i;
  }

  deleteItem(i: number) {
    this.store.dispatch(new TodoListActions.TodoListRemoveItem({ idTodo: this.todoList[i]._id }));
  }
}
