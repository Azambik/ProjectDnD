import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpModal } from './sign-up-modal.component';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SignUpModal
  ],
  imports: [
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CommonModule,
    PasswordModule,
    FormsModule
  ]
})
export class SignUpModalModule { }
