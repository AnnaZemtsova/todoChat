import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import {map} from 'rxjs/operators';

@Injectable()
export  class AuthGuard implements CanActivate {

  constructor(private router: Router, private store: Store<fromApp.AppState>) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return  this.store.select('authReducer').pipe(map((authState: any) => {
      console.log(authState.isAuthorised);
      return authState.isAuthorised;
    }));
  }
}
