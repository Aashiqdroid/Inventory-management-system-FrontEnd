import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";
import {LoginComponent} from "./auth/login/login.component";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged: boolean = false;
  loggedUser:User=new User();
  private baseURL = "http://localhost:8081/user/login";
  private GETusernameURL="http://localhost:8081/user/"

  constructor(private httpClient: HttpClient) {

  }

  loginUser(user: User): Observable<object> {
    //this.loggedUserName=this.loginComp.userName;
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  getLoggedUserDetails(username:String){
    return this.httpClient.get(`${this.GETusernameURL}`+username)
  }

  updateUser(id:String,user:User){
    return this.httpClient.put(this.GETusernameURL+id,user)
  }
  updateUserByUsername(username:String,user:User){
    return this.httpClient.put(this.GETusernameURL+"username/"+username,user)
  }
}
