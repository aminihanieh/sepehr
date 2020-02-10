import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAirport } from './airport';
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

}
