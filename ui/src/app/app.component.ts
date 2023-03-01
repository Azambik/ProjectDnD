import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { User } from './models/User';
import { HttpService } from './services/http.service';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ModalService } from '../app/services/modal-service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private httpService: HttpService, 
    private primeConfig: PrimeNGConfig,
    private modalService: ModalService) {}

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
    this.sub = this.modalService
      .openModal(this.entry, 'Are you sure ?', 'click confirm or close')
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