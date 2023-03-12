import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { User } from './models/User';
import { HttpService } from './services/http.service';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { SignUpModalService } from './services/modal-service/signup-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private httpService: HttpService, 
    private primeConfig: PrimeNGConfig,
    private signUpModalService: SignUpModalService) {}

    @ViewChild('modal', { read: ViewContainerRef })
    entry!: ViewContainerRef;
    sub!: Subscription;
  

  users?: User[] = [];

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
      console.log("test");
    }

}