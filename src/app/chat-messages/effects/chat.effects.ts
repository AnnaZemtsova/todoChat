import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {API_URLS, ROUTES} from '../../core/consts';
import {JwtHelperService} from '@auth0/angular-jwt';
import {of} from 'rxjs';
import {RestService} from '../../core/services/rest.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import {Router} from '@angular/router';
import {ChatActions, ChatActionsConsts} from '../actions/chat.actions';
import {SocketService} from '../../core/services/socket-service';

@Injectable()
export class ChatEffects {
  @Effect()
  joinRoom = this.actions.pipe(
    ofType(ChatActionsConsts.JoinRoom.Request),
    switchMap((room: any) => {
      return this.socketService.joinRoom(room);
    }),
    map((resData: any) => {
      return  ChatActions.JoinRoom.Success();
    }),
    catchError(() => {
      return of(ChatActions.JoinRoom.Failed());
    })
  );

  constructor(private actions: Actions, private socketService: SocketService, private store: Store<fromApp.AppState>) {

  }
}
