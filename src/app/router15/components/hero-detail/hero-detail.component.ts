import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app69-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  heroId:number;
  heroDetails:any;

  constructor(private activatedRoute:ActivatedRoute,
    private heroService:HeroService) {
      this.activatedRoute.params.subscribe(res => {
        this.heroId = res.id;
      })
      console.log('I got called again');
    }

  ngOnInit(): void {
    this.getHeroFullDetails(this.heroId);
  }

  getHeroFullDetails(heroId:number) {
    this.heroDetails = this.heroService.getHeroFullDetails(heroId);
  }

}
