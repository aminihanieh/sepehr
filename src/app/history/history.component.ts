import { Component, OnInit } from '@angular/core';
import { GetMonthService } from '../services/get-month.service';
import { Month } from '../models/month.model';
import { MonthlyHistoryService } from '../services/monthly-history.service';
import { HistoryData } from '../models/history-data.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
   public months:Month[] = new Array<Month>();
   public historyData:HistoryData[]= new Array<HistoryData>() ;
   public selectedMonth:number = 0 ;
  constructor(private _month : GetMonthService , private _monthlyData :MonthlyHistoryService) { }

  ngOnInit(): void {
    this._month.getMonth().subscribe(data => this.months = data)
    this.getData(this.selectedMonth);
    }


  clicked(i){
    this.selectedMonth = i.monthId;
    this.getData(this.selectedMonth)
    }

  getData(monthId){
    this._monthlyData.getData(monthId).subscribe(data => console.log(data))

  }
  // log(){
  //   console.log( this.historyData);
  // }

}
