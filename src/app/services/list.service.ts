import { Injectable } from '@angular/core';
import { List } from '../models/list';
import { Todo } from '../models/todo';

@Injectable()
export class ListService {
  lists: List[] = [];
  selectedList: List = null;

  constructor() {
    this.createFakeLists();

    if (this.lists.length > 0) {
      this.selectedList = this.lists[0];
    }
  }

  // Mocks a set of lists & todos
  createFakeLists() {
    let todo = new Todo('Do this', 'Dont forget that');
    let todo2 = new Todo('Do that', 'Yes, dont forget that !');
    let todo3 = new Todo('Do that', 'Yes, dont forget that !');
    let list = new List('List 01', [todo, todo2, todo3]);
    this.lists.push(list);

    todo = new Todo('Do this', 'Ayy');
    todo2 = new Todo('Do that', 'Lmao');
    list = new List('List 02', [todo, todo2]);
    this.lists.push(list);
  }
}
