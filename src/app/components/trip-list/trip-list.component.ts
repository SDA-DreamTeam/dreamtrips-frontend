import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/model/trip.model';
import { TripServiceService } from 'src/app/trip-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trips: Trip[] = []

  constructor(
    private router: Router,
    private tripService: TripServiceService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.findTrips();
  }

  findTrips() {
    this.route.queryParams
      .subscribe(params => {
        this.tripService.findTrips(params['fromCountry'], params['toCountry'], params['departureDate']).subscribe((res: any) => {
          this.trips = []
          res.content.forEach((element) => {
            this.trips.push({ id: element.id, fromAirport: element.fromAirport.name, departureDate: element.departureDate })
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
