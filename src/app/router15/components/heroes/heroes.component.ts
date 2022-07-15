import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app69-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroList:any;
  constructor(private heroService:HeroService,
    private router:Router) {
      console.log('constructor called again');
      // this.router.routeReuseStrategy.shouldReuseRoute = () => true;
  }

  ngOnInit(): void {
    this.heroList = this.heroService.getHeroList();
  }
  
}
