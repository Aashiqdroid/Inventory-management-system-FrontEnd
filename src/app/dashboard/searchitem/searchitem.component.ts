import {Component, OnInit, ViewChild} from '@angular/core';
import {Item} from "../../item";
import {ItemService} from "../../item.service";
import {MatButton} from "@angular/material/button";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ToastrModule, ToastrService} from "ngx-toastr";

export interface UserData{
  id:String,
  itemName:String,
  type:String,
  price:String,
  itemBrand:String,
  expiryDate:String,
  delete:MatButton,
  edit:MatButton
}
@Component({
  selector: 'app-searchitem',
  templateUrl: './searchitem.component.html',
  styleUrls: ['./searchitem.component.css']
})

export class SearchitemComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort

  dataSource!: MatTableDataSource<UserData>
  displayedColumn: String[]=['id','name','type','brand','price','expiry','delete','edit'];
  filterItems: any;

  itemToUpdate = {
    id:"",
    itemName:"",
    type:"",
    price:"",
    itemBrand:"",
    expiryDate:""
  }



  constructor(private itemservice: ItemService,private toastr:ToastrService) {

  }
  item:Item=new Item();

  fetchedItems:any;

  isFound: boolean=false;

  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase()
    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
  }

  fetchItems() {

    this.itemservice.filterItems(this.item.itemName,this.item.itemBrand).subscribe(

      (resp)=>{
        if (resp!=null){
          console.log(resp)
          this.isFound=true;
          this.fetchedItems=resp;
          this.dataSource=new MatTableDataSource(this.fetchedItems);
          this.dataSource.paginator=this.paginator
          this.dataSource.sort=this.sort

        }
        else {
          this.isFound=false;
        }

        },
      (err)=>{

      }

    )
  }
  deleteItems(x: any) {
    this.itemservice.deleteItem(x.id).subscribe(
      (resp) => {
        console.log(resp);
        this.toastr.info("Item has been deleted","Deleted")
        this.fetchedItems()
      },
      error => {
        console.log(error);
      }
    )
  }
  update() {
    this.itemservice.editItem(this.itemToUpdate.id,this.itemToUpdate).subscribe(
      (resp)=>{
        console.log("updated")
        this.toastr.success("Item has been updated","Success")
      },
      (err)=>{
        console.log(err)
      }
    )
  }
  editItems(x: any) {
    this.itemToUpdate=x;
  }

  ngOnInit(): void {

    this.fetchedItems()


  }
}
