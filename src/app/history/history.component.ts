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
   public historyData=[
     new Array<HistoryData>(),
     new Array<HistoryData>(),
     new Array<HistoryData>()
   ]
  
   public selectedMonth:number = 0 ;
   public id:number= 0 ; 
   public noHistory = false;

  constructor(private _month : GetMonthService , private _monthlyData :MonthlyHistoryService) { }

  ngOnInit(): void {
    this._month.getMonth().subscribe(data => {this.months = data})
    this.getData();
    }


  clicked(i){
    this.selectedMonth = i;
    this.id = Math.abs(this.selectedMonth) ;
        
    if(this.historyData[this.id].length === 0) this.getData() ; 
    if(this.noHistory) this.noHistory  = false;
    }

  

  getData(){
    this._monthlyData.getData(this.selectedMonth).subscribe(data => this.historyData[this.id]=data)
  }


  delete(post){
    let histories = this.historyData[this.id][0].userActionLogList;

    this._monthlyData.delete(post.logID).subscribe(() => {
      let index = histories.indexOf(post);
      histories.splice(index , 1)

      if(histories.length < 1)
       {
        this.noHistory = true; 
        this.historyData[this.id].length = 0;
      }  
     }

    )
  }
}
