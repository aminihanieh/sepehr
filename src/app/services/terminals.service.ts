import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Terminals } from '../models/terminals.model';

@Injectable({
  providedIn: 'root'
})
export class TerminalsService{

  
  constructor(private http:HttpClient ) { }

  
  getData(s):Observable<Terminals[]>{
    return this.http.get<Terminals[]>("https://api.sepehr360new.ir///fa/Api/AirportTerminalAirlineByAirportIataCodeApi/Get?request=%7B%22commonClientServerData%22:null,%22deviceToken%22:%22%22,%22sessionId%22:%22%22,%22commonClientServerDataVersion%22:%22%22,%22iataCode%22:%22" + s +"%22%7D");
  }
}
