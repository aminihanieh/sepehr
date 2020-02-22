import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airports } from '../models/airports.model';
import { selectedAirports } from '../models/selected-airports.model';

@Injectable({
  providedIn: 'root'
})
export class AirportsService {

  url="https://api82.sepehr360new.ir///fa/Api/IranAirportTitlesApi/Get?request=%7B%22commonClientServerData%22:null,%22deviceToken%22:%22%22,%22sessionId%22:%22%22,%22commonClientServerDataVersion%22:%22%22%7D";
  
  selectUrl="https://api82.sepehr360new.ir///fa/Api/AirportInfoByIataCodeApi/Get?request=%7B%22commonClientServerData%22:null,%22deviceToken%22:%22%22,%22sessionId%22:%22%22,%22commonClientServerDataVersion%22:%22%22,%22iataCode%22:%22THR%22%7D";

  constructor(private http :HttpClient) { }
 

  getData():Observable<Airports[]>{
    return this.http.get<Airports[]>(this.url);
  }
      
  getSelectedData(s):Observable<selectedAirports[]>{
            return this.http.get<selectedAirports[]>("https://api82.sepehr360new.ir///fa/Api/AirportInfoByIataCodeApi/Get?request=%7B%22commonClientServerData%22:null,%22deviceToken%22:%22%22,%22sessionId%22:%22%22,%22commonClientServerDataVersion%22:%22%22,%22iataCode%22:%22" +s+"%22%7D");
    }
      
}
