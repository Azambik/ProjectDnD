import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginModal implements OnInit, OnDestroy  {
 
  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private userService: UserService) { }

  userName: string;
  passWord: string

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  login(): void {
    const user : User = {
      userName: this.userName,
      passWord: this.passWord
    }
    this.userService.signIn(user)
    this.ref.close();
  }
  closeMe() {
    this.ref.close();
  }
}
