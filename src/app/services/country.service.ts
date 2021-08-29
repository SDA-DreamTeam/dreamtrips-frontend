import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import { Country } from '../model/country.model';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  baseUrl= environment.apiUrl;


  constructor(private httpClient: HttpClient) {
  }

  getAllCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.baseUrl+"/countries");
  }
}
