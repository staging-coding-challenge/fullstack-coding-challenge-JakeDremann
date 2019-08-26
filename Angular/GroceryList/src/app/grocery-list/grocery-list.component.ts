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
  items: [];

  constructor(private route: ActivatedRoute,
              private groceryListService: GrocerylistService,
              private groceryListsService: GroceryListsService) { }

  ngOnInit() {
    this.wallId = this.route.snapshot.params['id'];
    console.log(this.wallId);
    this.groceryListService.getItemsForList(this.wallId, resp => {
      this.items = JSON.parse(resp)
    });
    this.groceryListsService.getOne(this.wallId, resp => {
      this.wall = JSON.parse(resp);
    })
  }
}
