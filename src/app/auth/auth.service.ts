import {Injectable} from "@angular/core";
import {delay, of} from "rxjs";
import {LoginComponent} from "./login/login.component";
import {LoginService} from "../login.service";
import {AuthComponent} from "./auth.component";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private loginService:LoginService) {


  }

  isLoggedIn() {

    return of(this.loginService.isLogged).pipe(delay(500));

  }
}
