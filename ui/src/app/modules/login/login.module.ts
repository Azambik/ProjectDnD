import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CheckboxModule } from 'primeng/checkbox'
import { ButtonModule } from 'primeng/button'

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CheckboxModule,
    HttpClientModule,
    FormsModule,
    ButtonModule
  ]
})
export class LoginModule { }
