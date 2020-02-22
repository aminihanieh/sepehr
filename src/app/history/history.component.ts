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
   public id:number=0 ; 
   public noPost;

  constructor(private _month : GetMonthService , private _monthlyData :MonthlyHistoryService) { }

  ngOnInit(): void {
    this._month.getMonth().subscribe(data => {this.months = data})
    this.getData(this.selectedMonth);
    }


  clicked(i){
    this.selectedMonth = i;
    this.id = Math.abs(this.selectedMonth) ;
        
    if(this.historyData[this.id].length === 0) this.getData(i) ; 

      }

  getData(monthId){
    this._monthlyData.getData(monthId).subscribe(data => this.historyData[Math.abs(monthId)]=data)}


  delete( post){
    let posts = this.historyData[Math.abs(this.id)][0].userActionLogList;

    this._monthlyData.delete(post.logID).subscribe(deleted => {
      let index = posts.indexOf(post);
      posts.splice(index , 1)
     }

    )
  }
}
