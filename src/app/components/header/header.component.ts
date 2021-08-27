import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean = false
  isCustomer: boolean = false

  constructor(
    private auth: AuthService
  ) { 
    this.isLogin = this.isUserLogin();
    this.isCustomer = this.isUserCustomer();
    this.auth.getLoggedInName.subscribe(name => {
      this.isLogin = this.isUserLogin();
      this.isCustomer = this.isUserCustomer();
    });
  }

  isUserLogin() {
    if (this.auth.getUserDetails() != null) {
      return true;
    }
    return false;
  }

  isUserCustomer() {
    if (this.auth.getUserDetails() == null) {
      return false;
    }
    if (this.auth.getUserDetails()['role'] == 'CUSTOMER') {
      return true;
    }
    return false;
  }

  ngOnInit(): void {

  }

}
