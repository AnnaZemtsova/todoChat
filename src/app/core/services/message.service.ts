import {Subject} from 'rxjs';

export class MessageService {
  public messages: string[] = [];
  public messageAdded  = new Subject<string[]>();
  public rooms: string[] = [];
  allRooms = new Subject<string[]>();

  addMessage(message) {
    this.messages.push(message);
    this.messageAdded.next(this.messages);
  }
  addRoom(room) {
    this.rooms.push(room);
    this.allRooms.next(this.rooms);
  }
}
