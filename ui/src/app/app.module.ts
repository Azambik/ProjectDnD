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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { CardModule } from 'primeng/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForumLandingComponent } from './modules/forum-landing/forum-landing.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    SignUpModal,
    LoginModal,
    ForumLandingComponent
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
    DividerModule,
    CardModule,
    FontAwesomeModule,
    TabViewModule,
    TableModule
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    DialogService
  ],
  bootstrap: [AppComponent],
  entryComponents: [SignUpModal]
})
export class AppModule { }
