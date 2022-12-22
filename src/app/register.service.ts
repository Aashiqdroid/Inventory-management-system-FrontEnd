import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseURL = "http://localhost:8081/user";

  constructor(private httpClient: HttpClient) {
  }

  registerUser(user: User): Observable<object> {

    return this.httpClient.post(`${this.baseURL}`, user);

  }



}
