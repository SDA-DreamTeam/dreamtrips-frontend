import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getTypeRequest(url) {
    
    let headers = new HttpHeaders();
    let token = this.auth.getToken();
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }

    return this.http.get(
        `${this.baseUrl}${url}`, { headers: headers }
      ).pipe(map(res => {
          return res;
        })
      );
  }

  postTypeRequest(url, payload) {
    
    return this.http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }

  putTypeRequest(url, payload) {
    return this.http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }
}
