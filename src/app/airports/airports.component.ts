import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {

  constructor(private dataService: DataService,) { }
filterWord;
  airportData =[];
  tehranAirport={
    city:'تهران',
    airport:"مهرآباد",
    id:'THR'
  } ;

  ngOnInit(): void {

    this.airportData = this.dataService.getData();
    // .filter(e => e.airport != this.tehranAirport.airport);
  
  }

filterData(e){
  this.airportData = this.dataService.filterByCity(this.filterWord);
  // console.log(this.airportData);
  // console.log(e);
} 

log(){
console.log(this.airportData);
}

}
