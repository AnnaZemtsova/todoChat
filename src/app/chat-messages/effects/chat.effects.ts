import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {API_URLS, ROUTES} from '../../core/consts';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable, of} from 'rxjs';
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
    switchMap((data: any) => {
      this.socketService.joinRoom(data.payload);
      return  of();
    }),
    map((resData: any) => {
      return  of();
    }),
    catchError(() => {
      return of(ChatActions.JoinRoom.Failed());
    })
  );

  @Effect()
  createRoom = this.actions.pipe(
    ofType(ChatActionsConsts.CreateRoom.Request),
    switchMap(() => {
      this.socketService.createRoom();
      return of();
    }),
    map(() => {
      return  ChatActions.CreateRoom.Failed();
    }),
    catchError(() => {
      return ChatActions.CreateRoom.Failed();
    })
  );


  @Effect()
  sendMessage = this.actions.pipe(
    ofType(ChatActionsConsts.SendMessage.Request),
    switchMap((data) => {
      this.socketService.sendMessage(data.payload);
      return  of();
    }),
    map(() => {
      return  of();
    }),
    catchError(() => {
      return of(ChatActions.SendMessage.Failed());
    })
  );



  @Effect()
  getRooms = this.actions.pipe(
    ofType(ChatActionsConsts.GetRooms.Request),
    switchMap(() => {
      this.socketService.getRooms();
      return of();
    }),
    map(() => {
      return  ChatActions.GetRooms.Success();
    }),
    catchError(() => {
      return ChatActions.GetRooms.Failed();
    })
  );

  @Effect()
  setRooms = this.actions.pipe(
    ofType(ChatActionsConsts.SetRooms.Request),
    switchMap((data) => {
      console.log(data);
      this.store.dispatch(ChatActions.SetRooms.Success(data));
      return of();
    }),
    map(() => {
      return  of();
    }),
    catchError(() => {
      return of(ChatActions.SendMessage.Failed());
    })
  );



  @Effect()
  getMessages = this.actions.pipe(
    ofType(ChatActionsConsts.GetMessages.Request),
    switchMap((data) => {
      this.store.dispatch(ChatActions.GetMessages.Success());
      return of();
    }),
    map(() => {
      return  of();
    }),
    catchError(() => {
      return of(ChatActions.GetMessages.Failed());
    })
  );



  @Effect()
  addMessage = this.actions.pipe(
    ofType(ChatActionsConsts.AddMessage.Request),
    switchMap((data) => {
      console.log(data);
      this.store.dispatch(ChatActions.AddMessage.Success(data.payload));
      return of();
    }),
    map(() => {
      return  of();
    }),
    catchError(() => {
      return of(ChatActions.AddMessage.Failed());
    })
  );



  constructor(private actions: Actions, private socketService: SocketService, private store: Store<fromApp.AppState>) {

  }
}
