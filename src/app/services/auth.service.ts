import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public getLoggedInName = new Subject(); 

  constructor(private http: HttpClient) {
  }

  getUserDetails() {
    return localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;
  }

  setDataInLocalStorage(variableName, data) {
    localStorage.setItem(variableName, data);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isUserLogin() {
    if (this.getUserDetails() != null) {
      return true;
    }
    return false;
  }

  send() {
    this.getLoggedInName.next('');
  }

  clearStorage() {
    localStorage.clear();
  }
 

}
