import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";
import {Item} from "./item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseURL = "http://localhost:8082/item/";
  private baseURL2 = "http://localhost:8082/item/filter";
  private baseURL3 = "http://localhost:8082/item/search";


  constructor(private httpClient: HttpClient) {

  }
  addItem(item: Item): Observable<object> {

    return this.httpClient.post(`${this.baseURL}`, item);

  }
  getItem(){
    return this.httpClient.get(this.baseURL);
  }
  deleteItem(id:String){
    return this.httpClient.delete(this.baseURL+id);
  }
  editItem(id:String,item:Item){
    return this.httpClient.put(this.baseURL+id,item);
  }
  filterItems(itemName:String,itemBrand:String){
    return this.httpClient.get(this.baseURL3+"?name="+itemName+"&"+"brand="+itemBrand);
  }



}
