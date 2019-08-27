import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActions} from '../../auth/actions/auth.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {RestService} from '../../core/services/rest.service';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import * as fromApp from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {ROUTES} from '../../core/consts';
import {API_URLS} from '../../core/consts';
import { JwtHelperService } from '@auth0/angular-jwt';
import {UserActions, UserActionsConsts} from '../actions/user.actions';

@Injectable()
export class UserEffects {
  @Effect()
  userRegistration = this.actions.pipe(
    ofType(UserActionsConsts.UserCreate.Request),
    switchMap((userData: any) => {
        return this.rest.post(API_URLS.SIGNUP, userData.payload);
    }),
    map((resData: any) => {
      const helper = new JwtHelperService();
      const user = helper.decodeToken(resData.data);
      localStorage.setItem('jwtToken', resData.data);
      this.store.dispatch( UserActions.UserCreate.Success(user));
      this.router.navigate([ROUTES.HOME.path]);
      return  AuthActions.AuthLogin.Success();
    }),
    catchError(() => {
      return of( AuthActions.AuthLogin.Failed());
    })
  );
  constructor(private actions: Actions, private rest: RestService, private store: Store<fromApp.AppState>,
              private router: Router) {
  }
}
