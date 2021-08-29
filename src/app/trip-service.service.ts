import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripServiceService {


  private baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl
  }

  getSuggestionTrips(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + "/trips/suggestions");
  }

  findTrips(fromCountry, toCountry, departureDate): Observable<any> {
    if (fromCountry == null) {
      fromCountry = ""
    }
    if (toCountry == null) {
      toCountry = ""
    }
    if (departureDate == null) {
      departureDate = ""
    }
    let params = new HttpParams()
      .set("fromCountryId", fromCountry)
      .set("toCountryId", toCountry)
      .set("departureDate", departureDate);
    return this.http.get(`${this.baseUrl}`+"/trips", { params: params });
  }

  getTrip(id): Observable<any> {
    return this.http.get(`${this.baseUrl}` + "/trips/" + id);
  }

}

