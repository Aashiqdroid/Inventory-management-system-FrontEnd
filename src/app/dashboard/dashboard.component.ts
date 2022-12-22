import {Component, OnInit, ViewChild} from '@angular/core';
import {Item} from "../item";
import {ItemService} from "../item.service";
import {LoginService} from "../login.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatButton} from "@angular/material/button";
import {User} from "../user";
import {SharedService} from "../shared/shared.service";
import {ToastrService} from "ngx-toastr";

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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  item: Item = new Item();
  itemDets: any;

  loggedUser:User=new User();

  itemToUpdate = {
    id:"",
    itemName:"",
    type:"",
    price:"",
    itemBrand:"",
    expiryDate:""
  }
  userToUpdate = {
    id:"",
    username:"",
    mobile:"",
    address:"",
    password:"",
    dob:"",
    cpassword:""
  }
  dataSource!: MatTableDataSource<UserData>

  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort
  posts:any;
  displayedColumn: String[]=['id','name','type','brand','price','expiry','delete','edit'];

  constructor(private itemservice: ItemService,private loginService:LoginService,
              private shared:SharedService,private toastr:ToastrService) {
    this.getItems();
  }
  loggedUserDetails ={
    username:"",
    password:"",
    mobile:"",
    address:"",
    dob:"",
    cpassword:""
  }
  ngOnInit(): void {
    this.loggedUserDetails=this.shared.getUserDetails();
    //this.updateUser();
  }
  getItems() {
    this.itemservice.getItem().subscribe(
      (resp) => {
        console.log(resp);
        this.itemDets = resp;
        this.posts=resp;
        this.dataSource=new MatTableDataSource(this.posts);
        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort
      },
      error => {
        console.log(error);
      }
    )
  }
  deleteItems(x: any) {
    this.itemservice.deleteItem(x.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getItems();
        this.toastr.info("Item has been deleted","Deleted")
      },
      error => {
        console.log(error);
      }
    )
  }
  editItems(x: any) {
    this.itemToUpdate=x;
  }
  logout() {
    this.loginService.isLogged=false;
  }
  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase()
    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
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

  updateUser() {
    this.loginService.updateUserByUsername(this.loggedUserDetails.username,this.loggedUserDetails).subscribe(
      (resp)=>{
        console.log("Updated")
        console.log(resp)
        this.toastr.success("Your profile updated","Success")
      },
      (err)=>{
        console.log(err)
      }
      )
  }
}
