import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAirport } from '../airport';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private localUrl = 'https://api.sepehr360new.ir///fa/Api/IranAirportTitlesApi/Get?request=%7B%22commonClientServerData%22:null,%22deviceToken%22:%22%22,%22sessionId%22:%22%22,%22commonClientServerDataVersion%22:%22%22%7D';
  constructor(private http : HttpClient) { }

  getData():Observable<any[]>{
    return this.http.get<any>(this.localUrl);
  }

  // filterByCity(s):Observable<IAirport[]>{
  //   return this.http.get<IAirport[]>(this.localUrl).filter<IAirport[]>(e => e.city.includes(s) || e.airport.includes(s) || e.iataCode.includes(s));

  //     }

}
