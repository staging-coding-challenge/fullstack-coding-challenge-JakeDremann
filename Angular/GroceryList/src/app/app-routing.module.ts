import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroceryListsComponent} from "./grocery-lists/grocery-lists.component";
import {GroceryListComponent} from "./grocery-list/grocery-list.component";


const routes: Routes = [
  { path: '', component: GroceryListsComponent},
  { path: 'list/:id', component: GroceryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
