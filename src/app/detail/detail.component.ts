import { Component, OnInit} from '@angular/core';
import {  ActivatedRoute,  Router} from '@angular/router';
import {  AirportsService} from '../services/airports.service';
import {  selectedAirports} from '../models/selected-airports.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {
  private selectedData: string[];
  private airportData = new selectedAirports();
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private _airports: AirportsService,
    private _router: Router) {
      
  };


  ngOnInit(): void {
    //get the parameter which has been sent from airports component
    this.activatedRoute.paramMap.subscribe(params => {
      //get the data from service by iata code
      this.selectedData = params.get('iataCode')
      //split the string to make an array
      .split('-');

     });
     
     //get the airport data from api by the last child of the array which is iata code
    this._airports.getSelectedData(this.selectedData[this.selectedData.length-1]).subscribe(r =>
      this.airportData = r['data'].airportInfoDto
    )

  }

  //navigate each airports to its detailed page by a string of readable parameters(iataCode)
  navigate() {
    this._router.navigate(['fa/flight/terminals/', 'فرودگاه'+'-' + this.selectedData[1] + '-' +  this.selectedData[2]  + '-' + 'airport' + '-' + this.airportData.iataCode])
  }
}
