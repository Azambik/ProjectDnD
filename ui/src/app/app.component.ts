import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { User } from './models/User';
import { HttpService } from './services/http.service';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { SignUpModal } from './modal/sign-up-modal/sign-up-modal.component';
import { LoginModal } from './modal/login/login.component';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private httpService: HttpService, 
    private primeConfig: PrimeNGConfig,
    private dialogService: DialogService,
    private userService: UserService,
    private authenticationService: AuthenticationService) {}

    @ViewChild('modal', { read: ViewContainerRef })
    entry!: ViewContainerRef;
    sub!: Subscription;
  
  ref: DynamicDialogRef;
  users?: User[];
  firstName!: string;
  lastName!: string;
  userName!: string;
  email!: string;
  passWord!: string;
  logedIn: boolean;

  ngOnInit(): void {
    this.primeConfig.ripple = true;
  }
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  openSignUpModal() {
    this.ref = this.dialogService.open(SignUpModal, 
      {
        header: 'Sign up',
        showHeader:false,
        width: '25vw',
        contentStyle: { 
        'height': '75vh',
        "background-color": "rgb(52, 52, 53)", 
        "border-radius": "25px",
        "overflow": "hidden",
        seZIndex: 10000,
      }   
      });
      this.ref.onClose.subscribe((user: User) =>{
        if(user){
         this.userService.createUser(user).subscribe();
        }
      })
    }
    
    openLogInModal() {
      this.ref = this.dialogService.open(LoginModal, 
        {
          header: 'Sign up',
          showHeader:false,
          width: '25vw',
          contentStyle: { 
          'height': '25vh',
          "background-color": "rgb(52, 52, 53)", 
          "border-radius": "25px",
          "overflow": "hidden",
          seZIndex: 10000,
        }   
        });
        this.ref.onClose.subscribe(() =>{
          this.logedIn = this.authenticationService.isUserLoggedIn();
        })
      }
    
    signOut(){
      this.authenticationService.logout();
      this.logedIn = false;
    }
    test(){
     console.log(this.authenticationService.getLogedinUserName());
    }
}