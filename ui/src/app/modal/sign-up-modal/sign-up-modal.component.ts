import {Component,Input,OnInit,Output,EventEmitter,OnDestroy,} from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

  
  @Component({
    selector: 'app-sign-up-modal',
    templateUrl: './sign-up-modal.component.html',
    styleUrls: ['./sign-up-modal.component.css'],
  })
  export class SignUpModal implements OnInit, OnDestroy {
    constructor(
      public ref: DynamicDialogRef, 
      public config: DynamicDialogConfig,
      private userService: UserService
    ) {}
    userRef?: User[] = []
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    passWord?: string
    isDisabled=false;
    
    ngOnInit(): void {
      this.userService.getUsers().subscribe((data: User[]) => {
        console.log(data);
        this.userRef = data;
      })
    }
    ngOnDestroy(): void {
     
    }
  
    closeMe() {
      this.ref.close();
    }
    confirm() {
      const newUser : User = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        userName: this.userName,
        passWord: this.passWord
      }
      this.ref.close(newUser);
    }
    
  }