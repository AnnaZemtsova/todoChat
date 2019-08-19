import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cols: ({ field: string; header: string })[];
  cars = ['f', 'sdf', 'sfd'];
  todos: Promise<string[]> = new Promise<string[]>((res, rej) => this.resolveTodos = res );
  private resolveTodos: Function;
  newToDo: string;
  openChat: boolean = false;

  constructor() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      {field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  ngOnInit() {
    this.todos = new Promise<string[]>((res, rej) => this.resolveTodos = res);
    this.resolveTodos(this.cars);
  }

  onToggleFab() {
    this.openChat = ! this.openChat;
  }
}
