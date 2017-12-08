import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  edition: boolean = false;

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

  // Save edited Todo
  saveTODO() {
    this.edition = false;
  }

  saveList(event: any) {
    if (event.keyCode == 13) {
      // TODO: Save list locally
      this.listService.selectedList.edited = false;
    }
  }

  // Validate a Todo and move it to the end of the list
  validateTODO(todo, index) {
    // TODO: Update state locally
    let element = this.listService.selectedList.todos[index];
    this.listService.selectedList.todos.splice(index, 1);
    this.listService.selectedList.todos.splice(this.listService.selectedList.todos.length, 0, element);
    todo.done = true;
  }

  // Delete a Todo
  deleteTODO(index) {
  // TODO: Delete them locally
    this.listService.selectedList.todos.splice(index, 1);
  }

  editTODO(todo) {
    // TODO: Edit locally
    this.listService.editedTODO = todo;
    this.edition = true;
  }
}
