import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service'
@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {

  constructor(private dataService: DataService) { }
   airportsData =[]; 
   selectedData;

  ngOnInit(){

    this.airportsData = this.dataService.getData();
    this.selectedData = this.dataService.filterByIata('THR');  
  
  }

filterData( e){
  this.airportsData = this.dataService.filterByCity( e);
 
} 



}
