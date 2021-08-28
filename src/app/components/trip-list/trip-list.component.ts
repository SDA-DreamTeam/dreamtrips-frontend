import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/model/trip.model';
import { Injectable } from '@angular/core';
import { TripServiceService } from 'src/app/trip-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trips: Trip[] = []

  constructor(private router: Router, private tripService: TripServiceService) { }

  ngOnInit(): void {
    this.getSuggestionTrips();
  }

  getSuggestionTrips() {
    this.tripService.getSuggestionTrips().subscribe(data => {
      this.trips = []
      data.content.forEach( (element) => {
        this.trips.push({id: element.id, fromAirport: element.fromAirport.name, departureDate: element.departureDate })
      });
    });
  }


}
