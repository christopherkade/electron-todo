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

  getLists() {
    console.log('Getting lists for our user...');
  }

  createFakeLists() {
    const todo = new Todo('Do this', 'Dont forget that');
    const todo2 = new Todo('Do that', 'Yes, dont forget that !');
    const list = new List('List 01', [todo, todo2]);
    this.lists.push(list);

    const todo = new Todo('Do this', 'Ayy');
    const todo2 = new Todo('Do that', 'Lmao');
    const list = new List('List 02', [todo, todo2]);
    this.lists.push(list);
  }
}
