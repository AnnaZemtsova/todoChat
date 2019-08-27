import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionsConsts, AuthActions} from '../actions/auth.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {RestService} from '../../core/services/rest.service';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import * as fromApp from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {ROUTES} from '../../core/consts';
import {API_URLS} from '../../core/consts';
import {JwtHelperService} from '@auth0/angular-jwt';
import {UserActions} from '../../user/actions/user.actions';


@Injectable()
export class AuthEffects {
  @Effect()
  userSignin = this.actions.pipe(
    ofType(AuthActionsConsts.AuthLogin.Request),
    switchMap((userData: any) => {
      return this.rest.post(API_URLS.SIGNIN, userData.payload);
    }),
    map((resData: any) => {
      const helper = new JwtHelperService();
      const user = helper.decodeToken(resData.data);
      localStorage.setItem('jwtToken', resData.data);
      this.store.dispatch(UserActions.UserCreate.Success(user));
      this.router.navigate([ROUTES.HOME.path]);
      return  AuthActions.AuthLogin.Success();
    }),
    catchError(() => {
      return of( AuthActions.AuthLogin.Failed());
    })
  );

  @Effect()
  userSignout = this.actions.pipe(
    ofType(AuthActionsConsts.AuthLogin.Clear),
    switchMap((userData: any) => {
      return of();
    }),
    map((resData: any) => {
      localStorage.setItem('jwtToken', null);
      this.router.navigate([ROUTES.SIGNIN.path]);
      return  of();
    }),
    catchError(() => {
      return of( AuthActions.AuthLogin.Failed());
    })
  );
  constructor(private actions: Actions, private rest: RestService, private store: Store<fromApp.AppState>,
              private router: Router) {
  }
}
