import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  users: User[] = [];

  ngOnInit(): void {
    this.httpService.getAllUsers().toPromise().then((users: User[]) => {
      this.users = users;
    }).catch((err) => console.error(err));
  }
}
