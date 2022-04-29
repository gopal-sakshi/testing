import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MiddleManService } from '../../services/middleman.service';

@Component({
  selector: 'app69-subjects45',
  templateUrl: './subjects45.component.html',
  styleUrls: ['./subjects45.component.scss']
})
export class Subjects45Component implements OnInit {

  countryNameSubscription:Subscription;
  countries:any = [];

  constructor(private middleManService:MiddleManService) { }

  ngOnInit(): void {
    this.countryNameSubscription = this.middleManService.getCountryMsg().subscribe(res => {
      this.countries.push(res.country);
    })
  }
  
  ngOnDestroy() {
    this.countryNameSubscription.unsubscribe();
  }

}
