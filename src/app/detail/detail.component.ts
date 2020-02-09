import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  selectedCity;
  airportData;
  constructor(private activatedRoute: ActivatedRoute , private service:DataService) {
   
    };


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
    this.selectedCity= params.get('id');
    });
console.log(this.selectedCity);
    this.airportData = this.service.filterById(this.selectedCity)
  }

}
