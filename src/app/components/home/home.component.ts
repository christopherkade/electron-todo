import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(public listService: ListService) { }

  ngOnInit() {
    if (this.listService.selectedList != null && this.listService.selectedList.todos.length > 0) {
      this.listService.editedTODO = this.listService.selectedList.todos[0];
    }
  }

  // Adds a new todo to our list
  addTODO() {
    this.listService.selectedList.todos.unshift(new Todo('New TODO', ''));
  }  
}
