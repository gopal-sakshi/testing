import { Component, OnInit } from '@angular/core';
import { MiddleManService } from '../../services/middleman.service';

@Component({
  selector: 'app69-subjects45',
  templateUrl: './subjects45.component.html',
  styleUrls: ['./subjects45.component.scss']
})
export class Subjects45Component implements OnInit {

  countries:any = [];

  constructor(private middleManService:MiddleManService) { }

  ngOnInit(): void {
    this.middleManService.getCountryMsg().subscribe(res => {
      this.countries.push(res.country);
    })
  }

}
