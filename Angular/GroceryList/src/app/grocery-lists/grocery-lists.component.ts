import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {GroceryListsService} from "../services/grocery-lists.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-grocery-lists',
  templateUrl: './grocery-lists.component.html',
  styleUrls: ['./grocery-lists.component.css']
})
export class GroceryListsComponent implements OnInit {

  lists: [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groceryListService: GroceryListsService
  ) { }

  ngOnInit() {
    this.groceryListService.getAll(resp => {
      this.lists = JSON.parse(resp);
    })
  }

  toDetail(list_id: number){
    let toUrl = "/list/"+list_id;
    this.router.navigate([toUrl])
  }

  delete(list_id: number){
    this.groceryListService.delete(list_id);
  }
}
