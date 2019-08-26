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

  wallId: number;
  wall;
  items: [] = [];

  constructor(private route: ActivatedRoute,
              private groceryListService: GrocerylistService,
              private groceryListsService: GroceryListsService) { }

  ngOnInit() {
    this.wallId = this.route.snapshot.params['id'];
    this.groceryListService.getItemsForList(this.wallId, resp => {
      this.items = JSON.parse(resp)
    });
    this.groceryListsService.getOne(this.wallId, resp => {
      this.wall = JSON.parse(resp);
    })
  }

  deleteItem(item_id: number, event){
    this.groceryListService.delete(item_id);
    let elem = document.querySelector("#"+item_id);
    elem.parentNode.removeChild(elem)
    event.stopImmediatePropagation();
  }
}
