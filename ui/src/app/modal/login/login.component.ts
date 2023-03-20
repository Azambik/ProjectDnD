import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginModal implements OnInit, OnDestroy  {
 
  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private authenticationService: AuthenticationService) { }

  userName: string;
  passWord: string

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  login(): void {
    this.authenticationService.login(this.userName,this.passWord).subscribe();
    this.ref.close();
  }
  closeMe() {
    this.ref.close();
  }
}
