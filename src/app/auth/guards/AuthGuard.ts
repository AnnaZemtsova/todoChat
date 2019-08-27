import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {UserActions} from '../../user/actions/user.actions';

@Injectable()
export  class AuthGuard implements CanActivate {

  constructor(private router: Router, private store: Store<fromApp.AppState>) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return  this.store.select('authReducer').pipe(map((authState: any) => {
      if (authState.isAuthorised) {
        return true;
      } else {
        if (localStorage.getItem('jwtToken')) {
          const helper = new JwtHelperService();
          try {
            const user = helper.decodeToken(localStorage.getItem('jwtToken'));
            this.store.dispatch(UserActions.UserCreate.Success(user));
            return true;
          } catch (e) {
            return false;
          }
        }
      }
      return authState.isAuthorised;
    }));
  }
}
