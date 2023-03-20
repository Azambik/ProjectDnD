import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/api/users";
  private loginUrl = "http://localhost:8080/api/user/login";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  createUser(user: User): Observable<{}>{
    return this.http.post<User>(this.baseUrl,user);
  }
  login(userName: string, passWord: string): Observable<boolean>{
    //const user =  JSON.parse(JSON.stringify(userName+","+passWord));
   // const params = new HttpParams({
      //fromObject: user,
   // });
   const params = new HttpParams()
   .set("userName",userName)
   .set("passWord", passWord)
    console.log(params);
    return this.http.get<boolean>(this.loginUrl,{params});
  } 
}