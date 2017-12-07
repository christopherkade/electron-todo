export class Todo {
  name: string = 'New TODO';
  description: string;
  done: boolean = false;
  edited: boolean = false;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
