import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {GroceryListsService} from "../services/grocery-lists.service";
import {GrocerylistService} from "../services/grocerylist.service";

@Component({
  selector: 'app-grocery-lists',
  templateUrl: './grocery-lists.component.html',
  styleUrls: ['./grocery-lists.component.css']
})
export class GroceryListsComponent implements OnInit {

  lists = [];
  mockID: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groceryListsService: GroceryListsService,
    private groceryListService: GrocerylistService
  ) { }

  ngOnInit() {
    this.groceryListsService.getAll(resp => {
      this.lists = JSON.parse(resp);
      this.setMockID()
    });
  }

  toDetail(list_id: number){
    let toUrl = "/list/"+list_id;
    this.router.navigate([toUrl])
  }

  delete(list_id: number){
    let newList = [];
    for (let list of this.lists){
      if (list.list_id != list_id){
        newList.push(list)
      }
    }
    this.lists = newList;
    this.groceryListsService.delete(list_id);
    this.groceryListService.delete(list_id);
  }

  create(){
    let name = (<HTMLInputElement> document.getElementById("name")).value;
    let description = (<HTMLInputElement> document.getElementById("desc")).value;
    this.mockID = this.mockID + 1;
    let newList = {'list_id': this.mockID, 'list_name':name, 'list_description': description};
    this.lists.push(newList);
    console.log(this.lists);
    this.groceryListsService.createGroceryList(name, description)
  }

  setMockID() {
    let temp = -1;
    for (let list of this.lists) {
      if (list.list_id > temp) {
        this.mockID = list.list_id
      }
    }
  }
}
