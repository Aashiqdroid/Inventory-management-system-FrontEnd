import {Injectable} from '@angular/core';
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  userDetails: any;

  setUserDetails(userDeatils: any) {
    this.userDetails = userDeatils;
  }

  getUserDetails() {
    return this.userDetails;
  }


  user: User = new User();
  username: String = "";


  constructor() {
  }

  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  setUsername(username: String) {
    this.username = username
  }

  getUsername() {
    return this.username;
  }


}
