import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TerminalsService } from '../services/terminals.service';
import { Terminals } from '../models/terminals.model';
import { Airports } from '../models/airports.model';
import { AirportsService } from '../services/airports.service';

@Component({
  selector: 'app-terminals',
  templateUrl: './terminals.component.html',
  styleUrls: ['./terminals.component.scss']
})
export class TerminalsComponent implements OnInit {
  public selectedIata:string;
  public airportData =new Airports();
  public terminalsData =new Array<Terminals>();
  public filteredData = new Array<Terminals>();

 
 

  constructor(
     private _airport:AirportsService ,
     private _terminal:TerminalsService ,
     private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //get the parameter which has been sent from detail component
      this.activatedRoute.paramMap.subscribe(params => {
        //store the iata code by splitting the string to make an array
        this.selectedIata = params.get('iataCode').split('-')[4];
      }); 

     //get the airport data from api by iata code
     this._airport.getSelectedData(this.selectedIata).subscribe(r => 
    this.airportData = r['data'].airportInfoDto
     )
    //get the terminals data from api by iata code
    this._terminal.getData(this.selectedIata).subscribe(r =>
      this.terminalsData = this.filteredData = r['data'].airportTerminalAirlineList)

}

 //real time search based on terminal's name
filterData(query){
       this.filteredData = (query) ?
              this.terminalsData.filter(f => f.airlineName.includes(query) || f.airlineName.includes(query) )   
        :  this.terminalsData  
  } 


}