import {Component, OnInit} from '@angular/core';
import {DashboardComponent} from "../dashboard.component";
import {LoginService} from "../../login.service";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  loggedUserDetails = {
    username: "",
    password: "",
    mobile: "",
    address: "",
    dob: "",
    cpassword: ""
  }
  updateProfileForm!: FormGroup;

  constructor(private dashComp: DashboardComponent,
              private loginservice: LoginService,
              private toastr: ToastrService,
              private formBuilder: FormBuilder) {
    this.loggedUserDetails = this.dashComp.loggedUserDetails
  }


  updateUser() {
    this.loginservice.updateUserByUsername(this.loggedUserDetails.username, this.loggedUserDetails).subscribe(
      (resp) => {
        console.log("Updated")
        console.log(resp)
        this.toastr.success("Your profile updated", "Success")
      },
      (err) => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
    this.updateProfileForm = this.formBuilder.group({
      mobile: new FormControl("", Validators.required),
      dob: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required)


    })
  }
}
