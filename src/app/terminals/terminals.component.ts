import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { TerminalsService } from '../services/terminals.service';
import { Terminals } from '../models/terminals.model';

@Component({
  selector: 'app-terminals',
  templateUrl: './terminals.component.html',
  styleUrls: ['./terminals.component.scss']
})
export class TerminalsComponent implements OnInit {
  selectedIata;
  airport;
  wentFlightTerminals;
  backFlightTerminals;

 
  allData= new Terminals();

  filterWord;
 

  constructor(
     private _data:DataService ,
     private _terminal:TerminalsService ,
     private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      // this.allData = this.data.filterByIata(params.get('iataCode'));
      this.selectedIata = params.get('iataCode');

      this._terminal.getData(this.selectedIata).subscribe(r => console.log(r))

  })

  // this.airport = this.allData.airlineName;
  // this.wentFlightTerminals = this.allData.inboundFlightsTerminalName
  // .sort((a,b) =>    a.terminal > b.terminal ? 1 : -1 );
  // this.backFlightTerminals = this.allData.inboundFlightsTerminalName
  // .sort((a,b) =>    a.terminal > b.terminal ? 1 : -1 );

}

filterData(e){
  this.wentFlightTerminals = this._data.filterByTerminal("wentFlightTerminals" ,this.selectedIata , e);  
  console.log("TCL: TerminalsComponent -> filterData -> this.wentFlightTerminals", this.wentFlightTerminals)
  this.backFlightTerminals = this._data.filterByTerminal("backFlightTerminals" ,this.selectedIata , e); 
  console.log("TCL: TerminalsComponent -> filterData -> this.backFlightTerminals", this.backFlightTerminals)
   
} 


}