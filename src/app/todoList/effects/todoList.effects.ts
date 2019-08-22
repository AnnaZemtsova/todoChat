import {Actions, Effect, ofType} from '@ngrx/effects';
import * as TodoListActions from '../actions/todoList.actions';
import * as AuthActions from '../../auth/actions/auth.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {RestService} from '../../core/services/rest.service';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import * as fromTodo from '../../todoList/reducers/todoList.reducer';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {ROUTES} from '../../core/consts';
import {API_URLS} from '../../core/consts';
import {Todo} from '../models/todo';

@Injectable()
export class TodoListEffects {
  @Effect()
  updateItem = this.actions.pipe(
    ofType(TodoListActions.TODO_LIST_UPDATE_ITEM),
    switchMap((item: TodoListActions.TodoListUpdateItem) => {
      return this.rest.put(API_URLS.TODO_LIST, item.payload);
    }),
    map((resData: any) => {
      this.router.navigate([ROUTES.HOME.path]);
      return new TodoListActions.TodoListGetItems({idUser: resData.data.idUser});
    }),
    catchError(() => {
      return of(new AuthActions.AuthFailed());
    })
  );

  @Effect()
  deleteItem = this.actions.pipe(
    ofType(TodoListActions.TODO_LIST_REMOVE_ITEM),
    switchMap((item: TodoListActions.TodoListRemoveItem) => {
      return this.rest.delete(API_URLS.TODO_LIST + '?idTodo=' + item.payload.idTodo);
    }),
    map((resData: any) => {
      this.router.navigate([ROUTES.HOME.path]);
      return new TodoListActions.TodoListGetItems({idUser: resData.data});
    }),
    catchError(() => {
      return of(new AuthActions.AuthFailed());
    })
  );

  @Effect()
  addItem = this.actions.pipe(
    ofType(TodoListActions.TODO_LIST_ADD_ITEM),
    switchMap((item: TodoListActions.TodoListAddItem) => {
      return this.rest.post(API_URLS.TODO_LIST, item.payload);
    }),
    map((resData: any) => {
      this.router.navigate([ROUTES.HOME.path]);
      return new TodoListActions.TodoListGetItems(resData.data);
    }),
    catchError(() => {
      return of(new AuthActions.AuthFailed());
    })
  );

  @Effect()
  getItems = this.actions.pipe(
    ofType(TodoListActions.TODO_LIST_GET_ITEMS),
    switchMap((item: TodoListActions.TodoListGetItems) => {
      return this.rest.get(API_URLS.TODO_LIST + '?idUser=' + item.payload.idUser);
    }),
    map((resData: any) => {
      return new TodoListActions.TodoListSetItems(resData.data);
    }),
    catchError(() => {
      return of(new AuthActions.AuthFailed());
    })
  );
  constructor(private actions: Actions, private rest: RestService, private store: Store<fromTodo.State>,
              private router: Router) {
  }
}
