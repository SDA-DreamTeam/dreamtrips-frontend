import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/model/trip.model';
import { AuthService } from 'src/app/services/auth.service';
import { TripDetailsComponent } from '../trip-details/trip-details.component';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})


export class PurchaseFormComponent implements OnInit {

  count1: number = 0;
  count2: number = 0;
  isLogin: boolean = false
  isCustomer: boolean = false
  isAdmin: boolean = false

  constructor(
    private auth: AuthService
  ) {
    this.isLogin = this.isUserLogin();
    this.isCustomer = this.isUserCustomer();
    this.isAdmin = this.isUserAdmin();
    this.auth.getLoggedInName.subscribe(name => {
      this.isLogin = this.isUserLogin();
      this.isCustomer = this.isUserCustomer();
      this.isAdmin = this.isUserAdmin();
    });
  }

  ngOnInit(): void {
    this.count1 = 0;
    this.count2 = 0;
  }

  addCount1() {
    this.count1++;
  }

  addCount2() {
    this.count2++;
  }

  subCount1() {
    if (this.count1 != 0) {
      this.count1--;
    }
  }

  subCount2() {
    if (this.count2 != 0) {
      this.count2--;
    }
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

  isUserAdmin() {
    if (this.auth.getUserDetails() == null) {
      return false;
    }
    if (this.auth.getUserDetails()['role'] == 'ADMIN') {
      return true;
    }
    return false;
  }



}


