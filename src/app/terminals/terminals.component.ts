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

  filterWord;

  constructor(private data:DataService ,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      // this.allData = this.data.filterByIata(params.get('iataCode'));
      this.selectedIata = params.get('iataCode');
  })

  this.airport = this.data.getXByIata(this.selectedIata , 'airport')
  this.wentFlightTerminals = this.data.getXByIata(this.selectedIata , 'wentFlightTerminals')
  .sort((a,b) =>    a.terminal > b.terminal ? 1 : -1 );
  this.backFlightTerminals = this.data.getXByIata(this.selectedIata , 'backFlightTerminals')
  .sort((a,b) =>    a.terminal > b.terminal ? 1 : -1 );

}


}