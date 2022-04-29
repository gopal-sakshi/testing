import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MiddleManService } from '../../services/middleman.service';

@Component({
  selector: 'app69-subjects47',
  templateUrl: './subjects47.component.html',
  styleUrls: ['./subjects47.component.scss']
})
export class Subjects47Component implements OnInit {

  animalNameSubscription:Subscription
  animals:any = [];

  constructor(private middleManService:MiddleManService) { }

  ngOnInit(): void {
    this.animalNameSubscription = this.middleManService.getAnimalMsg().subscribe(res => {
      console.log(res);
      this.animals.push(res.animal);
    })
  }

  ngOnDestroy() {
    this.animalNameSubscription.unsubscribe();
  }
}
