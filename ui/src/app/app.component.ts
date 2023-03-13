import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { User } from './models/User';
import { HttpService } from './services/http.service';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { SignUpModalService } from './services/modal-service/signup-modal.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private httpService: HttpService, 
    private primeConfig: PrimeNGConfig,
    private signUpModalService: SignUpModalService,
    private userService: UserService) {}

    @ViewChild('modal', { read: ViewContainerRef })
    entry!: ViewContainerRef;
    sub!: Subscription;
  

  users?: User[] = [];
  firstName!: string;
  lastName!: string;
  userName!: string;
  email!: string;
  passWord!: string;

  ngOnInit(): void {
    this.primeConfig.ripple = true;

    /*this.httpService.getAllUsers().toPromise().then((users: User[] | undefined) => {
      this.users = users;
    }).catch((err) => console.error(err));*/
  }

  openModal() {
    this.sub = this.signUpModalService
      .openModal(this.entry, 'Sign up', '')
      .subscribe((v) => {
        //your logic
      });
    }
    ngOnDestroy(): void {
      if (this.sub) this.sub.unsubscribe();
    }
    test():void{
      this.userService.getUsers().subscribe((data: User[]) => {
        console.log(data);
        this.users = data;
      })
    }
    createUser(){
      const user : User = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        userName: this.userName,
        passWord: this.passWord

      }
      this.userService.createUser(user).subscribe();
    }

}