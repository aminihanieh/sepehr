import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import {
  Month
} from '../models/month.model';

@Injectable({
  providedIn: 'root'
})
export class GetMonthService {
  private url: string = 'https://api.sepehr360new.ir//fa/Api/ShowUserActionLogApi/GetRecentMonthList'

  constructor(private _http: HttpClient) {}


  getMonth(): Observable < Month[] > {
    return this._http.get < Month[] > (this.url);
  }
}
