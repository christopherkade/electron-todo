import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { List } from '../../models/list'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  constructor(public listService: ListService) { }

  ngOnInit() {}

  // Called when a list is selected
  listSelected(list: List) {
    this.listService.selectedList = list;
  }

  // Lets our user create a list
  addList() {
    // Create a new List with an empty array of Todos
    this.listService.lists.push(new List('New List', []));

    console.log(this.listService.lists.length);
    // Set selected list to the newly created one
    this.listService.selectedList = this.listService.lists[this.listService.lists.length - 1];
  }
}
