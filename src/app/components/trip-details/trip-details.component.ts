import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/app/model/trip.model';
import { AuthService } from 'src/app/services/auth.service';
import { TripServiceService } from 'src/app/trip-service.service';


@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

  trip: Trip;
  id: number;
  isLogin: boolean = false
  isCustomer: boolean = false
  isAdmin: boolean = false

  constructor(private route: ActivatedRoute, private tripService: TripServiceService, private auth: AuthService) {
    this.isLogin = this.isUserLogin();
    this.isCustomer = this.isUserCustomer();
    this.isAdmin = this.isUserAdmin();
    this.auth.getLoggedInName.subscribe(name => {
      this.isLogin = this.isUserLogin();
      this.isCustomer = this.isUserCustomer();
      this.isAdmin = this.isUserAdmin();
    });
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
        this.tripService.getTrip(this.id).subscribe(data => {
          this.trip = new Trip();
          this.trip.id = data.id;
          this.trip.fromCity = data.fromAirport.city.name;
          this.trip.fromCountry = data.fromAirport.city.country.name;
          this.trip.fromAirport = data.fromAirport.name;
          this.trip.toAirport = data.toAirport.name;
          this.trip.toCity = data.toAirport.city.name;
          this.trip.toCountry = data.toAirport.city.country.name;
          this.trip.hotel = data.hotel.name;
          this.trip.departureDate = data.departureDate;
          this.trip.numberOfDays = data.numberOfDays;
          this.trip.boardBasis = data.type;
          this.trip.priceAdult = data.priceAdult;
          this.trip.priceChild = data.priceChild;
          this.trip.numberOfBedsAdult = data.numberOfBedsAdult;
          this.trip.numberOfBedsChild = data.numberOfBedsChild;
          this.trip.picture = 'https://picsum.photos/900/300';
        });
      }
      );
    this.trip = new Trip();
    this.trip.picture = 'https://picsum.photos/900/300';
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

