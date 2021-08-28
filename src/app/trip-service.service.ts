import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  findTrips(fromCountry, toCountry, departureDate): Observable<any> {
    if (fromCountry == null) {
      fromCountry=""
    }
    if (toCountry == null) {
      toCountry=""
    }
    if (departureDate == null) {
      departureDate=""
    }
    let params = new HttpParams()
      .set("fromCountryId", fromCountry)
      .set("toCountryId", toCountry)
      .set("departureDate", departureDate);
    return this.http.get(`${this.url}`, { params: params });
  }

  getTrip(id): Observable<any> {
    return this.http.get(`${this.url}`+"/"+id);
  }

}