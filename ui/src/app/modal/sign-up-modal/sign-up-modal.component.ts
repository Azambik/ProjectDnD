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
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    passWord: string;
    isDisabled = true;
    validFirstName = false;
    validLastName = false;
    validUserName = false;
    validEmail = false;
    validPassword = false;
    
    ngOnInit(): void {}
    ngOnDestroy(): void {}
  
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
    validateinput(field: string){
      if( field == "firstName" ){
        console.log(this.firstName);
        this.validFirstName =  this.firstName.length >= 1;
      }
      if( field == "lastName" ){
        this.validLastName = this.lastName.length >= 1;
      }
      if( field == "userName"){
        this.validUserName = this.userName.length >= 8;
      }
      if( field == "email"){
        let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        this.validEmail = regex.test(this.email);
      }
      if( field == "passWord" && this.passWord.length >= 8){
        let regex = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
        this.validPassword = regex.test(this.passWord);
      }else{
        this.validPassword = false;
      }
      this.enableSubmit();
    }

    enableSubmit(){
      if(this.validFirstName || this.validLastName || this.validUserName || this.validEmail || this.validPassword){
        this.isDisabled = false;
      }
    }
    
  }