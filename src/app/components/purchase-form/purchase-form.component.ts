import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/model/trip.model';
import { TripDetailsComponent } from '../trip-details/trip-details.component';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})


export class PurchaseFormComponent implements OnInit {

count1: number = 0;
count2: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.count1 = 0;
    this.count2 = 0;
  }

  addCount1() {
    this.count1++;
  }

  addCount2() {
    this.count2++;
  }

  subCount1() {
    if(this.count1!=0) {
      this.count1--;
    }
  }

  subCount2() {
    if(this.count2!=0) {
      this.count2--;
    }
  }


}
