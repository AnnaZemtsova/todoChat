import {Actions, Effect, ofType} from '@ngrx/effects';
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
export class AuthEffects {
  @Effect()
  userSignin = this.actions.pipe(
    ofType(AuthActions.AUTH_REQUEST),
    switchMap((userData: AuthActions.AuthRequest) => {
      this.router.navigate([ROUTES.HOME.path]); // ??
      return of();
    }),
    map((resData: any) => {
      this.router.navigate([ROUTES.HOME.path]);
    }),
    catchError(() => {
      return of(new AuthActions.AuthFailed());
    })
  );
  constructor(private actions: Actions, private rest: RestService, private store: Store<fromApp.AppState>,
              private router: Router) {
  }
}
