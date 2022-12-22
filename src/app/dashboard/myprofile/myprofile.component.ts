import { Component } from '@angular/core';
import {DashboardComponent} from "../dashboard.component";

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {

  loggedUserDetails ={
    username:"",
    password:"",
    mobile:"",
    address:"",
    dob:"",
    cpassword:""
  }


  constructor(private dashComp:DashboardComponent) {
    this.loggedUserDetails=this.dashComp.loggedUserDetails;
  }



}
