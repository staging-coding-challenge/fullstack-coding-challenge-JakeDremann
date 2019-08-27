import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GrocerylistService} from "../services/grocerylist.service";
import {GroceryListsService} from "../services/grocery-lists.service";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  mockId = -1;
  listId: number;
  wall;
  items = [];

  constructor(private route: ActivatedRoute,
              private groceryListService: GrocerylistService,
              private groceryListsService: GroceryListsService) { }

  ngOnInit() {
    this.listId = this.route.snapshot.params['id'];
    this.groceryListService.getItemsForList(this.listId, resp => {
      this.items = JSON.parse(resp);
      this.setMockID()
    });
    this.groceryListsService.getOne(this.listId, resp => {
      this.wall = JSON.parse(resp);
    })
  }

  deleteItem(item_id: number){
    let newItems = [];
    for (let item of this.items){
      if (item.item_id != item_id && item.list_id == this.listId){
        newItems.push(item)
      }
    }
    this.items = newItems;
    this.groceryListService.delete(item_id);
  }

  createItem(){
    let type = (<HTMLInputElement> document.getElementById("type")).value;
    let item = (<HTMLInputElement> document.getElementById("item")).value;
    this.mockId = this.mockId + 1;
    let newItem = {'item_id':this.mockId, 'list_id': this.listId, 'item': item, 'type': type};
    this.items.push(newItem);
    this.groceryListService.addItem(this.listId, item, type)
  }

  setMockID() {
    let temp = -1;
    for (let item of this.items) {
      if (item.list_id > temp) {
        this.mockId = item.list_id
      }
    }
  }
}
