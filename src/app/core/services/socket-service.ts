import { Socket } from 'ngx-socket-io';
import {Injectable} from '@angular/core';
import {MessageService} from './message.service';
import {Subject} from 'rxjs';

@Injectable()
export class SocketService {
  room = '';

  constructor(private socket: Socket, private messageService: MessageService) {
    this.socket.on('setroom', (room) => {
      this.room = room;
    });
    // this.socket.on('message', async (data: {room: string, message: string}) => {
    //   if (this.room === data.room) {
    //     return await this.messageService.addMessage(data.message);
    //   }
    // });

    this.socket.on('broadcast',  (next) => {
      console.log(next);
      if (next.event === 'allrooms') {
        this.messageService.rooms = next.data;
      }
      if (next.event === 'roomcreated') {
        this.messageService.addRoom(next.data);
      }
      if (next.event === 'message') {
        if (this.room === next.data.room) {
          return this.messageService.addMessage(next.data.message);
        }
      }
    });
  }

  emit(data: string) {
    this.socket.emit('message', {room: this.room, message: data});
  }

  joinRoom(room) {
   return  this.socket.emit('joinroom', room);
  }

  createRoom() {
    this.socket.emit('createroom');
  }
}
