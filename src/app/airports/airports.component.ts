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
   airportData =[];

  public database = [];
  

  selectedData;

  ngOnInit(){

    this.airportData = this.dataService.getData();
    this.selectedData = this.dataService.filterByIata('THR');

    console.log(this.airportData);
  
  
  }

filterData( e){
  this.airportData = this.dataService.filterByCity( e);
 
} 

log(){
console.log(this.airportData);
}

}
