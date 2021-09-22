import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private primeConfig: PrimeNGConfig) {}

  users: User[] = [];

  ngOnInit(): void {
    this.primeConfig.ripple = true;
  }
}
