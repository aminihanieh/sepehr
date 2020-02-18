import {Component,  OnInit} from '@angular/core';
import {AirportsService} from '../services/airports.service';
import { Airports } from '../models/airports.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})

export class AirportsComponent implements OnInit {

  public airportsData :Array<Airports> = new Array<Airports>() ;
  public filteredData :Array<Airports> = new Array<Airports>() ;
  public selectedData = new Airports();
  public address: string;

  constructor(private _airport: AirportsService , private _router : Router) {

   }
  
  ngOnInit() {
    // get data from the api
    this._airport.getData().subscribe(data  => {
      this.airportsData = this.filteredData = data['data'].iranAirportTitlesList;
      // store the selected airport's data (on the top of the list)
      this.selectedData = this.airportsData.find(s => s.iataCode === 'THR');
    });
  }

  //real time search based on airports name,city and iata code
  filterData( query) {
    this.filteredData = (query) ?
              this.airportsData.filter(f => f.cityName.includes(query) || f.name.includes(query) || f.iataCode.includes(query))   
        :  this.airportsData  
  }

  //navigate each airports to its detailed page by a string of readable parameters(iataCode)
  navigate(q) {
    this._router.navigate([ 'fa/flight/airports' ,'فرودگاه' + '-' + q.name.replace(/ /g,"_") + '-' + q.nameEn.replace(/ /g,"_") + '-' + 'airport' + '-' + q.iataCode ])

   }
 }


