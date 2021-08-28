import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import { Country } from '../model/country.model';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries = '/country/all';
  private url = 'http://localhost:8080/countries';

  constructor(private httpClient: HttpClient) {
  }

  getAllCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.url);
  }
}
