import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAirport } from '../airport';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private localUrl = '/assets/data/data.json';
  constructor(private http : HttpClient) { }

  getData():Observable<IAirport[]>{
    return this.http.get<IAirport[]>(this.localUrl);
  }

  // filterByCity(s):Observable<IAirport[]>{
  //   return this.http.get<IAirport[]>(this.localUrl).filter<IAirport[]>(e => e.city.includes(s) || e.airport.includes(s) || e.iataCode.includes(s));

  //     }

}
