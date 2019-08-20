import { Component, OnInit } from '@angular/core';
import * as fromApp from '../store/app.reducers';
import {Store} from '@ngrx/store';
import * as TodoListActions from '../todoList/actions/todoList.actions';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todos: Promise<string[]> = new Promise<string[]>((res, rej) => this.resolveTodos = res );
  private resolveTodos: Function;
  newToDo: string;
  openChat: boolean = false;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.store.select('todoList').pipe(map((state: any) => {
      return state;
    })).subscribe(state => {
      this.todos = new Promise<string[]>((res, rej) => this.resolveTodos = res);
      this.resolveTodos(state.todoList.list);
  });
  }

  onToggleFab() {
    this.openChat = ! this.openChat;
  }
}
