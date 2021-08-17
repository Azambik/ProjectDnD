import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxModule } from 'primeng/checkbox'

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CheckboxModule
  ]
})
export class LoginModule { }
