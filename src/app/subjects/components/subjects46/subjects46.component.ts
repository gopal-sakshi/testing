import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MiddleManService } from '../../services/middleman.service';

@Component({
  selector: 'app69-subjects46',
  templateUrl: './subjects46.component.html',
  styleUrls: ['./subjects46.component.scss']
})
export class Subjects46Component implements OnInit {

  heroNameSubscription:Subscription;
  heroes:any = [];

  constructor(private middleManService:MiddleManService) { }

  ngOnInit(): void {
    this.heroNameSubscription = this.middleManService.getHeroMsg().subscribe(res => {
      console.log(res);
      this.heroes.push(res.hero);
    })
  }

  ngOnDestroy() {
    this.heroNameSubscription.unsubscribe();
  }
}
