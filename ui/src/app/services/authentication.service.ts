import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { User } from '../models/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User [];
  validLogIn = false;
  logedInUser: string;
  constructor(
    private userService: UserService
  ) { }

  login(username: string, password: string): Observable<any> {
    this.userService.login(username,password).toPromise().then((validLogin: boolean) =>{
      this.validLogIn = validLogin;
      
    })
    console.log(this.validLogIn);
    if (this.validLogIn) {
      console.log("logged in");
      localStorage.setItem("token", username);
      return of(new HttpResponse({ status: 200 }));
    } else {
      return of(new HttpResponse({ status: 401 }));
    }
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem("token") != null) {
      return true;
    }
    return false;
  }
  getLogedinUserName(): string{
    if(this.isUserLoggedIn){
      return localStorage.getItem("token");
    }
    return "none"
  }
}