import { Component, Input } from '@angular/core';
import { ListService } from '../../services/list.service';
import { Todo } from '../../models/todo';

/**
* Represents a Todo card
*/
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent {

  // The Todo object associated with the card
  @Input() todo: Todo;
  // The index of the card in the display
  @Input() index: number;
  // If the card is currently being edited
  edition: boolean = false;

  constructor(private listService: ListService) { }

  // Validate a Todo and move it to the end of the list
  validateTODO(todo) {
    // TODO: Update state locally
    let element = this.listService.selectedList.todos[this.index];
    this.listService.selectedList.todos.splice(this.index, 1);
    this.listService.selectedList.todos.splice(this.listService.selectedList.todos.length, 0, element);
    todo.done = true;
  }

  // Delete a Todo
  deleteTODO() {
  // TODO: Delete locally
    this.listService.selectedList.todos.splice(this.index, 1);
  }

  // Called after clicking the edit button on a Todo
  editTODO() {
    // TODO: Edit locally
    this.listService.editedTODO = this.todo;
    this.edition = true;
  }

  // Save edited Todo
  saveTODO() {
    // TODO: Save locally
    this.edition = false;
  }
}
