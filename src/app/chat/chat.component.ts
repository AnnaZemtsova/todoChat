import { Component, OnInit } from '@angular/core';
import {SocketService} from '../core/services/socket-service';
import {MessageService} from '../core/services/message.service';

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

  constructor(private socketService: SocketService, private messageService: MessageService) { }

  ngOnInit() {
    this.messages = new Promise<string[]>(res => this.resMessages = res);
    this.resMessages(this.messageService.messages);

    this.rooms = new Promise<string[]>(res => this.resRooms = res);
    this.resRooms(this.messageService.rooms);

    this.messageService.messageAdded.subscribe(next => {
      this.messages = new Promise<string[]>(res => this.resMessages = res);
      this.resMessages(next);
    });
    this.messageService.allRooms.subscribe(next => {
      this.rooms = new Promise<string[]>(res => this.resRooms = res);
      this.resRooms(next);
    });
  }

  createRoom() {
    this.socketService.createRoom();
  }

  sendMessage() {
    this.socketService.emit(this.message);
    this.message = '';
  }

  joinRoom(room: any) {
    this.socketService.joinRoom(room);
  }
}
