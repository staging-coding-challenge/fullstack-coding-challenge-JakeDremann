import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {items} from "../mockData/mockItems";
import {lists} from "../mockData/mockLists";


@Injectable({
  providedIn: 'root'
})
export class GrocerylistService {

  headers = new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded");

  constructor(private http: HttpClient) { }

  getItemsForList(list_id: number, callback){
    let urlString = "/api/grocery-list/lists/"+list_id;
    let x = this.http.get(urlString, {
      headers: this.headers,
      responseType: "text"
    }).subscribe( items => {
      callback(items)
    });
  }

  delete(item_id: number){
    let urlString = "/api/grocery-lists/items/"+item_id;
    let x = this.http.delete(urlString, {
      headers: this.headers,
      responseType: "text"
    }).subscribe();
  }

  deleteAll(list_id: number){
    let urlString = "/api/grocery-lists/"+ list_id + "/all";
    let x = this.http.delete(urlString, {
      headers: this.headers,
      responseType: "text"
    }).subscribe();
  }

  addItem(list_id: number, item: string, type: string){
    let urlString = "/api/grocery-list/"+list_id+"/items";
    let body = "list_id="+list_id+"&item="+item+"&type="+type;
    let x = this.http.post(urlString, body, {
      headers: this.headers,
      responseType: "text"
    }).subscribe();
  }
}
