import { Component, OnInit } from '@angular/core';
import { GetMonthService } from '../services/get-month.service';
import { Month } from '../models/month.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
   public months:Month[] = new Array<Month>();
   public historyData ;
   selectedMonth:number = 0 ;
  constructor(private _month : GetMonthService) { }

  ngOnInit(): void {
    this._month.getMonth().subscribe(data => this.months = data)
  }

}
