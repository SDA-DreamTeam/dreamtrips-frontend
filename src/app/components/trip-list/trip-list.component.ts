import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/model/trip.model';
import { TripServiceService } from 'src/app/trip-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trips: Trip[] = []
  isLogin: boolean = false
  isCustomer: boolean = false
  isAdmin: boolean = false

  constructor(
    private router: Router,
    private tripService: TripServiceService,
    private route: ActivatedRoute,
    private auth: AuthService) {
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
    this.findTrips();
  }

  getSuggestionTrips() {
    this.tripService.getSuggestionTrips().subscribe(data => {
      this.trips = []
      data.content.forEach((element) => {
        this.trips.push({
          id: element.id,
          toAirport: element.toAirport.name,
          toCity: element.toAirport.city.name,
          toCountry: element.toAirport.city.country.name,
          departureDate: element.departureDate
        })
      });
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

  isUserAdmin() {
    if (this.auth.getUserDetails() == null) {
      return false;
    }
    if (this.auth.getUserDetails()['role'] == 'ADMIN') {
      return true;
    }
    return false;
  }


  findTrips() {
    this.route.queryParams
      .subscribe(params => {
        this.tripService.findTrips(params['fromCountry'], params['toCountry'], params['departureDate']).subscribe((res: any) => {
          this.trips = []
          res.content.forEach((element) => {
            this.trips.push({
              id: element.id,
              fromAirport: element.fromAirport.name,
              toAirport: element.toAirport.name,
              toCity: element.toAirport.city.name,
              toCountry: element.toAirport.city.country.name,
              departureDate: element.departureDate
            })
          });
        }, err => {
          console.log(err);
        });
      });
  }

  onTripSearch(data) {
    this.router.navigate(['/trip-list'], {
      relativeTo: this.route,
      queryParams: data,
      queryParamsHandling: 'merge'
    });
  }


}

