import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripServiceService {

  private url = 'http://localhost:8080/trips';

  constructor(private http: HttpClient) {
  }

  getSuggestionTrips(): Observable<any> {
    return this.http.get(`${this.url}`+"/suggestions");
  }

  getTrip(id): Observable<any> {
    return this.http.get(`${this.url}`+"/"+id);
  }

}