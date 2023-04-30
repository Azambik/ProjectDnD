import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse, HttpParams} from '@angular/common/http';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/api/users";
  private loginUrl = "http://localhost:8080/api/user/login";

  headers = new HttpHeaders().set('Conteent-Type', 'application/json');
  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router
    ) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  createUser(user: User): Observable<{}>{
    return this.http.post<User>(this.baseUrl,user);
  }

  signIn(user: User){
    console.log("hit");
    return this.http.post<any>(`${this.baseUrl}/signin`, user)
    .subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('access_token', res.userName/*res.token*/);
      //this.getUserProfile(res._id).subscribe((res) =>{
        this.currentUser = res.userName;
      //})
    })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      //this.router.navigate(['log-in']);
      console.log("logged out");
    }
  }
  /*// User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.baseUrl}/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }*/
 /* // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }*/
  isLogedIn(){
    return false;
  }
  get getCurrentUser(): string {
    let user = localStorage.getItem('access_token');
    return user;
  }
}