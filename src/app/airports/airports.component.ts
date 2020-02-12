import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service'
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {

  constructor(private dataService: DataService,private _dataBase: DatabaseService) { }
  filterWord;
  airportData =[];

  public database = [];
  

  selectedData;

  ngOnInit(){

    this.airportData = this.dataService.getData();
    this.selectedData = this.dataService.filterByIata('THR');

    console.log(this.airportData);
    // .filter(e => e.airport != this.tehranAirport.airport);

    // this._dataBase.getData()
    // .subscribe(e => this.database = e);
  
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
