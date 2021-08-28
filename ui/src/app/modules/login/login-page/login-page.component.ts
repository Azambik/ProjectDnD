import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Login } from 'src/app/models/Login';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  readonly loginUrl: string =
    environment.serverAddress + ':' +
    environment.serverPort +
    '/user/login';
  
    usersLogin: Login = {
    email: '',
    password: '',
    username: ''
  }

  constructor(private httpClient: HttpClient) { }

  login(): void {
    this.httpClient.post<any>
    (this.loginUrl, {login: JSON.stringify(this.usersLogin)})
    .toPromise().then((response: any) => {
      console.log(response);
    }).catch(err => console.log(err));
  }
}
