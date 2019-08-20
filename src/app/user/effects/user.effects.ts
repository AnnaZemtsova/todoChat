import {Actions, Effect, ofType} from '@ngrx/effects';
import * as UserActions from '../actions/user.actions';
import * as AuthActions from '../../auth/actions/auth.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {RestService} from '../../core/services/rest.service';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import * as fromApp from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {ROUTES} from '../../core/consts';

@Injectable()
export class UserEffects {
  @Effect()
  userRegistration = this.actions.pipe(
    ofType(UserActions.USER_CREATE_REQUEST),
    switchMap((userData: UserActions.UserCreateRequest) => {
        return this.rest.post('signup', userData.payload);
    }),
    map((resData: any) => {
      localStorage.setItem('user', JSON.stringify(resData.data));
      this.store.dispatch(new UserActions.UserCreateSuccess(resData.data));
      this.router.navigate([ROUTES.HOME.path]);
      return new AuthActions.AuthSuccess();
    }),
    catchError(() => {
      return of(new AuthActions.AuthFailed());
    })
  );
  constructor(private actions: Actions, private rest: RestService, private store: Store<fromApp.AppState>,
              private router: Router) {
  }
}
