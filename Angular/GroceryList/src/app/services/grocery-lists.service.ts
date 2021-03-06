import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GroceryListsService {

  headers = new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded");
  constructor(private http: HttpClient) { }

  createGroceryList(name: string, description: string){
    let urlString = "/api/grocery-lists";
    let body = "name="+name+"&description="+description;
    this.http.post(urlString, body, {
      headers: this.headers,
      responseType: "text"
    }).subscribe();
  }

  getAll(callback){
    let urlString = "/api/grocery-lists";
    let x = this.http.get(urlString, {
      headers: this.headers,
      responseType: "text"
    }).subscribe(lists => {
      callback(lists)
    });
  }

  getOne(id: number, callback){
    let urlString = "/api/grocery-lists/"+id;
    let x = this.http.get(urlString, {
      headers: this.headers,
      responseType: "text"
    }).subscribe( list => {
      callback(list)
    });

    return x;
  }

  delete(list_id: number){
    let urlString = "/api/grocery-lists/"+list_id;
    let x = this.http.delete(urlString, {
      headers: this.headers,
      responseType: "text"
    }).subscribe();
  }
}
