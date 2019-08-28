import { Component, OnInit } from '@angular/core';
import {SocketService} from '../core/services/socket-service';
import {MessageService} from '../core/services/message.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import {map} from 'rxjs/operators';
import {Todo} from '../todoList/models/todo';
import {TodoActions} from '../todoList/actions/todoList.actions';
import {ChatActions} from '../chat-messages/actions/chat.actions';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message = '';
  rooms: Promise<string[]> = new Promise<string[]>(res => this.resRooms = res);
  private resRooms: Function;
  messages: Promise<string[]> = new Promise<string[]>(res => this.resMessages = res);
  private resMessages: Function;

  constructor(private socketService: SocketService, private messageService: MessageService,
              private store: Store<fromApp.AppState>, ) { }

  ngOnInit() {
    // this.messages = new Promise<string[]>(res => this.resMessages = res);
    // this.resMessages(this.messageService.messages);
    //
    // this.rooms = new Promise<string[]>(res => this.resRooms = res);
    // this.resRooms(this.messageService.rooms);
    //
    // this.messageService.messageAdded.subscribe(next => {
    //   this.messages = new Promise<string[]>(res => this.resMessages = res);
    //   this.resMessages(next);
    // });
    // this.messageService.allRooms.subscribe(next => {
    //   this.rooms = new Promise<string[]>(res => this.resRooms = res);
    //   this.resRooms(next);
    // });

    this.store.select('chatReducer').pipe(map((state: any) => {
      return state;
    })).subscribe(state => {
      this.rooms = new Promise<string[]>((res, rej) => this.resRooms = res);
      if (state && state.rooms) {
        console.log(state.rooms);
        this.resRooms(state.rooms);
      }
      this.messages = new Promise<string[]>((res, rej) => this.resMessages = res);
      if (state && state.messages) {
        console.log(state.messages);
        this.resMessages(state.messages);
      }
    });
    this.store.dispatch(ChatActions.GetRooms.Request());
  }

  createRoom() {
    this.store.dispatch(ChatActions.CreateRoom.Request());
  }

  sendMessage() {
    this.store.dispatch(ChatActions.SendMessage.Request(this.message));
    this.message = '';
  }

  joinRoom(room: any) {
    this.store.dispatch(ChatActions.JoinRoom.Request(room));
  }
}
