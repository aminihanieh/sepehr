import {
  Component,
  OnInit
} from '@angular/core';
import {
  DataService
} from '../services/data.service'
import {
  AirportsService
} from '../services/airports.service';
import { Airports } from '../models/airports.model';
@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {

  public airportsData = [];
  public selectedData:Airports = new Airports();

  constructor(private dataService: DataService, private _airport: AirportsService) {
    
    this._airport.getData().subscribe(r  => {
      this.airportsData = r['data'].iranAirportTitlesList;
      this.selectedData = this.airportsData.find(s => s.iataCode === 'THR');

    });
  }
  
  ngOnInit() {
  
    

  }


  filterData( e) {
    this.airportsData = this.dataService.filterByCity(e);


  }



}
