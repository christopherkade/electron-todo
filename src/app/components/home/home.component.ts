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

  ngOnInit() {}

  // Adds a new todo to our list
  addTODO() {
    this.listService.selectedList.todos.push(new Todo('New TODO', ''));
  }

  // Save edited Todo
  saveTODO(event: any, todo: Todo) {
    if (event.keyCode == 13) {
      // TODO: Save todo locally
      todo.edited = false;
    }
  }

  saveList(event: any) {
    if (event.keyCode == 13) {
      // TODO: Save list locally
      this.listService.selectedList.edited = false;
    }
  }

  validateTODO(todo) {
    // TODO: Update state locally
    todo.done = true;
  }
}
