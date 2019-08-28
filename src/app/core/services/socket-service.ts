import { Socket } from 'ngx-socket-io';
import {Injectable} from '@angular/core';
import {MessageService} from './message.service';
import {Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import {ChatActions, ChatActionsConsts} from '../../chat-messages/actions/chat.actions';

@Injectable()
export class SocketService {
  room = '';

  constructor(private socket: Socket, private messageService: MessageService,
              private store: Store<fromApp.AppState>) {
      this.socket.on('setroom', (room) => {
        this.room = room;
        console.log(this.room);
      });
      this.socket.on('broadcast',  (next) => {
        console.log(next);
        if (next.event === 'allrooms') {
          this.store.dispatch(ChatActions.SetRooms.Request(next.data));
        }
        if (next.event === 'roomcreated') {
          this.store.dispatch(ChatActions.CreateRoom.Success(next.data));
        }
        if (next.event === 'message') {
          console.log(next.data);
          if (this.room === next.data.room) {
            this.store.dispatch(ChatActions.AddMessage.Request(next.data.message));
          }
        }
      });
  }

  connect() {

  }


  getRooms() {
    this.socket.emit('getAllRooms');
  }

  sendMessage(data: string) {
      console.log(this.room);
      this.socket.emit('message', {room: this.room, message: data});
  }

  joinRoom(room) {
      this.socket.emit('joinroom', room);
  }

  createRoom() {
      this.socket.emit('createroom');
  }
}
