import {Actions, Effect, ofType} from '@ngrx/effects';
import * as UserActions from '../actions/user.actions';
import {map, switchMap} from 'rxjs/operators';
import {RestService} from '../../core/services/rest.service';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class UserEffects {
  @Effect()
  userRegistration = this.actions.pipe(
    ofType(UserActions.USER_CREATE_REQUEST),
    switchMap((userData: UserActions.UserCreateRequest) => {
        console.log(userData);
        return this.rest.post('signup', userData.payload).catch((error) =>
        console.log('ERROR'));
        return  of();
    }), map((resData: any) => {
        console.log(resData);
        return  of();
    })
      );
  constructor(private actions: Actions, private rest: RestService) {

  }
}
