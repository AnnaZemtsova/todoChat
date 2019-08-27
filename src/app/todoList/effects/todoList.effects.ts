import {Actions, Effect, ofType} from '@ngrx/effects';
import {TodoActions, TodoActionsConsts} from '../actions/todoList.actions';
import {AuthActions} from '../../auth/actions/auth.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {RestService} from '../../core/services/rest.service';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import * as fromTodo from '../../todoList/reducers/todoList.reducer';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {ROUTES} from '../../core/consts';
import {API_URLS} from '../../core/consts';

@Injectable()
export class TodoListEffects {
  @Effect()
  updateItem = this.actions.pipe(
    ofType(TodoActionsConsts.TodoUpdate.Request),
    switchMap((item: any) => {
      return this.rest.put(API_URLS.TODO_LIST, item.payload);
    }),
    map((resData: any) => {
      return  TodoActions.TodoUpdate.Success({todo: resData.data});
    }),
    catchError(() => {
      return of(TodoActions.TodoUpdate.Failed());
    })
  );

  @Effect()
  deleteItem = this.actions.pipe(
    ofType(TodoActionsConsts.TodoRemove.Request),
    switchMap((item: any) => {
      return this.rest.delete(API_URLS.TODO_LIST + '?idTodo=' + item.payload.idTodo);
    }),
    map((resData: any) => {
      return  TodoActions.TodoRemove.Success({id: resData.data});
    }),
    catchError(() => {
      return of(TodoActions.TodoRemove.Failed());
    })
  );

  @Effect()
  addItem = this.actions.pipe(
    ofType(TodoActionsConsts.TodoAdd.Request),
    switchMap((item: any) => {
      return this.rest.post(API_URLS.TODO_LIST, item.payload);
    }),
    map((resData: any) => {
      return  TodoActions.TodoAdd.Success(resData.data);
    }),
    catchError(() => {
      return of(TodoActions.TodoAdd.Failed());
    })
  );

  @Effect()
  getItems = this.actions.pipe(
    ofType(TodoActionsConsts.TodoGetItems.Request),
    switchMap((item: any) => {
      return this.rest.get(API_URLS.TODO_LIST + '?idUser=' + item.payload.idUser);
    }),
    map((resData: any) => {
      return  TodoActions.TodoGetItems.Success(resData.data);
    }),
    catchError(() => {
      return of(TodoActions.TodoGetItems.Failed());
    })
  );
  constructor(private actions: Actions, private rest: RestService, private store: Store<fromTodo.State>,
              private router: Router) {
  }
}
