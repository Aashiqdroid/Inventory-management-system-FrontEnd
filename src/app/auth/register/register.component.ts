import {Component, OnInit} from '@angular/core';
import {User} from "../../user";
import {RegisterService} from "../../register.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {addressValidator, passwordValidatorForCheckCpassword, phoneNumberValidator} from "src/app/formValidator"
import {passwordValidator} from "src/app/formValidator"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide=true;
  alert = "";
  passwordAlert="";
  userExistsAlerts='';
  user: User = new User();
  showPassword= true;
  myForm !: FormGroup;

  constructor(private registerService: RegisterService,
              private router: Router,
              private formbuilder:FormBuilder,
              private toastr:ToastrService) {
  }

  ngOnInit(): void {
    this.myForm= this.formbuilder.group({
      username:["",Validators.required],
      password:["",passwordValidator],
      retypepassword:["",passwordValidatorForCheckCpassword],
      mobile:["",phoneNumberValidator],
      address:["",addressValidator],
      dob:new FormControl("",Validators.required)

  })
    this.myForm.controls['password'].valueChanges.subscribe(
      x=> this.myForm.controls['retypepassword'].updateValueAndValidity()
    )
  }


  userRegistration() {

    if (this.user.username != null && this.user.password != null && this.user.cpassword != null &&
      this.user.dob != null && this.user.mobile != null && this.user.address != null) {

      if (this.user.password == this.user.cpassword) {
        this.registerService.registerUser(this.user).subscribe(data => {
          console.log("Registration success");
          this.router.navigate(['/auth/login']);

        }, error => {this.userExistsAlerts="User already exists, please try login";
        this.alert="";
        this.passwordAlert="";
        })


      } else {
        this.toastr.info("Password and confirm password did not match")
      }

    } else {

      console.log("Please enter values");
      this.alert = "Please enter values";
      this.passwordAlert="Password must contain 8 or more characters in length"

    }


  }

}
