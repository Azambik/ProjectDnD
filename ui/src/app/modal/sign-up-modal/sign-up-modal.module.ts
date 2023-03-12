import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpModal } from './sign-up-modal.component';
import { PasswordModule } from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';




@NgModule({
  declarations: [SignUpModal],
  imports: [
    CommonModule,
    PasswordModule,
    ButtonModule,
    InputTextModule
  ]
})
export class SignUpModalModule { }
