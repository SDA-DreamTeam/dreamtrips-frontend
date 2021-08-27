import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public getLoggedInName = new Subject(); 

  baseUrl = 'http://localhost:8080/';

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
