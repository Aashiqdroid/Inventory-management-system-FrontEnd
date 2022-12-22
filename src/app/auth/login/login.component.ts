import {Component, OnInit} from '@angular/core';
import {User} from "../../user";
import {LoginService} from "../../login.service";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {SharedService} from "../../shared/shared.service";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  isLogged:boolean=false;
  loginForm!: FormGroup;

  constructor(private loginService: LoginService,
              private router: Router,private shared:SharedService,
              private toastr:ToastrService,
              private formbuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm= this.formbuilder.group({
      username:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required)

    })
  }

  userLogsIn(){
    this.loginService.getLoggedUserDetails(this.shared.username).subscribe(
      data=>{
        console.log("Userlogsin")
        console.log(data)
        this.shared.setUserDetails(data);
      }
    )
  }

  userLogin() {
    this.loginService.loginUser(this.user).subscribe(
      data => {
        console.log(data);
        console.log(this.user.username);
        this.loginService.isLogged=true;
        this.router.navigate(['/dashboard']);
        this.shared.setUser(this.user)
        this.shared.setUsername(this.user.username)

        this.userLogsIn();


      }, error => this.toastr.error("Username and password are incorrect","Error"));


  }

  onClickForgotPassword() {
    if (this.user.username==null){
      this.toastr.error("Please enter the username","Warning")
    }else {
      this.toastr.info("Confirm the mail we have send to you","Mail send")
    }
  }
}
