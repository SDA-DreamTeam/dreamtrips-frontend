import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/model/trip.model';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

  trip: Trip;
  constructor() { }

  ngOnInit(){
    this.trip = new Trip();
    this.trip.id = 1;
    this.trip.fromCity = "Tallinn";
    this.trip.fromCountry = "Estonia";
    this.trip.fromAirport = "TLL";
    this.trip.toCity = "Tenerife";
    this.trip.toCountry = "Spain";
    this.trip.toAirport = "TFS";
    this.trip.hotel = "The Bay Club";
    this.trip.departureDate = "2021-09-11";
    this.trip.numberOfDays = 10;
    this.trip.boardBasis = "TT"; 
    this.trip.priceAdult = 399;
    this.trip.priceChild = 199;
    this.trip.numberOfBedsAdult = 2;
    this.trip.numberOfBedsChild = 1;
    this.trip.picture = 'https://picsum.photos/900/300';
  }

}
