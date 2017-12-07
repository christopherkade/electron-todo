import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { List } from '../../models/list'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  constructor(private listService: ListService) { }

  ngOnInit() {
    // Initialize our list from the service
    this.lists = this.listService.lists;
  }

  // Called when a list is selected
  listSelected(list: List) {
    console.log('Selected list ' + list.name)
    this.listService.selectedList = list;
  }

  // Lets our user create a list
  addList() {
    // TODO: Let our user create a list
  }
}