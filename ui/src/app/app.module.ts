import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SignUpModal } from './modal/sign-up-modal/sign-up-modal.component';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DividerModule} from 'primeng/divider';
import { LoginModal } from './modal/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpModal,
    LoginModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    FormsModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    DividerModule
    
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
  entryComponents: [SignUpModal]
})
export class AppModule { }
