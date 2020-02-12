import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

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

  terminals=[];

  allData;

  filterWord;
 

  constructor(private data:DataService ,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.allData = this.data.filterByIata(params.get('iataCode'));
      this.selectedIata = params.get('iataCode');
  })

  this.airport = this.allData.airport;
  this.wentFlightTerminals = this.allData.wentFlightTerminals
  .sort((a,b) =>    a.terminal > b.terminal ? 1 : -1 );
  this.backFlightTerminals = this.allData.backFlightTerminals
  .sort((a,b) =>    a.terminal > b.terminal ? 1 : -1 );

}

filterData(e){
  this.wentFlightTerminals = this.data.filterByTerminal("wentFlightTerminals" ,this.selectedIata , e);  
  console.log("TCL: TerminalsComponent -> filterData -> this.wentFlightTerminals", this.wentFlightTerminals)
  this.backFlightTerminals = this.data.filterByTerminal("backFlightTerminals" ,this.selectedIata , e); 
  console.log("TCL: TerminalsComponent -> filterData -> this.backFlightTerminals", this.backFlightTerminals)
   
} 


}