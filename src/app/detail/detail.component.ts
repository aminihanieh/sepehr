import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { AirportsService } from '../services/airports.service';
import { selectedAirports } from '../models/airports.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  selectedCity:string;
  airportData= new selectedAirports();
  
  constructor(private activatedRoute: ActivatedRoute , private service:DataService ,private _airports:AirportsService) {
   
    };


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.selectedCity = params.get('iataCode');

      // this._airports.getSelectedData(this.selectedCity).subscribe(r => console.log(r['data'].airportInfoDto))

    //  .log(params);
    });

    this._airports.getSelectedData(this.selectedCity).subscribe(r => 
    this.airportData = r['data'].airportInfoDto
     )

    // this.airportData = this.service.filterByIata(this.selectedCity);
    // console.log(this.airportData);

  }

}
