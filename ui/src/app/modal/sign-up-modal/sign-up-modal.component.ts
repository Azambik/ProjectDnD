import {Component,Input,OnInit,Output,EventEmitter,OnDestroy,} from '@angular/core';

  
  @Component({
    selector: 'app-sign-up-modal',
    templateUrl: './sign-up-modal.component.html',
    styleUrls: ['./sign-up-modal.component.css'],
  })
  export class SignUpModal implements OnInit, OnDestroy {
    constructor() {}
    @Input() title: string = '';
    @Input() body: string = '';
    @Output() closeMeEvent = new EventEmitter();
    @Output() confirmEvent = new EventEmitter();
    userName = ""
    ngOnInit(): void {
      console.log('Modal init');
    }
  
    closeMe() {
      this.closeMeEvent.emit();
    }
    confirm() {
      console.log(this.userName);
      this.confirmEvent.emit();
    }
    ngOnDestroy(): void {
      console.log(' Modal destroyed');
    }
  }