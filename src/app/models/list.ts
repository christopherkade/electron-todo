import { Todo } from './todo'

// A list contains a name and a list of TODOs
export class List {
  name: string = 'New List';
  todos: Todo[] = [];
  settings: boolean = false;

  constructor(name: string, todos: Todo[]) {
    this.name = name;
    this.todos = todos;
  }
}
