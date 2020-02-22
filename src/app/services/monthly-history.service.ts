import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoryData } from '../models/history-data.model';

@Injectable({
  providedIn: 'root'
})
export class MonthlyHistoryService {

  constructor(private _http : HttpClient) { }


  getData(id):Observable<HistoryData[]>{
    let params = new HttpParams().set("request", id.toString());
    return this._http.get<HistoryData[]>(`https://api.sepehr360new.ir//fa/Api/ShowUserActionLogApi/Get` , { responseType: "json", params: params, withCredentials: true })
  }


  delete(id):Observable<any>{
    // let params = new HttpParams().set("request", id.toString());
 
    return this._http.put<any>('https://api.sepehr360new.ir//fa/Api/DeleteUserActionLogApi/Submit' , {"commonClientServerData":null,"deviceToken":"","sessionId":"","commonClientServerDataVersion":"","id":id} )
  }
}